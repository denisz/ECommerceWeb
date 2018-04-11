import Error from './error';
import Sales from './sales';
import Landing from './landing';
import Products from './products';
import Privacy from './privacy';
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
    Landing,
    Sales,
    Error,
    Products,
    CartDetail,
    OrderDetail,
    ProductDetail,
    Shipment,
    Payments,
    Privacy,
    Forbidden,
    NotFound,
  ],
  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Store'}`;
    route.description = route.description || '';

    return route;
  },
}
