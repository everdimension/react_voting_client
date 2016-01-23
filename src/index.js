import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import store from './store';
import { socket } from './api';
import { setState } from './actions/action_creators';
import App from './components/App';
import ResultsPage from './containers/ResultsPage';
import VotingPage from './containers/VotingPage';

import 'normalize.css/normalize.css';

socket.on('state', state => store.dispatch(
	setState(state)
));

ReactDOM.render(
	<Provider store={store}>
		<Router history={createHistory()}>
			<Route path="/" component={App}>
				<IndexRoute component={VotingPage} />
				<Route path="/results" component={ResultsPage} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
