import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
require('./components/App/App.css');

console.log('the app!');

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
	<Voting pair={pair} />,
	document.getElementById('app')
);
