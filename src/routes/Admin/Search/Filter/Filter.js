import React from 'react';
import {Form, FormComponent, FormGroupValidate} from 'modules/Form';
import ComboBox from 'components/ComboBox';
import Button from 'components/Button';
import Telephone from 'components/Telephone';
import TextField from 'components/TextField';
import DatePicker from 'components/DatePicker';
import cx from 'classnames';
import MForm from './MForm';
import * as keys from './constants';
import './Filter.css';

export default class OrdersFilter extends FormComponent {
  getDefaultModel() {
    return new MForm(this);
  }

  render() {
    const {form} = this.state;

    return (
        <div className="OrdersFilter">
          <Form onSubmit={this.onSubmit}>
            <div className="row row--small-padding">
              <FormGroupValidate tabindex={1}
                                 className={cx('form-group', 'col', 'col-md-4',
                                     'col-4')}
                                 ref={keys.kStatusKey}>
                <ComboBox name={keys.kStatusKey}
                          placeholder="Статус"
                          choices={keys.statuses}
                          value={form.getObject(keys.kStatusKey)}
                          onChange={form.wrapperChange(keys.kStatusKey)}/>
              </FormGroupValidate>

              <FormGroupValidate tabindex={2}
                                 className={cx('form-group', 'col', 'col-md-4',
                                     'col-4')}
                                 ref={keys.kWhereKey}>
                <ComboBox name={keys.kStatusKey}
                          placeholder="Свойство"
                          choices={keys.wheres}
                          value={form.getObject(keys.kWhereKey)}
                          onChange={form.wrapperChange(keys.kWhereKey)}/>
              </FormGroupValidate>
              <Button onClick={this.onSubmit} appear="form">Поиск</Button>
            </div>

            {
              form.isEqual(keys.kWhereKey, keys.kWhereDate) &&
              <FormGroupValidate tabindex={3}
                                 className="form-group"
                                 ref={keys.kDateKey}>
                <DatePicker
                    value={form.getObject(keys.kDateKey)}
                    onChange={form.wrapperChange(keys.kDateKey)}
                />
              </FormGroupValidate>
            }

            {
              form.isEqual(keys.kWhereKey, keys.kWhereInvoice) &&
              <FormGroupValidate tabindex={3}
                                 className="form-group"
                                 ref={keys.kQueryKey}>
                <TextField placeholder="Запрос"
                           value={form.getObject(keys.kQueryKey, '')}
                           onChange={form.wrapperChange(keys.kQueryKey)}
                />
              </FormGroupValidate>
            }

            {
              form.isEqual(keys.kWhereKey, keys.kWherePhone) &&
              <FormGroupValidate tabindex={3}
                                 className="form-group"
                                 ref={keys.kQueryKey}>
                <Telephone placeholder="Телефон"
                           value={form.getObject(keys.kQueryKey, '')}
                           onChange={form.wrapperChange(keys.kQueryKey)}
                />
              </FormGroupValidate>
            }
          </Form>
        </div>
    );
  }
}