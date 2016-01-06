import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

require('normalize.css/normalize.css');
require('./components/App/App.css');

console.log('the app!');

const pair = ['Trainspotting', '28 Days Later'];

const voteFn = function () {
	console.log('voting fn');
};

ReactDOM.render(
	<Voting pair={pair} hasVoted="Trainspotting" />,
	document.getElementById('app')
);
