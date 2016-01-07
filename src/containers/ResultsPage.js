import React, { PropTypes } from 'react'
import Results from '../components/Results';
import { pair, tally } from '../voteData';

class ResultsPage extends React.Component {
	render () {
		return (
			<Results pair={pair} tally={tally} />
		)
	}
}

export default ResultsPage;
