import { setTitle } from './actions';
import { httpCall } from '../httpCall';

export function fetchTitle() {
	return async (dispatch) => {
		try {
			const response = await httpCall('GET', '/api/');
			const data = await response.json();
			dispatch(setTitle(data));
		} catch (error) {
			dispatch(setTitle('Hello World!'));
		}
	};
};
