import React from 'react';
import { connect } from 'react-redux';
import UserIndex from '../components/chapter03/saga/UserIndex';

export default
  connect(state => ({ ...state.userReducer }))(({ user, dispatch }) =>
    <UserIndex userInfo={user} dispatch={dispatch} />);