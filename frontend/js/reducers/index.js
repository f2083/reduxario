const defaultReducer = function (state = {}, action) {
	let newState	
	
	switch(action.type) {
		case 'POSITION_CHANGE':
			newState = Object.assign(
				{},
				state,
				action.payload
			)
			return newState
		
		default:
      	return state
	}
	
}

export default defaultReducer