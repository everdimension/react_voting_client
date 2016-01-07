import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import store from './store';
import App from './components/App';
import ResultsPage from './containers/ResultsPage';
import VotingPage from './containers/VotingPage';

import 'normalize.css/normalize.css';

// const history = useBasename(createBrowserHistory)({
// 	baseName: '/'
// });

const IO_PORT = 4400;
const { protocol, hostname } = location;
const socket = io(`${protocol}//${hostname}:${IO_PORT}`);

ReactDOM.render(
	<Provider store={store}>
		<Router history={createBrowserHistory()}>
			<Route path="/" component={App}>
				<IndexRoute component={VotingPage} />
				<Route path="/results" component={ResultsPage} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
