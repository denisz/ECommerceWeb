import React from 'react';
import history from 'core/history';
import Sale from 'components/Sale';
import Link from 'components/Link';
import Button from 'components/Button';
import {Price} from 'components/Currency';
import Shipping from 'components/Shipping';
import Toolbar from 'components/ButtonToolbar';
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
                      >{`${i.product.name} x ${i.amount}`}</Link>
                    </td>
                    <td>
                      <Price value={i.total} className="Order-detail__price"/>
                    </td>
                  </tr>
              ))
            }
            </tbody>
          </table>

          <dl className="row Order-detail__dict">
            <dt className="col-sm-3 col-6">Цена товара:</dt>
            <dd className="col-sm-9 col-6">
              <Price value={form.getObject(keys.kProductPriceKey)}
                     className="Order-detail__price"/>
            </dd>

            <dt className="col-sm-3 col-6">Скидка:</dt>
            <dd className="col-sm-9 col-6">
              <Sale {...form.getObject(keys.kDiscountKey, {})}
                    className="Order-detail__sale"/>
            </dd>

            <dt className="col-sm-3 col-6">Цена со скидкой:</dt>
            <dd className="col-sm-9 col-6">
              <Price value={form.getObject(keys.kSubtotalKey)}
                     className="Order-detail__price"/>
            </dd>
          </dl>

          <h6 className="text-muted">
            <small>
              На товары участвующие в распродаже система скидок не
              распространяется, и при совместном заказе с другими товарами их
              стоимость не учитывается в общей сумме заказа для расчета скидки.
            </small>
          </h6>

          <dl className="row Order-detail__dict">
            <dt className="col-sm-3 col-6">Доставка:</dt>
            <dd className="col-sm-9 col-6">
              <Shipping {...form.getObject(keys.kDeliveryKey)}/>
            </dd>

            <dt className="col-sm-3 col-6">Цена доставки:</dt>
            <dd className="col-sm-9 col-6">
              <Price value={form.getObject(keys.kDeliveryPriceKey)}
                     className="Order-detail__price"/>
            </dd>

            <dt className="col-sm-3 col-6">Итого к оплате:</dt>
            <dd className="col-sm-9 col-6">
              <Price
                  value={form.getObject(keys.kTotalKey)}
                  className="Order-detail__price"/>
            </dd>
          </dl>

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
