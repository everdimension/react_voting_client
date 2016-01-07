import { Map, fromJS } from 'immutable';

const reducer = (state=Map(), action) => {
	switch (action.type) {
		case 'SET_STATE':
			return state.merge(fromJS(action.state));
		case 'RESET_STATE':
			return state.update(() => action.state);
	}

	console.log('unknown action', state);

	return state;
};

export default reducer;
