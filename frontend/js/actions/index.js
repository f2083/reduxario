const POSITION_CHANGE = 'POSITION_CHANGE'

export function positionChange (payload) {
	return {
		type: POSITION_CHANGE,
		payload
	}	
}

