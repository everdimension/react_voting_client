import React from 'react';
import Winner from '../Winner';
import Vote from '../Vote';
import './Voting.css';

class Voting extends React.Component {
	render() {
		return (
			<div className="Voting">
				{this.props.winner ?
					<Winner name={this.props.winner} /> :
					<Vote {...this.props} />
				}

				<ul className="Results__controls NavItems">
					<li><a href="#" onClick={(evt) => { evt.preventDefault(); this.props.next(); }} ref={(n) => this.nextBtn = n} href="#">next</a></li>
				</ul>
			</div>
		);
	}
}

export default Voting;
