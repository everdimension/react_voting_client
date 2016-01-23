import React, { PropTypes } from 'react'
import Winner from '../Winner';
import './Results.css';

class Results extends React.Component {
	getPair() {
		return this.props.pair;
	}

	render () {

		console.log('rendering Results component');
		const tally = this.props.tally;

		const rows = this.getPair() ? this.getPair().map((name) => {
			const width = ((tally ? tally.get(name, 0) : 0) / 5) * 100 + '%';
			const style = { width };
			return (
				<tr key={name}>
					<td className="nowrap">{name}</td>
					<td className="progress-cell">
						<div className="TallyTable__progress Progress">
							<div className="Progress__bar"
								style={style}></div>
						</div>
					</td>
					<td>{tally ? tally.get(name, 0) : 0}</td>
				</tr>
			);
		}) : (
			<tr><td>nothing</td></tr>
		);

		return (
			<div className="Results">
				{this.props.winner ?
					<Winner name={this.props.winner} /> :
					<div>
						<table className="TallyTable">
							<tbody>
								{rows}
							</tbody>
						</table>

						<ul className="Results__controls NavItems">
							<li><a href="#">reset</a></li>
							<li><a href="#" onClick={(evt) => { evt.preventDefault(); this.props.next(); }} ref={(n) => this.nextBtn = n} href="#">next</a></li>
						</ul>
					</div>
				}
			</div>
		);
	}
}

export default Results;
