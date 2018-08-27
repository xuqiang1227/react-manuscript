import { MENU_PATH } from '../actions/MeunAction';

const initialState = { path: '/01-01-01' };

export default (state = initialState, action) => {
  switch (action.type) {
    case MENU_PATH:
      return { ...state, path: action.path };
    default:
      return state;
  }
}