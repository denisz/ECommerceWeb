import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import UniversalRouter from 'universal-router';
import history from 'core/history';
import { updateMeta } from 'core/DOMUtils';
import { createPath } from 'history/PathUtils';
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
const container = document.getElementById('root');
const scrollPositionsHistory = {};
if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const renderBefore = (location, action) => (route) => {
  scrollPositionsHistory[location.key] = {
    scrollX: window.pageXOffset,
    scrollY: window.pageYOffset,
  };

  if (action === 'PUSH') {
    delete scrollPositionsHistory[location.key];
  }

  ReactDOM.render(<App>{route.component}</App>, container);

  return route;
};

const renderAfter = (location, action) => (route) => {
  document.title = route.title;

  updateMeta('description', route.description);

  let scrollX = 0;
  let scrollY = 0;
  const pos = scrollPositionsHistory[location.key];
  if (pos) {
    scrollX = pos.scrollX;
    scrollY = pos.scrollY;
  } else {
    const targetHash = location.hash.substr(1);
    if (targetHash) {
      const target = document.getElementById(targetHash);
      if (target) {
        scrollY = window.pageYOffset + target.getBoundingClientRect().top;
      }
    }
  }

  window.scrollTo(scrollX, scrollY);

  // Google Analytics tracking. Don't send 'pageview' event after
  // the initial rendering, as it was already sent
  if (window.ga) {
    window.ga('send', 'pageview', createPath(location));
  }
  return route;
};

function render(location, action) {
  router.resolve(location.pathname)
    .then(renderBefore(location, action))
    .then(renderAfter(location, action))
}

(async function Init() {
  await initialize();
  render(history.location); // initialize the app
  history.listen(render); // listen for client-side navigation
}());

registerServiceWorker();

// Make taps on links and buttons work fast on mobiles
FastClick.attach(document.body);
