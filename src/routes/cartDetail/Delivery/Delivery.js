import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import Title from 'components/Title';
import Button from 'components/Button';
import Currency from 'components/Currency';
import ButtonToolbar from 'components/ButtonToolbar';
import cx from 'classnames';
import Cart from 'flux/Cart';
import { FormComponent } from 'modules/Flux';
import { NavAdapter } from 'modules/NavController';
import './Delivery.css';
import * as keys from './constants';

export default class Delivery extends FormComponent {
  getInitialStore() {
    return [Cart];
  }

  retrieveStoreData(store, attrs) {
    return {
      price: attrs.price || 0,
      isEmpty: store.isEmpty(),
      discount: attrs.discount,
      positions: attrs.positions || [],
    }
  }

  async formDidChangeValues(form, context) {
    if (context.comparePath(keys.kProviderKey)) {
      form.unset(keys.kMethodKey);
    }

    if (context.comparePath(keys.kMethodKey)) {
      const attrs = await this.onSubmit();
      console.log(attrs)
    }

    super.formDidChangeValues(form, context);
  }

  render() {
    const { className } = this.props;
    const { form, price, discount } = this.state;
    const { adapter } = this.context;

    return (
      <div className={cx('Delivery', className)}>
        <Title>Способ доставки</Title>

        <div className="Delivery__providers">
          <div
            className={cx('Delivery__provider_russiapost', {
              'Delivery__provider--active': form.isEqual(keys.kProviderKey, keys.kProviderRussiaPost),
            })}
            onClick={form.wrapperConstant(keys.kProviderKey, keys.kProviderRussiaPost)}
          >
            <Image src="ic_delivery_russiapost.png"/>
          </div>

          <div
            className={cx('Delivery__provider_boxberry', {
              'Delivery__provider--active': form.isEqual(keys.kProviderKey, keys.kProviderBoxberry),
            })}
            onClick={form.wrapperConstant(keys.kProviderKey, keys.kProviderBoxberry)}
          >
            <Image src="ic_delivery_boxberry.png"/>
          </div>
        </div>

        {
          form.isEqual(keys.kProviderKey, keys.kProviderRussiaPost) &&
          <div className="Delivery__methods">
            <div
              className={cx('Delivery__method_standard', {
                'Delivery__method--active': form.isEqual(keys.kMethodKey, keys.kMethodStandard),
              })}
              onClick={form.wrapperConstant(keys.kMethodKey, keys.kMethodStandard)}
            >
              <Image src="ic_delivery_standard.png" />
              <div className="Delivery__method-title">Обычный</div>
            </div>

            <div
              className={cx('Delivery__method_rapid', {
                'Delivery__method--active': form.isEqual(keys.kMethodKey, keys.kMethodRapid),
              })}
              onClick={form.wrapperConstant(keys.kMethodKey, keys.kMethodRapid)}
            >
              <Image src="ic_delivery_rapid.png"/>
              <div className="Delivery__method-title">Ускоренный</div>
            </div>

            <div
              className={cx('Delivery__method_emc', {
                'Delivery__method--active': form.isEqual(keys.kMethodKey, keys.kMethodEMC),
              })}
              onClick={form.wrapperConstant(keys.kMethodKey, keys.kMethodEMC)}
            >
              <Image src="ic_delivery_ems.png" />
              <div className="Delivery__method-title">Курьерский</div>
            </div>
          </div>
        }

        <hr className="Delivery__hr"/>

        <div className="Delivery__footer">
          <div className="Delivery__footer-row">
            <div className="Delivery__footer-label">Цена товара</div>
            <div className="Delivery__footer-value">
              <Currency value={price} discount={discount} />
            </div>
          </div>

          <div className="Delivery__footer-row">
            <div className="Delivery__footer-label">Цена доставки</div>
            <div className="Delivery__footer-value">
              <Currency value={0} />
            </div>
          </div>

          <div className="Delivery__footer-row">
            <div className="Delivery__footer-label">Итого к оплате</div>
            <div className="Delivery__footer-value">
              <Currency value={0} />
            </div>
          </div>
        </div>

        <ButtonToolbar right className="Delivery__button-toolbar">
          <Button
            onClick={adapter.handleBack }
            className="Delivery__btn_edit">Изменить</Button>
          <Button
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
