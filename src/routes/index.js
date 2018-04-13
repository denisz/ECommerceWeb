import Error from './error';
import Sales from './sales';
import Admin from './admin';
import Page from './page';
import Landing from './landing';
import Products from './products';
import Shipment from './shipment';
import Payments from './payments';
import NotFound from './notFound';
import Forbidden from './forbidden';
import CartDetail from './cartDetail';
import OrderDetail from './orderDetail';
import ProductDetail from './productDetail';

export default {
  path: '/',
  children: [
    Admin,
    Landing,
    Sales,
    Page,
    Error,
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
