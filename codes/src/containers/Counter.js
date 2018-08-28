import React from 'react';
import { connect } from 'react-redux';
import CounterIndex from '../components/chapter03/Counter';

export default
  connect(state => ({ ...state.counterReducer }))(({ counter, dispatch }) =>
    <CounterIndex counter={counter} dispatch={dispatch} />);
