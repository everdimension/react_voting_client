import React, { PropTypes } from 'react'
import Winner from '../Winner';
import './Results.css';

class Results extends React.Component {
	getPair() {
		return this.props.pair || [];
	}

	render () {

		const rows = this.getPair().map((name) => {
			const width = (this.props.tally.get(name) / 5) * 100 + '%';
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
					<td>{this.props.tally.get(name, 0)}</td>
				</tr>
			);
		});

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
							<li><a onClick={this.props.next} ref={(n) => this.nextBtn = n} href="#">next</a></li>
						</ul>
					</div>
				}
			</div>
		);
	}
}

export default Results;
