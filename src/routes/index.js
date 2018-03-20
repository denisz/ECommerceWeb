import AuthStore from 'flux/Auth';
import { anonymous, authorize, exceptions } from './helper';
import Error from './error';
import Login from './login';
import Sales from './sales';
import SignIn from './signin';
import Logout from './logout';
import Landing from './landing';
import Products from './products';
import Profile from './profile';
import Privacy from './privacy';
import Checkout from './checkout';
import Shipment from './shipment';
import Partners from './partners';
import Payments from './payments';
import NotFound from './notFound';
import Forbidden from './forbidden';
import CartDetail from './cartDetail';
import ProductDetail from './productDetail';

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
    Error,
    Products,
    CartDetail,
    ProductDetail,
    Checkout,
    Shipment,
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
    route.title = `${route.title || 'Store'}`;
    route.description = route.description || '';

    return route;
  },
}
