import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import UniversalRouter from 'universal-router';
import animateScrollTo from 'animated-scroll-to';
import history from 'core/history';
import { updateMeta } from 'core/DOMUtils';
import { createPath } from 'history/PathUtils';
import routes from './routes';
import App from './App';
import Error from './Error';
import initialize from './init';
import registerServiceWorker from './registerServiceWorker';

const options = {
  errorHandler(error) {
    return {
      title: 'Error',
      component: <Error error={error} />
    }
  }
};

let tmpLocationKey = null;
let tmpClassName = null;

const router = new UniversalRouter(routes, options);
const container = document.getElementById('root');
const scrollPositionsHistory = {};
if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const renderBefore = (location, action) => (route) => {
  scrollPositionsHistory[tmpLocationKey] = {
    scrollX: window.pageXOffset,
    scrollY: window.pageYOffset,
  };

  if (tmpClassName) {
    document.body.classList.remove(tmpClassName);
    tmpClassName = null;
  }

  if (route.redirect) {
    history.replace(route.redirect);
    return
  }

  if (action === 'PUSH') {
    delete scrollPositionsHistory[location.key];
  }

  ReactDOM.render(<App>{route.component}</App>, container);

  return route;
};

const renderAfter = (location, action) => (route) => {
  if (!route) return;

  document.title = route.title;

  if (route.className) {
    document.body.classList.add(route.className);
    tmpClassName = route.className;
  }

  updateMeta('description', route.description);

  let scrollY = 0;

  const pos = scrollPositionsHistory[location.key];
  tmpLocationKey = location.key;

  if (pos) {
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

  setTimeout(()=>{
    animateScrollTo(scrollY, {
      speed: 100
    });
    // window.scrollTo(0, scrollY);
    }, 100);

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
