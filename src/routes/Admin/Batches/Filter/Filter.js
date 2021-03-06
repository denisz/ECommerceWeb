import React from 'react';
import {Form, FormComponent, FormGroupValidate} from 'modules/Form';
import ComboBox from 'components/ComboBox';
import Button from 'components/Button';
import DatePicker, {DateRange} from 'components/DatePicker';
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
        <div className="BatchFilter">
          <Form onSubmit={this.onSubmit}>
            <div className="row row--small-padding">
              <FormGroupValidate tabindex={2}
                                 className={cx('form-group', 'col', 'col-md-4',
                                     'col-8')}
                                 ref={keys.kWhereKey}>
                <ComboBox name={keys.kWhereKey}
                          placeholder="Свойство"
                          choices={keys.wheres}
                          value={form.getObject(keys.kWhereKey)}
                          onChange={form.wrapperChange(keys.kWhereKey)}/>
              </FormGroupValidate>
              <Button onClick={this.onSubmit} size="md">Поиск</Button>
            </div>

            {
              form.isEqual(keys.kWhereKey, keys.kWhereDate) &&
              <FormGroupValidate tabindex={3}
                                 className="form-group"
                                 ref={keys.kStartDateKey}>
                <DatePicker
                    value={form.getObject(keys.kStartDateKey)}
                    onChange={form.wrapperChange(keys.kStartDateKey)}
                />
              </FormGroupValidate>
            }

            {
              form.isEqual(keys.kWhereKey, keys.kWhereRangeDate) &&
              <FormGroupValidate tabindex={3}
                                 className="form-group"
                                 ref={keys.kStartDateKey}>
                <DateRange
                    value={{
                      from: form.getObject(keys.kStartDateKey),
                      to: form.getObject(keys.kEndDateKey),
                    }}
                    onChange={({value}) => {
                      form.transaction(() => {
                        form.setObject(keys.kStartDateKey, value.from);
                        form.setObject(keys.kEndDateKey, value.to);
                      });
                    }}
                />
              </FormGroupValidate>
            }
          </Form>
        </div>
    );
  }
}