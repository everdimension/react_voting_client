import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Voting from '../../src/components/Voting';
import { expect } from 'chai';

const { renderIntoDocument, scryRenderedDOMComponentsWithTag } = ReactTestUtils;

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

});
