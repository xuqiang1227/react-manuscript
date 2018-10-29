import { USER_FETCH_SUCCEEDED } from '../actions/User';

const initialState = { user: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_SUCCEEDED:
      return { ...state, user: action.user };
    default:
      return state;
  }
}