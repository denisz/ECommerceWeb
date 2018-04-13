import React from 'react';
import Sale from 'components/Sale';
import Link from 'components/Link';
import Title from 'components/Title';
import Button from 'components/Button';
import {Price} from 'components/Currency';
import Shipping from 'components/Shipping';
import Dictionary from 'components/Dictionary';
import Toolbar from 'components/ButtonToolbar';
import Address, {parse} from 'components/Address';
import {FormComponent} from 'modules/Flux';
import Cart from 'flux/Cart';
import './Review.css';
import * as keys from './constants';
import PropTypes from 'prop-types';
import {NavAdapter} from 'modules/NavController/NavController';

export default class Review extends FormComponent {
  getInitialStore() {
    return [Cart];
  }

  getDataForModel() {
    return Cart.toJSON();
  }

  getStoreKeys() {
    return [];
  }

  render() {
    const {form, lock} = this.state;
    const {adapter} = this.context;

    return (
        <div className="Review">
          <Title>Заказ</Title>
          <table className="table table-bordered Review__table">
            <thead>
            <tr>
              <th scope="col">Товар</th>
              <th scope="col">Цена</th>
            </tr>
            </thead>
            <tbody>
            {
              form.getObject(keys.kPositionsKey, []).map((i, idx) => (
                  <tr key={idx}>
                    <td>
                      <Link
                          to={`/product/${i.product.SKU}`}
                          external
                          className="Review__name"
                      >
                        {i.product.name} <br/>
                        <small
                            className="text-muted">{i.product.producer}</small>
                      </Link>
                      <span>{` x ${i.amount}`}</span>
                    </td>
                    <td>
                      <Price value={i.total} className="Review__price"/>
                    </td>
                  </tr>
              ))
            }
            </tbody>
          </table>

          <Dictionary
              className="Review__dict"
              pairs={[
                {
                  label: 'Цена товара:',
                  value: <Price value={form.getObject(keys.kProductPriceKey)}
                                className="Review__price"/>,
                },
                {
                  // disabled: form.isNull(keys.kDiscountKey),
                  label: 'Скидка:',
                  value: <Sale {...form.getObject(keys.kDiscountKey, {})}
                               className="Review__sale"/>,
                },
                {
                  label: 'Цена со скидкой:',
                  value: <Price value={form.getObject(keys.kSubtotalKey)}
                                className="Review__price"/>,
                },
              ]}
          />

          <h6 className="text-muted">
            <small>
              На товары участвующие в распродаже система скидок не
              распространяется, и при совместном заказе с другими товарами их
              стоимость не учитывается в общей сумме заказа для расчета скидки.
            </small>
          </h6>

          <Dictionary
              className="Review__dict"
              pairs={[
                {
                  label: 'Доставка:',
                  value: <Shipping {...form.getObject(keys.kDeliveryKey)}/>,
                },
                {
                  label: 'Цена доставки:',
                  value: <Price value={form.getObject(keys.kDeliveryPriceKey)}
                                className="Review__price"/>,
                },
                {
                  label: 'Итого к оплате:',
                  value: <Price
                      value={form.getObject(keys.kTotalKey)}
                      className="Review__price"/>,
                },
              ]}
          />

          <div className="Review__address">
            <Address {...parse(form.getObject(keys.kAddressKey, {}))}/>
          </div>

          <Toolbar right className="Review__button-toolbar">
            <Button
                onClick={adapter.handleBack}
                className="Review__btn_edit">Изменить</Button>
            <Button
                locked={lock.is()}
                lock="Обработка..."
                onClick={adapter.handleNext}
                className="Review__btn_next">Подтвердить</Button>
          </Toolbar>
        </div>
    );
  }
}

Review.contextTypes = {
  adapter: PropTypes.instanceOf(NavAdapter).isRequired,
};
