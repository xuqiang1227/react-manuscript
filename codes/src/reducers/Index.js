import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counterReducer from './CounterReducer';
import dataReducer from './DataReducer';

export default combineReducers({
  counterReducer,
  routing: routerReducer,
  dataReducer
})