import * as keys from './constants';

export default {
  [keys.kNameKey]: {
    presence: true
  },
  [keys.kEmailKey]: {
    presence: true,
    email: true,
  },
  [keys.kAddressKey]: {
    presence: true
  },
  [keys.kCityKey]: {
    presence: true
  }
};
