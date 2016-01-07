import React, { PropTypes } from 'react'
import Results from '../components/Results';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		pair: state.voting.getIn(['vote', 'pair']),
		tally: state.voting.getIn(['vote', 'tally'])
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		next: () => dispatch({
			type: 'NEXT'
		})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);

// class ResultsPage extends React.Component {
// 	render () {
// 		return (
// 			<Results pair={pair} tally={tally} />
// 		);
// 	}
// }
