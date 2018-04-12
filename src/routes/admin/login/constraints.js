import { kUserPasswordKey, kUserUsernameKey } from './constants';

export default {
  [kUserPasswordKey]: {
    presence: 'Пароль некорректный. Пожалуйста, проверьте, его и попробуйте еще раз',
  },
  [kUserUsernameKey]: {
    presence: {
      allowEmpty: false,
      message: 'Не может быть пустым'
    },
    // email: true,
  },
};
