import React from 'react';
import Link from 'components/Link';
import Button from 'components/Button';
import {Price} from 'components/Currency';
import Toolbar from 'components/ButtonToolbar';
import Shipping from 'components/Shipping';
import Status from 'components/OrderStatus';
import Address, {parse} from 'components/Address';
import {FormComponent} from 'modules/Flux';
import Order from 'flux/Order';
import * as keys from './constants';
import './OrderDetail.css';
import history from 'core/history';

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
    console.log(form.data, parse(form.getObject(keys.kAddressKey, {})));

    return (
        <div className="Order-detail">
          <h5>{`Заказ №`} <small className="text-muted">{form.getObject(keys.kInvoiceKey)}</small></h5>

          <dl className="row">
            <dt className="col-sm-3">Статус заказа</dt>
            <dd className="col-sm-9">
              <Status value={form.getObject(keys.kStatusKey)}/>
            </dd>
          </dl>

          <table className="table Order-detail__table">
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
                          className="Order-detail__name">{`${i.product.name} x ${i.amount}`}</Link>
                    </td>
                    <td>
                      <Price value={i.total} className="Order-detail__price"/>
                    </td>
                  </tr>
              ))
            }
            <tr>
              <td className="text-right">Итого:</td>
              <td>
                <Price value={form.getObject(keys.kTotalKey)} className="Order-detail__price"/>
              </td>
            </tr>
            </tbody>
          </table>

          <div className="Order-detail__delivery">
            <Shipping {...form.getObject(keys.kDeliveryKey)}/>
          </div>

          <div className="Order-detail__address">
            <Address {...parse(form.getObject(keys.kAddressKey, {}))}/>
          </div>

          <Toolbar right className="Positions__button-toolbar">
            <Button
                onClick={() => history.push('/') }
                className="Order-detail__back">В каталог</Button>
          </Toolbar>
        </div>
    );
  }
}

OrderDetail.propTypes = {};
OrderDetail.defaultProps = {};
