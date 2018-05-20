import React from 'react';
import PropTypes from 'prop-types';
import {FormComponent} from 'modules/Flux';
import Image from 'components/Image';
import Title from 'components/Title';
import Button from 'components/Button';
import {Price} from 'components/Currency';
import ButtonToolbar from 'components/ButtonToolbar';
import cx from 'classnames';
import Cart from 'flux/Cart';
import CartActions from 'flux/CartActions';
import {NavAdapter} from 'modules/NavController';
import MethodDelivery from './MethodDelivery';
import './Delivery.css';
import * as keys from './constants';
import {icons, kMethodKey} from './constants';
import {
  kDeliveryMethodEMC,
  kDeliveryMethodRapid,
  kDeliveryMethodStandard,
  kDeliveryProviderRussiaPost,
} from 'services/localizedDelivery';

export default class Delivery extends FormComponent {
  getInitialStore() {
    return [Cart];
  }

  getDataForModel() {
    return Cart.delivery;
  }

  retrieveStoreData(store, attrs) {
    return {
      total: attrs.total || 0,
      discount: attrs.discount,
      deliveryPrice: attrs.deliveryPrice || 0,
      isEmpty: store.isEmpty(),
      providers: store.providers,
      subtotal: attrs.subtotal || 0,
      positions: attrs.positions || [],
    };
  }

  didChangeStoreState(store, attrs) {
    const {form} = this.state;
    form.setValues(store.delivery);
  }

  async formDidChangeValues(form, context) {
    if (context.comparePath(keys.kProviderKey)) {
      form.unset(keys.kMethodKey);
    }

    if (context.comparePath(keys.kMethodKey)) {
      try {
        const attrs = await this.onSubmit();
        await CartActions.delivery(attrs);

      } catch (e) {
        console.error(e);
      }
    }

    super.formDidChangeValues(form, context);
  }

  render() {
    const {className} = this.props;
    const {form, lock, subtotal, providers, deliveryPrice, total} = this.state;
    const {adapter} = this.context;

    return (
        <div className={cx('Delivery', className)}>
          <Title>Способ доставки</Title>

          <div className="Delivery__providers">
            {
              providers.map((i) => (
                  <div
                      key={i}
                      className={cx('Delivery__provider', {
                        'Delivery__provider--active': form.isEqual(
                            keys.kProviderKey, i),
                      })}
                      onClick={form.wrapperConstant(keys.kProviderKey, i)}
                  >
                    <Image src={icons[i]}/>
                  </div>
              ))
            }
          </div>

          {
            form.isEqual(keys.kProviderKey, kDeliveryProviderRussiaPost) &&
            <MethodDelivery value={form.getObject(kMethodKey)}
                            onChange={form.wrapperChange(kMethodKey)}
                            options={[
                              {
                                label: 'Обычный',
                                value: kDeliveryMethodStandard,
                                image: 'ic_delivery_standard.png',
                              },
                              {
                                label: 'Ускоренный',
                                value: kDeliveryMethodRapid,
                                image: 'ic_delivery_rapid.png',
                              },
                              {
                                label: 'Курьерский',
                                value: kDeliveryMethodEMC,
                                image: 'ic_delivery_ems.png',
                              },
                            ]}/>
          }

          <hr className="Delivery__hr"/>

          <div className="Delivery__footer">
            <div className="Delivery__footer-row">
              <div className="Delivery__footer-label">Цена товара</div>
              <div className="Delivery__footer-value">
                <Price value={subtotal}/>
              </div>
            </div>

            <div className="Delivery__footer-row">
              <div className="Delivery__footer-label">Цена доставки</div>
              <div className="Delivery__footer-value">
                <Price value={deliveryPrice}/>
              </div>
            </div>

            <div className="Delivery__footer-row">
              <div className="Delivery__footer-label">Итого к оплате</div>
              <div className="Delivery__footer-value">
                <Price value={total}/>
              </div>
            </div>
          </div>

          <ButtonToolbar right className="Delivery__button-toolbar">
            <Button locked={lock.is()}
                    onClick={adapter.handleBack}
                    className="Delivery__btn_edit">Изменить</Button>
            <Button locked={lock.is()}
                    onClick={adapter.handleNext}
                    className="Delivery__btn_next">Оформить</Button>
          </ButtonToolbar>
        </div>
    );
  }
}

Delivery.propTypes = {
  className: PropTypes.string,
};
Delivery.defaultProps = {};

Delivery.contextTypes = {
  adapter: PropTypes.instanceOf(NavAdapter).isRequired,
};
