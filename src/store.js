import { createStore } from 'redux';
import { fromJS } from 'immutable';
import reducer from './reducer';

const appReducer = (state={}, action) => {
	return {
		voting: reducer(state.voting, action)
	};
};

const initialState = {
	voting: fromJS({
		vote: {
			pair: ['Mad Max', 'Sherlock'],
			tally: { Sherlock: 1 }
		}
	})
};

const store = createStore(appReducer, initialState);

export default store;
