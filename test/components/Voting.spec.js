import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Voting from '../../src/components/Voting';
import { expect } from 'chai';

const { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } = ReactTestUtils;

describe('Voting', () => {

	it('render a pair of buttons', () => {

		const pair = ['Trainspotting', '28 Days Later'];

		const component = renderIntoDocument(
			<Voting pair={pair} />
		);

		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).to.equal(2);
		expect(buttons[0].textContent).to.equal(pair[0]);
		expect(buttons[1].textContent).to.equal(pair[1]);

	});

	it('invokes callback when a button is clicked', () => {
		let voteWith;
		const pair = ['Trainspotting', '28 Days Later'];

		const vote = function (entry) {
			voteWith = entry;
		};

		const component = renderIntoDocument(
			<Voting pair={pair} vote={vote} />
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		Simulate.click(buttons[0]);

		expect(voteWith).to.equal(pair[0]);

	});

	it('disables buttons when user has voted', () => {

		const pair = ['Trainspotting', '28 Days Later'];

		const component = renderIntoDocument(
			<Voting pair={pair} hasVoted="Trainspotting" />
		);

		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).to.equal(2);
		expect(buttons[0].hasAttribute('disabled')).to.equal(true);
		expect(buttons[1].hasAttribute('disabled')).to.equal(true);

	});

	it('adds "voted" label to the voted entry', () => {

		const pair = ['Trainspotting', '28 Days Later'];

		const component = renderIntoDocument(
			<Voting pair={pair} hasVoted="Trainspotting" />
		);

		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons[0].textContent.toLowerCase()).to.contain('voted');

	});

	it('renders just the winner when there is one provided', () => {
		const component = renderIntoDocument(
			<Voting winner="Trainspotting" />
		);

		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).to.equal(0);

		const winner = React.findDOMNode(component.refs.winner);
		expect(winner).to.be.ok;
		expect(winner.textContent).to.contain('Trainspotting');

	});

});
