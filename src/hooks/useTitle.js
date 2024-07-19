import { useDispatch, useSelector } from 'react-redux';
import { titleSlice, titleSelector } from '../store/titleSlice';

export function useTitle() {
	const title = useSelector(titleSelector);
	const dispatch = useDispatch();

	function setTitle(newTitle) {
		dispatch(titleSlice.actions.setTitle(newTitle));
	}

	return {
		title: title,
		setTitle: setTitle
	}
}
