import { MForm } from 'modules/Form';
import * as keys from './constants';
import {kDeliveryProviderRussiaPost} from 'services/localizedDelivery';

export default class MFormImpl extends MForm {
  getDefaultProps() {
    return {
      [keys.kQueryKey]: '',
      [keys.kWhereDate]: null,
      [keys.kWhereKey]: keys.kWhereNone,
      [keys.kProviderKey]: kDeliveryProviderRussiaPost,
    }
  }
}