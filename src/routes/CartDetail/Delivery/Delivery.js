import React from 'react';
import cx from 'classnames';
import Cart from 'flux/Cart';
import PropTypes from 'prop-types';
import {FormComponent} from 'modules/Flux';
import Title from 'components/Title';
import Button from 'components/Button';
import {Price} from 'components/Currency';
import ButtonToolbar from 'components/ButtonToolbar';
import DeliveryPeriod from 'components/DeliveryPeriod';
import CartActions from 'flux/CartActions';
import {NavAdapter} from 'modules/NavController';
import MethodDelivery from './MethodDelivery';
import ProviderDelivery from './ProviderDelivery';
import {createMethodsProps, createProviderProps} from './helper';
import './Delivery.css';
import * as keys from './constants';

const determinateMethods = (methods, provider) => {
  console.log(methods, provider);
  return methods[provider] || [];
};

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
      deliveryPeriod: attrs.deliveryPeriod || { Min: 0, Max: 0},
      isEmpty: store.isEmpty(),
      providers: store.providers,
      methods: store.methods,
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
    const {form, lock, subtotal, providers, methods, deliveryPrice, deliveryPeriod, total} = this.state;
    const {adapter} = this.context;

    console.log(deliveryPeriod)
    return (
        <div className={cx('Delivery', className)}>
          <Title>Способ доставки</Title>

          <ProviderDelivery value={form.getObject(keys.kProviderKey)}
                            onChange={form.wrapperChange(keys.kProviderKey)}
                            options={createProviderProps(providers)}/>

          <MethodDelivery value={form.getObject(keys.kMethodKey)}
                          onChange={form.wrapperChange(keys.kMethodKey)}
                          options={createMethodsProps(
                              determinateMethods(methods, form.getObject(keys.kProviderKey))
                          )}/>

          <hr className="Delivery__hr"/>

          <div className="Delivery__footer">
            {
              deliveryPeriod.Min > 0 && deliveryPeriod.Max > 0 &&
              <div className="Delivery__footer-row">
                <div className="Delivery__footer-label">Время доставки</div>
                <div className="Delivery__footer-value">
                  <DeliveryPeriod min={deliveryPeriod.Min} max={deliveryPeriod.Max}/>
                </div>
              </div>
            }

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
