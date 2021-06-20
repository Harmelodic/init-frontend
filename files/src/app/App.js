import { Switch, Route } from 'react-router-dom';
import { Home } from './home/Home';

export function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	);
}
