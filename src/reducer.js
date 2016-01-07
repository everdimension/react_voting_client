import { Map, fromJS } from 'immutable';

const vote = (state, entry) => {
	const currentPair = state.getIn(['vote', 'pair']);
	if (!currentPair.contains(entry)) {
		return state;
	}
	const newState = state
		.updateIn(['vote', 'tally', entry], 0, score => score + 1)
		.set('hasVoted', entry);

	return newState;
};

const resetVotes = (state) => {
	const currentPair = state.getIn(['vote', 'pair']);
	if (!currentPair.contains(state.get('hasVoted'))) {
		return state.remove('hasVoted');
	}
	return state;

}

const reducer = (state=Map(), action) => {
	switch (action.type) {
		case 'SET_STATE':
			return resetVotes(state.merge(fromJS(action.state)));
		case 'RESET_STATE':
			return state.update(() => action.state);
		case 'VOTE':
			return vote(state, action.entry);
	}

	console.log('unknown action', state);

	return state;
};

export default reducer;
