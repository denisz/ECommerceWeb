import React from 'react';
import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import history from 'core/history';
import routes from './routes';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import registerServiceWorker from './registerServiceWorker';

const router = new UniversalRouter(routes);

function render(location) {
  router.resolve(location.pathname).then(route => {
    document.title = route.title;
    ReactDOM.render(<App >{route.component}</App>, document.getElementById('root'));
  });
}

render(history.location); // initialize the app
history.listen(render); // listen for client-side navigation
registerServiceWorker();
