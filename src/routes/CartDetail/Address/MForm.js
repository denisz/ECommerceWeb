import {MForm} from 'modules/Form';
import constraints, {autoConstraints, manualConstraints} from './constraints';
import * as keys from './constants';

export default class MFormImpl extends MForm {
  getDefaultProps() {
    return {
      [keys.kNameKey]: '',
      [keys.kEmailKey]: '',
      [keys.kPhoneKey]: '',
      [keys.kPostalCodeKey]: '',
      [keys.kManualInputAddressKey]: false,
      [keys.kCountryKey]: 'Россия',
    };
  }

  getDefaultConstraints() {
    const isManual = !!this.getObject(keys.kManualInputAddressKey);

    if (isManual) {
      return {...constraints, ...manualConstraints};
    }
    return {...constraints, ...autoConstraints};
  }
}
