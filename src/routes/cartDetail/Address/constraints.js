import * as keys from './constants';

export default {
  [keys.kManualInputAddressKey]: {},
  [keys.kNameKey]: {
    presence: {
      allowEmpty: false,
      message: 'Не может быть пустым'
    }
  },
  [keys.kEmailKey]: {
    presence: {
      allowEmpty: false,
      message: 'Не может быть пустым'
    },
    email: true,
  },
  [keys.kPostalCodeKey]: {
    presence: {
      allowEmpty: false,
      message: 'Не может быть пустым'
    },
  },
  [keys.kPhoneKey]: {
    presence: {
      allowEmpty: false,
      message: 'Не может быть пустым'
    }
  },
  [keys.kCommentKey]: {
    length: { maximum: 140 }
  },

  [keys.kRoomKey]:{},
  [keys.kCityKey]: {},
  [keys.kHouseKey]: {},
  [keys.kRegionKey]: {},
  [keys.kStreetKey]: {},
  [keys.kAddressKey]: {},
  [keys.kGeoPointKey]:{},
  [keys.kCountryKey]: {},
  [keys.kDistrictKey]: {},
  [keys.kBuildingKey]: {},
};

export const manualConstraints = {
  [keys.kRegionKey]: {
    presence: {
      allowEmpty: false,
      message: 'Не может быть пустым'
    }
  },
  [keys.kCityKey]: {
    presence: {
      allowEmpty: false,
      message: 'Не может быть пустым'
    }
  },
};

export const autoConstraints = {
  [keys.kAddressKey]: {
    presence: {
      allowEmpty: false,
      message: 'Не может быть пустым'
    }
  }
};