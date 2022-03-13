import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { titleReducer } from './app/home/reducers';

export function initialiseStore() {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(
			applyMiddleware(thunk),
		),
	);
};

function rootReducer(state, action) {
	return {
		title: titleReducer(state.title, action),
	};
};

const initialState = {
	title: 'Initial Title',
};
