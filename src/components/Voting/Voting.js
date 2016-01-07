import React from 'react';
import Winner from '../Winner';
import Vote from '../Vote';
import './Voting.css';

class Voting extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const saveWinner = (node) => {
			console.log('winner node', node);
			this._winner = node;
			console.log('this', this);
		};
		return (
			<div className="Voting">
				{this.props.winner ?
					<Winner name={this.props.winner} /> :
					<Vote {...this.props} />
				}
			</div>
		);
	}
}

export default Voting;
