import React from 'react';
import SyntheticEvent from '../components/chapter05/SyntheticEvent';

export default ({ location }) => { //location history match

  let router = null;

  switch (location.pathname) {
    case '/05-01-01':
      router = <SyntheticEvent />;
      break;
    default:
      router = null;
  }

  return router;
}