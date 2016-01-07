import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from './components/App';
import ResultsPage from './containers/ResultsPage';
import VotingPage from './containers/VotingPage';

require('normalize.css/normalize.css');

console.log('the app!');

const pair = ['Trainspotting', '28 Days Later'];

const voteFn = function () {
	console.log('voting fn');
};

// const history = useBasename(createBrowserHistory)({
// 	baseName: '/'
// });

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Route path="/" component={App}>
			<IndexRoute component={VotingPage} />
			<Route path="/results" component={ResultsPage} />
		</Route>
	</Router>,
	document.getElementById('app')
);
