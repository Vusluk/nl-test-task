import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore, { history } from './configureStore';
import Router from './router';

import './styles/index.styl';

const store = configureStore();

const App = hot(() => (
  <Provider store={store}>
    <Router history={history} />
  </Provider>
));

ReactDOM.render(<App />, document.getElementById('root'));
