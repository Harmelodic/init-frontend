import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './home/Home';

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
