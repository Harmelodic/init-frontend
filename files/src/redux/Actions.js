// Action Types
export const SET_TITLE = 'SET_TITLE';

export default class Actions {
  static setTitle(title) {
    return {
      type: SET_TITLE,
      title,
    };
  }
}
