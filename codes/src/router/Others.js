import React from 'react';
import SyntheticEvent from '../components/chapter05/SyntheticEvent';
import ReactMounting from '../components/chapter02/ReactMounting';
import ReactCatch from '../components/chapter02/ReactErrorCatch';
import Refs from '../components/chapter05/Refs';
import RefsCallBack from '../components/chapter05/RefsCallBack';

export default ({ location }) => { //location history match

  let router = null;

  switch (location.pathname) {
    case '/02-01-01':
      router = <ReactMounting />
      break;
    case '/02-04-01':
      router = <ReactCatch />
      break;
    case '/05-02-01':
      router = <SyntheticEvent />;
      break;
    case '/05-03-01':
      router = <Refs />;
      break;
    case '/05-03-02':
      router = <RefsCallBack />;
      break;
    default:
      router = null;
  }

  return router;
}