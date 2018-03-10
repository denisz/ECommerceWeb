import React from 'react';
import { FormComponent } from 'modules/Flux';
import Cart from 'flux/Cart';
import { FormGroupValidate, Form } from 'modules/Form';
import Image from 'components/Image';
import ComboBox from 'components/ComboBox';
import Actions from 'flux/CartActions';
import cx from 'classnames';
import TextField from 'components/TextField';
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
          <h3>Шаг 1. Укажите пункт назначения</h3>
          <div className="Checkout-step">
            <FormGroupValidate className="form-group">
              <TextField
                label="Email"
                className="form-control"
                value={form.getObject(keys.kEmailKey)}
                onChange={form.wrapperChange(keys.kEmailKey)}
              />
            </FormGroupValidate>

            <div className="form-row">
              <FormGroupValidate className="form-group col-md-6">
                <TextField
                  label="Email"
                  className="form-control"
                  value={form.getObject(keys.kCityKey)}
                  onChange={form.wrapperChange(keys.kCityKey)}
                />
              </FormGroupValidate>
              <FormGroupValidate className="form-group col-md-4">
                <ComboBox
                    label="State"
                    value={form.getObject('testcombo')}
                    onChange={form.wrapperChange('testcombo')}
                    choices={[
                      { value: 1, label: 'One'},
                      { value: 2, label: 'Two'},
                      { value: 3, label: 'Three'},
                    ]}
                />
              </FormGroupValidate>
              <FormGroupValidate className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" />
              </FormGroupValidate>
            </div>

            <FormGroupValidate className="form-group">
              <GeoTextField label="Адрес"
                            className="form-control"
                            value={form.getObject(keys.kAddressKey)}
                            onChange={form.wrapperChange(keys.kAddressKey)}
              />
            </FormGroupValidate>

            <FormGroupValidate className="form-group">
              <TextField
                label="Телефон"
                className="form-control"
                value={form.getObject(keys.kPhoneKey)}
                onChange={form.wrapperChange(keys.kPhoneKey)}
              />
            </FormGroupValidate>

          </div>

          <h3>Шаг 2. Способ доставки</h3>
          <div className="Checkout-step">
              <div className="Checkout-method-shipments">
                <div className={cx('Checkout-method-shipment', {
                  'checked': form.isEqual(keys.kDeliveryKey, keys.kDeliveryTypeStandard)
                })}
                     onClick={form.wrapperConstant(keys.kDeliveryKey, keys.kDeliveryTypeStandard)}>
                  <Image src="ic_standard_delivery.png" className="Checkout-method-shipment-image"/>
                  <h3>Обычный</h3>
                  <small className="text-muted">Бесплатно</small>
                </div>
                <div className={cx('Checkout-method-shipment', {
                  'checked': form.isEqual(keys.kDeliveryKey, keys.kDeliveryTypeRapid)
                })}
                     onClick={form.wrapperConstant(keys.kDeliveryKey, keys.kDeliveryTypeRapid)}>
                  <Image src="ic_rapid_delivery.png" className="Checkout-method-shipment-image"/>
                  <h3>Ускоренный</h3>
                  <small className="text-muted">от 46 руб.</small>
                </div>
                <div className={cx('Checkout-method-shipment', {
                  'checked': form.isEqual(keys.kDeliveryKey, keys.kDeliveryTypeEms)
                })}
                     onClick={form.wrapperConstant(keys.kDeliveryKey, keys.kDeliveryTypeEms)}>
                  <Image src="ic_ems_delivery.png" className="Checkout-method-shipment-image"/>
                  <h3>Курьерский</h3>
                  <small className="text-muted">от 260 руб.</small>
                </div>
              </div>
          </div>
        </Form>
      </div>
    );
  }
}

Checkout.propTypes = {};
Checkout.defaultProps = {};
