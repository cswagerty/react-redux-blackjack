import { createStore, combineReducers } from 'redux';

import playerReducer from './reducers/player-reducer.js';
import tableReducer from './reducers/table-reducer.js';

const reducers = combineReducers({
	player: playerReducer,
	table: tableReducer
});

// create singleton instance of store that can be imported
export default createStore(reducers);
