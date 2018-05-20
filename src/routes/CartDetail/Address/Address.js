import React from 'react';
import PropTypes from 'prop-types';
import {ErrorView, Form, FormGroupValidate} from 'modules/Form';
import {FormComponent} from 'modules/Flux';
import Cart from 'flux/Cart';
import cx from 'classnames';
import Title from 'components/Title';
import Button from 'components/Button';
import ComboBox from 'components/ComboBox';
import Textarea from 'components/Textarea';
import Telephone from 'components/Telephone';
import CityInput from 'components/CityInput';
import TextField from 'components/TextField';
import ButtonToolbar from 'components/ButtonToolbar';
import {NavAdapter} from 'modules/NavController';
import MForm from './MForm';
import * as keys from './constants';
import {RegionsMap} from './constants';
import './Address.css';

/**
 * form.requestAutocomplete();
 */
export default class Address extends FormComponent {
  getDefaultModel() {
    return new MForm(this);
  }

  getDataForModel() {
    return Cart.address;
  }

  getInitialStore() {
    return [Cart];
  }

  getStoreKeys() {
    return [];
  }

  render() {
    const {form, lock, error} = this.state;
    const {adapter} = this.context;
    const {className} = this.props;

    return (
        <div className={cx('Address', className)}>
          <Title>Адрес доставки</Title>
          <ErrorView error={error}/>
          <Form className="Address__form" method="post">

            <div className="form-row">
              <FormGroupValidate tabindex={0}
                                 className="form-group col-md-12 col-12"
                                 ref={keys.kNameKey}>
                <TextField
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="ФИО получателя"
                    value={form.getObject(keys.kNameKey)}
                    onChange={form.wrapperChange(keys.kNameKey)}
                />
              </FormGroupValidate>

              <FormGroupValidate tabindex={3}
                                 className="form-group col-md-4"
                                 ref={keys.kEmailKey}>
                <TextField
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    value={form.getObject(keys.kEmailKey)}
                    onChange={form.wrapperChange(keys.kEmailKey)}
                />
              </FormGroupValidate>

              <FormGroupValidate tabindex={4}
                                 className="form-group col-md-4 col-8"
                                 ref={keys.kPhoneKey}>
                <Telephone
                    required
                    name="phone"
                    autoComplete="tel"
                    placeholder="Телефон"
                    value={form.getObject(keys.kPhoneKey)}
                    onChange={form.wrapperChange(keys.kPhoneKey)}
                />
              </FormGroupValidate>

              <FormGroupValidate tabindex={5}
                                 className="form-group col-md-4 col-4"
                                 ref={keys.kPostalCodeKey}>
                <TextField
                    required
                    name="ship-zip"
                    autoComplete="shipping postal-code"
                    placeholder="Индекс"
                    value={form.getObject(keys.kPostalCodeKey)}
                    onChange={form.wrapperChange(keys.kPostalCodeKey, String)}
                />
              </FormGroupValidate>

              <div
                  hidden={form.getObject(keys.kManualInputAddressKey)}
                  className="Address__manual-address col-md-12"
                  onClick={form.wrapperConstant(keys.kManualInputAddressKey,
                      true)}
              >ручной ввод адреса
              </div>

              <div
                  hidden={!form.getObject(keys.kManualInputAddressKey)}
                  className="Address__manual-address col-md-12"
                  onClick={form.wrapperConstant(keys.kManualInputAddressKey,
                      false)}
              >авто ввод адреса
              </div>

              <FormGroupValidate
                  hidden={form.getObject(keys.kManualInputAddressKey)}
                  tabindex={6}
                  className="form-group col-md-12"
                  ref={keys.kAddressKey}>
                <CityInput
                    placeholder="Адрес"
                    value={form.getObject(keys.kAddressKey)}
                    onChange={form.wrapperChange(keys.kAddressKey)}
                    onRequest={({geoPoint, locality: {city, house, street, region, district, country}}) => {
                      form.transaction(() => {
                        form.setObject(keys.kCityKey, city);
                        form.setObject(keys.kHouseKey, house);
                        form.setObject(keys.kStreetKey, street);
                        form.setObject(keys.kRegionKey, region);
                        form.setObject(keys.kCountryKey, country);
                        form.setObject(keys.kDistrictKey, district);
                        form.setObject(keys.kGeoPointKey, geoPoint);
                      });
                    }}
                />
              </FormGroupValidate>

              <FormGroupValidate
                  hidden={!form.getObject(keys.kManualInputAddressKey)}
                  tabindex={7}
                  className="form-group col-md-4 col-12"
                  ref={keys.kRegionKey}>
                <ComboBox
                    name="region"
                    autoComplete="shipping address-level1"
                    placeholder="Регион"
                    choices={RegionsMap}
                    value={form.getObject(keys.kRegionKey)}
                    onChange={form.wrapperChange(keys.kRegionKey)}/>
              </FormGroupValidate>

              <FormGroupValidate
                  hidden={!form.getObject(keys.kManualInputAddressKey)}
                  tabindex={7}
                  className="form-group col-md-4 col-12"
                  ref={keys.kDistrictKey}>
                <TextField
                    name="district"
                    placeholder="Район"
                    value={form.getObject(keys.kDistrictKey)}
                    onChange={form.wrapperChange(keys.kDistrictKey)}
                />
              </FormGroupValidate>

              <FormGroupValidate
                  hidden={!form.getObject(keys.kManualInputAddressKey)}
                  tabindex={8}
                  className="form-group col-md-4 col-12"
                  ref={keys.kCityKey}>
                <TextField
                    name="ship-city"
                    autoComplete="shipping address-level2"
                    placeholder="Город/Населенный пункт"
                    value={form.getObject(keys.kCityKey)}
                    onChange={form.wrapperChange(keys.kCityKey)}
                />
              </FormGroupValidate>

              <FormGroupValidate
                  hidden={!form.getObject(keys.kManualInputAddressKey)}
                  tabindex={8}
                  className="form-group col-md-4 col-12"
                  ref={keys.kStreetKey}>
                <TextField
                    name="street"
                    autoComplete="shipping street-address"
                    placeholder="Улица"
                    value={form.getObject(keys.kStreetKey)}
                    onChange={form.wrapperChange(keys.kStreetKey)}
                />
              </FormGroupValidate>

              <FormGroupValidate
                  hidden={!form.getObject(keys.kManualInputAddressKey)}
                  tabindex={9}
                  className="form-group col-md-3 col-4"
                  ref={keys.kHouseKey}>
                <TextField
                    name="house"
                    autoComplete="house"
                    placeholder="Дом"
                    value={form.getObject(keys.kHouseKey)}
                    onChange={form.wrapperChange(keys.kHouseKey)}
                />
              </FormGroupValidate>

              <FormGroupValidate
                  hidden={!form.getObject(keys.kManualInputAddressKey)}
                  tabindex={10}
                  className="form-group col-md-2 col-4"
                  ref={keys.kBuildingKey}>
                <TextField
                    name="building"
                    autoComplete="building"
                    placeholder="Корпус"
                    value={form.getObject(keys.kBuildingKey)}
                    onChange={form.wrapperChange(keys.kBuildingKey)}
                />
              </FormGroupValidate>

              <FormGroupValidate
                  hidden={!form.getObject(keys.kManualInputAddressKey)}
                  tabindex={10}
                  className="form-group col-md-3 col-4"
                  ref={keys.kRoomKey}>
                <TextField
                    name="room"
                    autoComplete="room"
                    placeholder="Квартира"
                    value={form.getObject(keys.kRoomKey)}
                    onChange={form.wrapperChange(keys.kRoomKey)}
                />
              </FormGroupValidate>
            </div>

            <div className="form-row">
              <FormGroupValidate tabindex={11}
                                 className="form-group col-md-12 col-12"
                                 ref={keys.kCommentKey}>
              <Textarea
                  maxLength={140}
                  name="comment"
                  placeholder="Комментарий"
                  value={form.getObject(keys.kCommentKey)}
                  onChange={form.wrapperChange(keys.kCommentKey)}
              />
              </FormGroupValidate>
            </div>

          </Form>

          <ButtonToolbar right className="Address__button-toolbar">
            <Button locked={lock.is()}
                    onClick={adapter.handleBack}
                    className="Address__btn_edit">Изменить</Button>
            <Button locked={lock.is()}
                    onClick={adapter.handleNext}
                    className="Address__btn_next">Продолжить</Button>
          </ButtonToolbar>
        </div>
    );
  }
}

Address.propTypes = {
  className: PropTypes.string,
};
Address.defaultProps = {};

Address.contextTypes = {
  adapter: PropTypes.instanceOf(NavAdapter).isRequired,
};
