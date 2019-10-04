import {
  SET_TITLE,
} from './Actions';

export const rootReducer = (state, action) => {
  return {
    // Store root
    title: titleReducer(state.title, action),
  };
};

// Reducers
export const titleReducer = (titleState, action) => {
  let title = titleState;

  switch (action.type) {
    case SET_TITLE:
      title = action.title;
      break;
  }

  return title;
};
