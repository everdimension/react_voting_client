import { createStore, combineReducers } from 'redux';
import { fromJS } from 'immutable';
import reducer from './reducer';

// const appReducer = (state={}, action) => {
// 	return {
// 		voting: reducer(state.voting, action)
// 	};
// };
// 
const appReducer = combineReducers({
	voting: reducer
});

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
