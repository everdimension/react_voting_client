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

	const voteStateBeforeVote = fromJS({
		vote: {
			pair: ['Mad Max', 'Sherlock'],
			tally: { Sherlock: 1 }
		}
	});

	const voteStateAfterVote = fromJS({
		vote: {
			pair: ['Mad Max', 'Sherlock'],
			tally: { Sherlock: 2 }
		},
		hasVoted: 'Sherlock'
	});

	const voteStateAfterMaxVote = fromJS({
		vote: {
			pair: ['Mad Max', 'Sherlock'],
			tally: {
				Sherlock: 1,
				'Mad Max': 1
			}
		},
		hasVoted: 'Mad Max'
	});

	const newVoteState = fromJS({
		vote: {
			pair: ['The Thing', 'Event Horizon']
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

	it('clears hasVoted on SET_STATE', () => {
		const action = {
			type: 'SET_STATE',
			state: newVoteState
		};

		const nextState = reducer(voteStateAfterVote, action);

		expect(nextState).to.equal(newVoteState);
	})

	it('handles VOTE action', () => {
		const newState = reducer(voteStateBeforeVote, {
			type: 'VOTE',
			entry: 'Sherlock'
		});

		expect(newState).to.equal(voteStateAfterVote);

		const anotherState = reducer(voteStateBeforeVote, {
			type: 'VOTE',
			entry: 'Mad Max'
		});

		expect(anotherState).to.equal(voteStateAfterMaxVote);
	});

	it('doesn\'nt vote for invalid entry', () => {
		const newState = reducer(voteStateBeforeVote, {
			type: 'VOTE',
			entry: 'MegaRandom'
		});

		expect(newState).to.equal(voteStateBeforeVote);
	});

});
