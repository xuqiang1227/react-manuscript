import React, { useReducer } from 'react';

const initialState = {
  count: 0,
  value: null
}

export default () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="example-rooter">
      <p>当前记数为：{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <input value={state.value} onChange={(e) => dispatch({ type: 'value_Changed', value: e.target.value })} />
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

const reducer = (state, action) => {
  const _state = { ...state };
  switch (action.type) {
    case 'increment':
      _state.count = state.count + 1;
      break;
    case 'decrement':
      _state.count = state.count - 1;
      break;
    case 'value_Changed':
      _state.value = action.value;
      break;
    case 'reset':
      _state.count = state.value;
      break;
    default:
      throw new TypeError();
  }
  return _state;
}