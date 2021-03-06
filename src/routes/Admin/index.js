import AuthStore from 'flux/Auth';
import { anonymous, authorize, exceptions } from 'core/helper';
import Login from './Login';
import Logout from './Logout';
import Orders from './Orders';
import Search from './Search';
import Batches from './Batches';
import Commands from './Commands';
import Dashboard from './Dashboard';
import Accounting from './Accounting';
import 'flux/Admin';
import './Admin.css';

const authWrapper = route => exceptions(authorize(route, '/admin/login'));
const anonymousWrapper = route => exceptions(anonymous(route, '/admin'));

export default {
  path: '/admin',
  children: [
    authWrapper(Orders),
    authWrapper(Logout),
    authWrapper(Search),
    authWrapper(Batches),
    authWrapper(Commands),
    authWrapper(Accounting),
    anonymousWrapper(Login),
    authWrapper(Dashboard),
  ],
  async action({ next }, context) {
    context.isAuthenticated = AuthStore.isAuthenticated(); //eslint-disable-line
    const route = await next();
    return {
        ...route,
        className: 'Admin'
    }
  },
};
