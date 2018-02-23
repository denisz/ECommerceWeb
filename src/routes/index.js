import AuthStore from 'flux/Auth';
import { anonymous, authorize, exceptions } from './helper';
import Cart from './cart';
import Login from './login';
import Sales from './sales';
import SignIn from './signin';
import Logout from './logout';
import Landing from './landing';
import Product from './product';
import Profile from './profile';
import Privacy from './privacy';
import Checkout from './checkout';
import Shipping from './shipping';
import Partners from './partners';
import Payments from './payments';
import NotFound from './notFound';
import Forbidden from './forbidden';

const debugMode = false;
const authWrapper = route => exceptions(authorize(route, '/login', debugMode));
const anonymousWrapper = route => exceptions(anonymous(route, '/', debugMode));

export default {
  path: '/',
  children: [
    anonymousWrapper(Login),
    anonymousWrapper(SignIn),
    authWrapper(Logout),
    authWrapper(Profile),

    Landing,
    Sales,
    Cart,
    Product,
    Checkout,
    Shipping,
    Partners,
    Payments,
    Privacy,
    Forbidden,
    NotFound,
  ],
  async action({ next }, context) {
    context.isAuthenticated = AuthStore.isAuthenticated(); //eslint-disable-line
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'App'}`;
    route.description = route.description || '';

    return route;
  },
}
