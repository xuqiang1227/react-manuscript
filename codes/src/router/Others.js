import React from 'react';
import SyntheticEvent from '../components/chapter05/SyntheticEvent';
import ReactMounting from '../components/chapter02/ReactMounting';
import ReactCatch from '../components/chapter02/ReactErrorCatch';
import Refs from '../components/chapter05/Refs';
import RefsCallBack from '../components/chapter05/RefsCallBack';
import Fragment from '../components/chapter05/Fragment';
import Context from '../components/chapter05/context/Index';
import HOCMutiplex from '../components/chapter05/hoc/Multiplex';
import EnchanceComponent from '../components/chapter05/hoc/EnhanceComponent';

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
    case '/05-04-01':
      router = <Fragment />;
      break;
    case '/05-05-01':
      router = <Context />;
      break;
    case '/05-06-01':
      router = <HOCMutiplex />;
      break;
    case '/05-06-02':
      router = <EnchanceComponent />;
      break;
    default:
      router = null;
  }

  return router;
}