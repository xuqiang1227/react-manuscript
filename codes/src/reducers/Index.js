import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counterReducer from './CounterReducer';

export default combineReducers({
  counterReducer,
  routing: routerReducer
})