import React from 'react';
import styles from './Voting.css';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Voting">
				{this.props.winner ?
					<Winner ref="winner" name={this.props.winner} />
					:
					<Vote {...this.props} />
				}
			</div>
		);
	}
}

export default Voting;
