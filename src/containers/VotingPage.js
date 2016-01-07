import React, { PropTypes } from 'react'
import Voting from '../components/Voting';
import store from '../store';

// *************************
// this container component doesn't use redux's "connect()"
// function and handles connecting to the store on its own
// ResultsPage, on the other hand, uses "connect()"
// *************************

class VotingPage extends React.Component {
	constructor() {
		super();
		this.state = store.getState();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.voting !== nextState.voting;
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
	}

	componentWillUnMount() {
		console.log('unmounting component');
		this.unsubscribe();
	}

	render () {
		console.log('rendering VotingPage', store.getState());
		const vote = (entry) => store.dispatch({
			type: 'VOTE',
			entry
		});
		const state = this.state;
		return (
			<Voting pair={state.voting.getIn(['vote', 'pair'])}
				winner={state.voting.get('winner')}
				vote={vote} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		pair: state.getIn(['vote', 'pair']),
		winner: state.get('winner')
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		vote: dispatch({
			type: 'VOTE',
			entry
		})
	};
};

// const connected = connect(mapStateToProps, mapDispatchToProps)(VotingPage);

export default VotingPage;
