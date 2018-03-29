import { MForm } from 'modules/Form';
import constraints from './constraints';
import * as keys from './constants';

export default class MFormImpl extends MForm {
  getDefaultProps() {
    return {
      [keys.kManualInputAddressKey]: false,
      [keys.kCountryKey]: "Россия"
    }
  }

  getDefaultConstraints() {
    return constraints;
  }
}
