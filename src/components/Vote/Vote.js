import React, { PropTypes } from 'react'

class Vote extends React.Component {
	constructor(props) {
		super(props);
		this.getPair = this.getPair.bind(this);
		this.isDisabled = this.isDisabled.bind(this);
		this.votedFor = this.votedFor.bind(this);
	}

	getPair() {
		return this.props.pair || [];
	}

	isDisabled() {
		return !!this.props.hasVoted;
	}

	votedFor(entry) {
		return this.props.hasVoted === entry;
	}

	render () {
		const buttons = this.getPair().map((entry) => {
			let subtitle = null;
			if (this.votedFor(entry)) {
				subtitle = ( <span className="VotingBtn__subtitle">Voted</span> );
			}
			return (
				<button key={entry}
					className="Voting__btn VotingBtn"
					disabled={this.isDisabled()}
					onClick={() => this.props.vote(entry)}
				>
					{entry}
					{subtitle}
				</button>
			);
		});

		return (
			<div className="Voting__buttons">
				{buttons}
			</div>

		);
	}
}

export default Vote;
