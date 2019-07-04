import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

import createRootReducer from './reducer';

const isDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
const composeEnhancers = isDevTools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export const history = createBrowserHistory();

export default (initialState = undefined) => {
  const middlewares = [thunkMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

  const composedEnhancers = composeEnhancers(...enhancers);
  return createStore(createRootReducer(history), initialState, composedEnhancers);
};
