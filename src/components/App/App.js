import React from 'react';
import { Link } from 'react-router';
import './App.css';

const App = (props) => (
	<div className="App">
		<nav id="nav">
			<div className="container">
				<ul className="NavItems">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/results">Results</Link></li>
				</ul>
			</div>
		</nav>
		{props.children}
	</div>
);

export default App;
