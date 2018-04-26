import Error from './Error';
import Sales from './Sales';
import Admin from './Admin';
import Page from './Page';
import Brand from './Brand';
import Spec from './Spec';
import Landing from './Landing';
import Products from './Products';
import Shipment from './Shipment';
import Payments from './Payments';
import NotFound from './NotFound';
import Forbidden from './Forbidden';
import CartDetail from './CartDetail';
import OrderDetail from './OrderDetail';
import ProductDetail from './ProductDetail';

export default {
  path: '/',
  children: [
    Admin,
    Landing,
    Sales,
    Page,
    Spec,
    Error,
    Brand,
    Products,
    CartDetail,
    OrderDetail,
    ProductDetail,
    Shipment,
    Payments,
    Forbidden,
    NotFound,
  ],
  async action({ next }, context) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Store'}`;
    route.description = route.description || '';

    return route;
  },
}
