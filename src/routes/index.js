import App from './app';
import Test from './test';
import NotFound from './notFound';

export default {
  path: '/',
  children: [
    App,
    Test,

    NotFound,
  ],
  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'App'}`;
    route.description = route.description || '';

    return route;
  },
}
