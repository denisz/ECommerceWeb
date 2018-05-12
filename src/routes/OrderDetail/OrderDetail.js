import React from 'react';
import history from 'core/history';
import Button from 'components/Button';
import Toolbar from 'components/ButtonToolbar';
import Dictionary from 'components/Dictionary';
import OrderView from 'components/OrderView';
import OrderStatus from 'components/OrderStatus';
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

          <Dictionary className="OrderView__dict"
                      pairs={[
                        {
                          label: 'Статус:',
                          value: <OrderStatus
                              value={form.getObject(keys.kStatusKey)}/>,
                        }]}/>

          <OrderView user
                     className={'Review__table'}
                     positions={form.getObject(keys.kPositionsKey, [])}
                     discount={form.getObject(keys.kDiscountKey, {})}
                     delivery={form.getObject(keys.kDeliveryKey)}
                     total={form.getObject(keys.kTotalKey)}
                     subtotal={form.getObject(keys.kSubtotalKey)}
                     productPrice={form.getObject(keys.kProductPriceKey)}
                     deliveryPrice={form.getObject(keys.kDeliveryPriceKey)}
                     address={form.getObject(keys.kAddressKey, {})}
          />

          <Toolbar right
                   className="Positions__button-toolbar">
            <Button onClick={() => history.push('/')}
                    className="Order-detail__back">В каталог</Button>
          </Toolbar>
        </div>
    );
  }
}

OrderDetail.propTypes = {};
OrderDetail.defaultProps = {};
