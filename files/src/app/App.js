import { Routes, Route } from 'react-router-dom';
import { Home } from './home/Home';

export function App() {
	return (
		<Routes>
			<Route exact path="/" component={Home} />
		</Routes>
	);
}
