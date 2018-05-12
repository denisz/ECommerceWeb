import React from 'react';
import Title from 'components/Title';
import Button from 'components/Button';
import OrderView from 'components/OrderView';
import Toolbar from 'components/ButtonToolbar';
import { DialogFactory } from 'modules/Form';
import {FormComponent} from 'modules/Flux';
import Offer from 'dialogs/Offer';
import Cart from 'flux/Cart';
import './Review.css';
import * as keys from './constants';
import PropTypes from 'prop-types';
import {NavAdapter} from 'modules/NavController/NavController';

const kDialogKey = 'dialog';

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

  handleConfirm = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { dialogs } = this.state;
    const {adapter} = this.context;

    dialogs.showDialog(kDialogKey, {
      header: "Договор оферты",
      showHeader: false,
      size: 'large',
      Component: <Offer submitCancel onSubmit={adapter.handleNext}/>
    })
  };

  render() {
    const {form, lock, dialogs} = this.state;
    const {adapter} = this.context;

    return (
        <div className="Review">
          <Title>Заказ</Title>
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

          <DialogFactory dialogs={dialogs} dialogKey={kDialogKey}/>

          <Toolbar right
                   className="Review__button-toolbar">
            <Button onClick={adapter.handleBack}
                    className="Review__btn_edit">Изменить</Button>
            <Button locked={lock.is()}
                    lock="Обработка..."
                    onClick={this.handleConfirm}
                    className="Review__btn_next">Подтвердить</Button>
          </Toolbar>
        </div>
    );
  }
}

Review.contextTypes = {
  adapter: PropTypes.instanceOf(NavAdapter).isRequired,
};
