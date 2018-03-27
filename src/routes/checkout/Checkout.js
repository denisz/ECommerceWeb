import React from 'react';
import { FormComponent } from 'modules/Form';
import Address from './Address';
import * as keys from './constants';
import './Checkout.css';

//сохранить адрес
export default class Checkout extends FormComponent {
  getInitialState() {
    return {
      step: 0,
    }
  }

  render() {
    const { form, step } = this.state;

    return (
      <div className="Checkout">
        {
          step === 0 &&
          <Address
            className="Checkout__address"
            value={form.getObject(keys.kAddressKey)}
            onSubmit={form.wrapperChange(keys.kAddressKey)}
          />
        }

      </div>
    );
  }
}

Checkout.propTypes = {};
Checkout.defaultProps = {};
