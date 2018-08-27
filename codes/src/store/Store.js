import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import Reducer from '../reducers/Index';

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  combineReducers({
    ...Reducer,
    routing: routerReducer
  }),
  composeEnhancers(applyMiddleware(routerMiddleware(history), createLogger()))
)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers/Index', () => {
    store.replaceReducer(require('../reducers/Index'));
  });
}

const ReduxConfig = { history, store };

export default ReduxConfig;
