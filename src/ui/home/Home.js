import { useSelector } from 'react-redux';
import { Title } from '../lib/Title';

export function Home() {
	const title = useSelector(store => store.title);

	return (
		<div>
			<Title title={title} />
		</div>
	);
}
