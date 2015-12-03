import React from 'react';

class Winner extends React.Component {

	render() {
		return (
			<div className="Voting__winner">
				Winner is: {this.props.name}
			</div>
		);
	}
}

export default Winner;
