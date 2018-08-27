import React from 'react';
import { addActioner, subActioner, resetActioner } from '../../actions/CounterAction';

export default ({ counter = 0, dispatch }) => {
  const styles = {
    display: 'flex',
    justifyContent: 'space-around'
  };

  const updateCounter = (type) => {
    switch (type) {
      case 'add':
        dispatch(addActioner({ counter }));
        break;
      case 'sub':
        dispatch(subActioner({ counter }));
        break;
      case 'reset':
        dispatch(resetActioner());
        break;
      default:
        dispatch(resetActioner());
    }
  };

  return (
    <div>
      <h1>当前计数为：{counter}</h1>
      <div style={styles}>
        <button onClick={() => updateCounter('add')}>加</button>
        <button onClick={() => updateCounter('sub')}>减</button>
        <button onClick={() => updateCounter('reset')}>重置</button>
      </div>
    </div>
  );
};