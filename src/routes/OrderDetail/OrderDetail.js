import React from 'react';
import history from 'core/history';
import Button from 'components/Button';
import Toolbar from 'components/ButtonToolbar';
import OrderView from 'components/OrderView';
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
            <small className="text-muted">{form.getObject(keys.kIdKey)}</small>
          </h5>

          <OrderView help
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
