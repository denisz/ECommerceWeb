import React from 'react';
import history from 'core/history';
import Sale from 'components/Sale';
import Link from 'components/Link';
import Button from 'components/Button';
import {Price} from 'components/Currency';
import Shipping from 'components/Shipping';
import Toolbar from 'components/ButtonToolbar';
import Dictionary from 'components/Dictionary';
import Address, {parse} from 'components/Address';
import {FormComponent} from 'modules/Flux';
import Order from 'flux/Order';
import './OrderDetail.css';
import * as keys from './constants';

export default class OrderDetail extends FormComponent {
  getInitialStore() {
    return [Order];
  }

  getDataForModel() {
    return Order.toJSON();
  }

  getStoreKeys() {
    return [];
  }

  render() {
    const {form} = this.state;

    return (
        <div className="Order-detail">
          <h5>{`Заказ № `}
            <small className="text-muted">{form.getObject(
                keys.kInvoiceKey)}</small>
          </h5>

          <table className="table table-bordered Order-detail__table">
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
                          className="Order-detail__name"
                      >
                        {i.product.name} <br/>
                        <small className="text-muted">{i.product.producer}</small>
                      </Link>
                      <span>{` x ${i.amount}`}</span>
                    </td>
                    <td>
                      <Price value={i.total} className="Order-detail__price"/>
                    </td>
                  </tr>
              ))
            }
            </tbody>
          </table>

          <Dictionary
              className="Order-detail__dict"
              pairs={[
                {
                  label: 'Цена товара:',
                  value: <Price value={form.getObject(keys.kProductPriceKey)}
                                className="Order-detail__price"/>
                },
                {
                  // disabled: form.isNull(keys.kDiscountKey),
                  label: 'Скидка:',
                  value: <Sale {...form.getObject(keys.kDiscountKey, {})}
                               className="Order-detail__sale"/>
                },
                {
                  label: 'Цена со скидкой:',
                  value: <Price value={form.getObject(keys.kSubtotalKey)}
                                className="Order-detail__price"/>
                }
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
              className="Order-detail__dict"
              pairs={[
                {
                  label: 'Доставка:',
                  value: <Shipping {...form.getObject(keys.kDeliveryKey)}/>,
                },
                {
                  label: 'Цена доставки:',
                  value: <Price value={form.getObject(keys.kDeliveryPriceKey)}
                                className="Order-detail__price"/>,
                },
                {
                  label: 'Итого к оплате:',
                  value: <Price
                      value={form.getObject(keys.kTotalKey)}
                      className="Order-detail__price"/>,
                },
              ]}
          />

          <div className="Order-detail__address">
            <Address {...parse(form.getObject(keys.kAddressKey, {}))}/>
          </div>

          <Toolbar right className="Positions__button-toolbar">
            <Button
                onClick={() => history.push('/')}
                className="Order-detail__back">В каталог</Button>
          </Toolbar>
        </div>
    );
  }
}

OrderDetail.propTypes = {};
OrderDetail.defaultProps = {};
