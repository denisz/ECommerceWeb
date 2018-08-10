import { MForm } from 'modules/Form';
import * as keys from './constants';

export default class MFormImpl extends MForm {
  getDefaultProps() {
    return {
      [keys.kQueryKey]: '',
      [keys.kTypeKey]: keys.kAllTypes,
      [keys.kWhereDate]: null,
      [keys.kWhereKey]: keys.kWhereNone,
    }
  }
}