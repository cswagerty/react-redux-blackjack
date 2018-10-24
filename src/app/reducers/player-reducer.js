import mapActionsToReducers from './reducer-utils.js';

const handlePlayerLogin = (state, action) => {
	return {...state, ...action.payload, loggedIn: true}
}

const playerReducer = (state={loggedIn: false}, action) => {
    const actionTypes = {
        LOG_IN_PLAYER: handlePlayerLogin
    };
    
    return mapActionsToReducers(actionTypes, action, state);
};

export default playerReducer;
