import { MForm } from 'modules/Form';
import * as keys from './constants';

export default class MFormImpl extends MForm {
  getDefaultProps() {
    return {
      [keys.kQueryKey]: '',
      [keys.kStatusKey]: keys.kAllStatus,
      [keys.kWhereDate]: null,
      [keys.kWhereKey]: keys.kWhereInvoice,
    }
  }
}