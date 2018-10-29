import { createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import Reducer from '../reducers/Index';

import createSagaMiddleware from 'redux-saga';
import Sagas from '../sagas/index';

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  Reducer,
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware, createLogger({collapsed: true})))
)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers/Index', () => {
    store.replaceReducer(require('../reducers/Index'));
  });
}

// then run the saga
Sagas.forEach(Saga => {
  sagaMiddleware.run(Saga);
});

const ReduxConfig = { history, store };

export default ReduxConfig;
