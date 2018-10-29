import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counterReducer from './CounterReducer';
import dataReducer from './DataReducer';
import userReducer from './UserReducer';

export default combineReducers({
  counterReducer,
  routing: routerReducer,
  dataReducer,
  userReducer
})