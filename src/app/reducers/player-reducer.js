import mapActionsToReducers from './reducer-utils.js';

const updateLoggedInState = (state, action) => {
	return {...state, username: action.payload, loggedIn: true}
}

const playerReducer = (state={loggedIn: false}, action) => {
    const actionTypes = {
        LOGGED_IN: updateLoggedInState
    };
    
    return mapActionsToReducers(actionTypes, action, state);
};

export default playerReducer;
