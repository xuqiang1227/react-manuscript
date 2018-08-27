import React from 'react';
import ReduxConfig from '../store/Store';
import { Provider } from 'react-redux';
import { Router } from 'react-router'

const { history, store } = ReduxConfig;

export default ({ children }) => <Provider store={store}>
  <Router history={history}>
    {children}
  </Router>
</Provider>