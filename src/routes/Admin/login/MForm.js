import { MForm } from 'modules/Form';
import constraints from './constraints';
import { kUserPasswordKey, kUserUsernameKey } from './constants';

export default class MFormLogin extends MForm {
  getDefaultProps() {
    return {
      [kUserUsernameKey]: '',
      [kUserPasswordKey]: '',
    };
  }

  getDefaultConstraints() {
    return constraints;
  }
}
