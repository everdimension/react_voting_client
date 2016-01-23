import React from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends React.Component {

	render() {
		console.log('rendering Appp');
		return (
			<div className="App">
				<nav id="nav">
					<div className="container">
						<ul className="NavItems">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/results">Results</Link></li>
						</ul>
					</div>
				</nav>
				{this.props.children}
			</div>
		);
	}
}

export default App;
