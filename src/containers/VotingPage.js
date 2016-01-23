import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import Voting from '../components/Voting';
import store from '../store';
import { vote, next } from '../actions/action_creators';

// *************************
// now it uses connect(), too
// *************************

const mapStateToProps = (state) => {
	return {
		pair: state.voting.getIn(['vote', 'pair']),
		hasVoted: state.voting.get('hasVoted'),
		winner: state.voting.get('winner')
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		vote: entry => dispatch(vote(entry)),
		next: () => dispatch(next())
	};
};

const VotingPage = connect(mapStateToProps, mapDispatchToProps)(Voting);

export default VotingPage;
