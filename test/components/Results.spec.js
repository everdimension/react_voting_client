import React          from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Results        from '../../src/components/Results';
import Winner         from '../../src/components/Winner';
import { List, Map }  from 'immutable';
import { expect }     from 'chai';

const { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate, createRenderer } = ReactTestUtils;

describe('Results', () => {
	it('renders entries with vote counts or zero', () => {
		const pair = List.of('Trainspotting', 'Mad Max');
		const tally = Map({'Mad Max': 5});
		const component = renderIntoDocument(
			<Results pair={pair} tally={tally} />
		);

		const rows = scryRenderedDOMComponentsWithTag(component, 'tr');
		const texts = rows.map((row) => row.textContent);

		expect(texts.length).to.equal(2);

		expect(texts[0]).to.contain('Trainspotting');
		expect(texts[1]).to.contain('Mad Max');

		expect(texts[0]).to.contain('0');
		expect(texts[1]).to.contain('5');
	});

	it('invokes next() callback on click', () => {
		const pair = List.of('Trainspotting', 'Mad Max');
		const tally = Map({'Mad Max': 5});

		let clicked = false;
		const next = () => clicked = true;
		const component = renderIntoDocument(
			<Results pair={pair}
				tally={tally}
				next={next} />
		);

		Simulate.click(component.nextBtn);

		expect(clicked).to.equal(true);
	});

	it('show winner if there is one', () => {
		const renderer = createRenderer();
		renderer.render(
			<Results winner="Trainspotting" />
		);

		const result = renderer.getRenderOutput();
		expect(result.type).to.be.ok;
		expect(result.props.children).to.deep.equal(<Winner name="Trainspotting" />);
	});
});
