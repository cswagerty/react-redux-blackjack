import { createStore, combineReducers } from 'redux';

import playerReducer from './reducers/player-reducer.js';
const reducers = combineReducers({
	player: playerReducer
});

// create singleton instance of store that can be imported
export default createStore(reducers);

