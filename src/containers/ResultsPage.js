import React, { PropTypes } from 'react'
import Results from '../components/Results';
import { connect } from 'react-redux';
import { next } from '../actions/action_creators';

const mapStateToProps = (state) => {
	return {
		pair: state.voting.getIn(['vote', 'pair']),
		tally: state.voting.getIn(['vote', 'tally']),
		winner: state.voting.get('winner')
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		next: () => dispatch(next())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
