/*
	@name mapActionsToReducers
	@description Executes a function that updates
		state that is specified by an object that
		maps action types to functions that return
		a modified state object.
*/

const mapActionsToReducers = (actionTypes, action, state) => {
    if (!actionTypes[action.type]) {
        return state;
    }
    
    state = actionTypes[action.type](state, action)
    
    return state;
}

module.exports = mapActionsToReducers
