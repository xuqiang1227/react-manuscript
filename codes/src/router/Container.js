import React from 'react';
import ReduxConfig from '../store/Store';
import { Provider } from 'react-redux';
// import { Router } from 'react-router'
import {ConnectedRouter} from 'react-router-redux';

const { history, store } = ReduxConfig;

export default ({ children }) => <Provider store={store}>
  <ConnectedRouter history={history}>
    {children}
  </ConnectedRouter>
</Provider>