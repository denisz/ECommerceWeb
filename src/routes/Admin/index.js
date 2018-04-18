import AuthStore from 'flux/Auth';
import { anonymous, authorize, exceptions } from 'core/helper';
import Login from './login';
import Logout from './logout';
import Orders from './orders';
import Commands from './commands';
import Dashboard from './dashboard';

const authWrapper = route => exceptions(authorize(route, '/admin/login'));
const anonymousWrapper = route => exceptions(anonymous(route, '/admin'));

export default {
  path: '/admin',
  children: [
    authWrapper(Orders),
    authWrapper(Logout),
    authWrapper(Commands),
    anonymousWrapper(Login),
    authWrapper(Dashboard),
  ],
  async action({ next }, context) {
    context.isAuthenticated = AuthStore.isAuthenticated(); //eslint-disable-line
    return next();
  },
};
