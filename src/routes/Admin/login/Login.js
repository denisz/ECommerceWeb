import React from 'react';
import {ErrorView, Form, FormComponent, FormGroupValidate} from 'modules/Form';
import Button from 'components/Button';
import ButtonToolbar from 'components/ButtonToolbar';
import TextField from 'components/TextField';
import AuthActions from 'flux/AuthActions';
import history from 'core/history';
import MForm from './MForm';
import {kUserPasswordKey, kUserUsernameKey} from './constants';
import './Login.css';

export default class Login extends FormComponent {
  getDefaultModel() {
    return new MForm(this);
  }

  async formDidSubmit(attrs) {
    try {
      await AuthActions.login(attrs);
      await super.formDidSubmit(attrs);
      history.push('/admin');
    } catch (error) {
      this.setState({error: new Error('Некорректный логин или пароль')});
    }
  }

  render() {
    const {form, lock, error, validate} = this.state;

    return (
        <div className="Login">
          <Form className="Login___form" {...this.props}
                onSubmit={this.onSubmit} tabSubmit={!validate} enterSubmit>
            <h3 className="Login__header">Вход</h3>

            <ErrorView error={error}/>

            <FormGroupValidate tabindex={-1} ref={kUserUsernameKey}
                               className="form-group">
              <TextField label="Логин"
                         type="text"
                         id="inputEmail"
                         placeholder="Введите логин"
                         value={form.getObject(kUserUsernameKey)}
                         onChange={form.wrapperChange(kUserUsernameKey)}
              />
            </FormGroupValidate>

            <FormGroupValidate tabindex={-2} ref={kUserPasswordKey}
                               className="form-group">
              <TextField label="Пароль"
                         type="password"
                         id="inputPassword"
                         placeholder="Введите пароль"
                         value={form.getObject(kUserPasswordKey)}
                         onChange={form.wrapperChange(kUserPasswordKey)}
              />
            </FormGroupValidate>

            <ButtonToolbar center>
              <Button locked={lock.is()}
                      lock="Обработка..."
                      onClick={this.onSubmit}>Вход
              </Button>
            </ButtonToolbar>

          </Form>
        </div>
    );
  }
}
