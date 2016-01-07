import { createStore, combineReducers, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import actionMiddleware from './action_middleware';
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

const createStoreWithMiddleware = applyMiddleware(actionMiddleware)(createStore);
const store = createStoreWithMiddleware(appReducer);

export default store;
