import { createStore, combineReducers } from 'redux';

import playerReducer from './reducers/player-reducer.js';
import tableReducer from './reducers/table-reducer.js';

const reducers = combineReducers({
	player: playerReducer,
	table: tableReducer
});

const store = createStore(
   reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

// create singleton instance of store that can be imported
export default store;
