import { SET_TITLE } from './actions';

export function titleReducer(titleState, action) {
	let title = titleState;

	switch (action.type) {
		case SET_TITLE:
			title = action.title;
			break;
	}

	return title;
};
