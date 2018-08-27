import { COUNTER_ACTION } from '../actions/CounterAction';

const initiaState = {counter: 0};

export default (state = initiaState, action) => {
  switch (action.type) {
    case COUNTER_ACTION:
      return { ...state, counter: action.counter };
    default:
      return state;
  }
}