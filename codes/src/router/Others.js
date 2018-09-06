import React from 'react';
import SyntheticEvent from '../components/chapter05/SyntheticEvent';
import ReactMounting from '../components/chapter02/ReactMounting';

export default ({ location }) => { //location history match

  let router = null;

  switch (location.pathname) {
    case '/02-01-01':
      router = <ReactMounting />
      break;
    case '/05-01-01':
      router = <SyntheticEvent />;
      break;
    default:
      router = null;
  }

  return router;
}