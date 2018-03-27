import * as keys from './constants';

export default {
  [keys.kFirstNameKey]: {
    presence: {
      message: 'Не может быть пустым'
    }
  },
  [keys.kLastNameKey]: {
    presence: {
      message: 'Не может быть пустым'
    }
  },
  [keys.kMiddleNameKey]: {
    presence: {
      message: 'Не может быть пустым'
    }
  },
  [keys.kEmailKey]: {
    presence: {
      message: 'Не может быть пустым'
    },
    email: true,
  },
  [keys.kAddressKey]: {
    presence: {
      message: 'Не может быть пустым'
    }
  },
  [keys.kPostalCodeKey]: {
    presence: {
      message: 'Не может быть пустым'
    }
  },
  [keys.kPhoneKey]: {
    presence: {
      message: 'Не может быть пустым'
    }
  }
};