import React from 'react';
// import styles from './Voting.css';

class Voting extends React.Component {
	constructor(props) {
		super(props);
		this.getPair = this.getPair.bind(this);
	}

	getPair() {
		return this.props.pair;
	}

	render() {
		console.log('rendering Voting', this.getPair());
		return (
			<div className="Voting">
				{this.getPair().map((entry) => {
					return (
						<button key={entry} className="Voting__btn">
							{entry}
						</button>
					);
				})}
			</div>
		);
	}
}

export default Voting;
