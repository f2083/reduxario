import {createStore} from 'redux'
import defaultReducer from '../reducers'

const initialState = {
	position: {
		x: 0,
		y: 0	
	}
}

const store = createStore( defaultReducer, initialState)

export default store