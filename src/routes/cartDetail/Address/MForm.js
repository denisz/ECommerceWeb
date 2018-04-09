import {MForm} from 'modules/Form';
import constraints, {autoConstraints, manualConstraints} from './constraints';
import * as keys from './constants';

export default class MFormImpl extends MForm {
  getDefaultProps() {
    return {
      [keys.kManualInputAddressKey]: false,
      [keys.kCountryKey]: 'Россия',
    };
  }

  getDefaultConstraints() {
    const isManual = !!this.getObject(keys.kManualInputAddressKey);
    console.log(isManual);
    if (isManual) {
      return {...constraints, ...manualConstraints};
    }
    return {...constraints, ...autoConstraints};
  }
}
