import React from 'react';
import PropTypes from 'prop-types';
import history from 'core/history';
import { FormComponent, FormGroupValidate, Form } from 'modules/Form';
import cx from 'classnames';
import Title from 'components/Title';
import Button from 'components/Button';
import Telephone from 'components/Telephone';
import TextField from 'components/TextField';
import Toolbar from 'components/ButtonToolbar';
import CityTextField from 'components/CityInput';
import MForm from './MForm';
import * as keys from './constants';
import './Address.css';


export default class Address extends FormComponent {
  getDefaultModel() {
    return new MForm(this);
  }

  render() {
    const { form } = this.state;
    const { className } = this.props;

    return (
      <div className={cx('Address', className)}>
        <Title>Адрес доставки</Title>
        <Form className="Address__form">

          <div className="form-row">
            <FormGroupValidate tabindex={0} className="form-group col-md-4 col-6" ref={keys.kLastNameKey}>
              <TextField
                name="lname"
                autoComplete="lname"
                placeholder="Фамилия"
                value={form.getObject(keys.kLastNameKey)}
                onChange={form.wrapperChange(keys.kLastNameKey)}
              />
            </FormGroupValidate>

            <FormGroupValidate tabindex={1} className="form-group col-md-4 col-6" ref={keys.kFirstNameKey}>
              <TextField
                name="fname"
                autoComplete="fname"
                placeholder="Имя"
                value={form.getObject(keys.kFirstNameKey)}
                onChange={form.wrapperChange(keys.kFirstNameKey)}
              />
            </FormGroupValidate>

            <FormGroupValidate tabindex={2} className="form-group col-md-4" ref={keys.kMiddleNameKey}>
              <TextField
                name="mname"
                autoComplete="mname"
                placeholder="Отчество"
                value={form.getObject(keys.kMiddleNameKey)}
                onChange={form.wrapperChange(keys.kMiddleNameKey)}
              />
            </FormGroupValidate>

            <FormGroupValidate tabindex={3} className="form-group col-md-4" ref={keys.kEmailKey}>
              <TextField
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                value={form.getObject(keys.kEmailKey)}
                onChange={form.wrapperChange(keys.kEmailKey)}
              />
            </FormGroupValidate>

            <FormGroupValidate tabindex={4} className="form-group col-md-4 col-8" ref={keys.kPhoneKey}>
              <Telephone
                name="phone"
                autoComplete="tel"
                placeholder="Телефон"
                value={form.getObject(keys.kPhoneKey)}
                onChange={form.wrapperChange(keys.kPhoneKey)}
              />
            </FormGroupValidate>

            <FormGroupValidate tabindex={5} className="form-group col-md-4 col-4" ref={keys.kPostalCodeKey}>
              <TextField
                name="postal-code"
                type="number"
                autoComplete="shipping postal-code"
                placeholder="Индекс"
                value={form.getObject(keys.kPostalCodeKey)}
                onChange={form.wrapperChange(keys.kPostalCodeKey)}
              />
            </FormGroupValidate>
          </div>

          <div className="form-row">
            <FormGroupValidate tabindex={6} className="form-group col-md-12" ref={keys.kAddressKey}>
              <CityTextField
                name="ship-address"
                autoComplete="shipping street-address"
                placeholder="Адрес"
                value={form.getObject(keys.kAddressKey)}
                onChange={form.wrapperChange(keys.kAddressKey)}
              />
            </FormGroupValidate>
          </div>

        </Form>

        <Toolbar right className="Checkout__button-toolbar">
          <Button
            onClick={() => history.push('/cart') }
            className="Checkout__edit">Изменить</Button>
          <Button
            onClick={this.onSubmit}
            className="Checkout__next">Продолжить</Button>
        </Toolbar>
      </div>
    );
  }
}

Address.propTypes = {
  className: PropTypes.string,
};
Address.defaultProps = {};
