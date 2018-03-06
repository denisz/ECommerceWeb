import React from 'react';
import { FormComponent } from 'modules/Flux';
import Cart from 'flux/Cart';
import { FormGroupValidate, Form } from 'modules/Form';
import Actions from 'flux/CartActions';
import GeoTextField from 'components/GeoTextField';
import MForm from './MForm';
import * as keys from './constants';
import './Checkout.css';

export default class Checkout extends FormComponent {
  getInitialStore() {
    return [Cart];
  }

  getDefaultModel() {
    return new MForm(this);
  }

  getStoreKeys() {
    return ['items'];
  }

  render() {
    const { form } = this.state;

    return (
      <div className="Checkout">
        <Form>
          <FormGroupValidate className="form-group">
            <GeoTextField label="Адрес"
                          value={form.getObject(keys.kAddressKey)}
                          onChange={form.wrapperChange(keys.kAddressKey)}
            />
          </FormGroupValidate>
          <div className="form-row">
            <FormGroupValidate className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </FormGroupValidate>
            <FormGroupValidate className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select className="form-control">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
              </select>
            </FormGroupValidate>
            <FormGroupValidate className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
            </FormGroupValidate>
          </div>

        </Form>
      </div>
    );
  }
}

Checkout.propTypes = {};
Checkout.defaultProps = {};
