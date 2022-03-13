import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Title } from '../../lib/Title';
import { fetchTitle } from './middleware';

export function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTitle());
	}, []);

	const title = useSelector(store => store.title);

	return (
		<div>
			<Title title={title} />
		</div>
	);
}
