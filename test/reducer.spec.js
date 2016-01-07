import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';
import reducer from '../src/reducer';

describe('reducer', () => {

	const voteState = {
		vote: {
			pair: List.of('Mad Max', 'Sherlock'),
			tally: Map({ Sherlock: 1 })
		}
	};

	const voteStateAfterSet = fromJS({
		vote: {
			pair: ['Mad Max', 'Sherlock'],
			tally: { Sherlock: 1 }
		}
	});

	it('handles SET_STATE', () => {

		const action = {
			type: 'SET_STATE',
			state: voteState
		};

		const nextState = reducer(undefined, action);

		expect(nextState).to.equal(voteStateAfterSet);
	});

});
