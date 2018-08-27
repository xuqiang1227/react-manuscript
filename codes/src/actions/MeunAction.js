export const MENU_PATH = 'MENU_PATH';

export const setPath = ({path}) => {
  return {
    type: MENU_PATH,
    path
  };
}