import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app/App';
import { initialiseStore } from './store';

const store = initialiseStore();

const appRoot = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	appRoot,
);
