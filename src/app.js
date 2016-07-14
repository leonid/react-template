import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router/es6';

import routes from './routes';
import store from './store';

import 'index.html';

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
    document.getElementById('root')
);
