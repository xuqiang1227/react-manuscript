export const COUNTER_ACTION = 'COUNTER_ACTION';

export const addActioner = ({counter}) => {
  return {type: COUNTER_ACTION, counter: counter + 1};
};

export const subActioner = ({counter}) => {
  return {type: COUNTER_ACTION, counter: counter - 1};
};

export const resetActioner = () => {
  return {type: COUNTER_ACTION, counter: 0};
};