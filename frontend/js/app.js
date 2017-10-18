import store from './store'
import {positionChange} from './actions'

console.log('hellllo3')
const arr = [1,2,3]
const filteredArr = arr.filter(item=>item%2 === 0)
window.store = store
window.positionChange = positionChange