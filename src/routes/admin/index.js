import AuthStore from 'flux/Auth';
import { anonymous, authorize, exceptions } from 'core/helper';
import Login from './login';
import Logout from './logout';
import Orders from './orders';
import Dashboard from './dashboard';

const authWrapper = route => exceptions(authorize(route, '/admin/login'));
const anonymousWrapper = route => exceptions(anonymous(route, '/admin/dashboard'));

export default {
  path: '/admin',
  children: [
    authWrapper(Orders),
    authWrapper(Logout),
    authWrapper(Dashboard),
    anonymousWrapper(Login),
    {
      path: '(.*)',
      action () {
        return {
          redirect: '/admin/dashboard'
        }
      }
    }
  ],
  async action({ next }, context) {
    context.isAuthenticated = AuthStore.isAuthenticated(); //eslint-disable-line
    return next();
  },
};
