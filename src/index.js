import React from 'react';
import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import history from 'core/history';
import routes from './routes';
import App from './App';
import Error from './Error';
import initialize from './init';
import './normalize.css';
import '@shopify/polaris/styles.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const options = {
  errorHandler(error) {
    return {
      title: 'Error',
      component: <Error error={error} />
    }
  }
};

const router = new UniversalRouter(routes, options);

function render(location) {
  router.resolve(location.pathname)
    .then(route => {
      document.title = route.title;
      ReactDOM.render(<App>{route.component}</App>, document.getElementById('root'));
    })
}

(async function Init() {
  await initialize();
  render(history.location); // initialize the app
  history.listen(render); // listen for client-side navigation
}());

registerServiceWorker();
