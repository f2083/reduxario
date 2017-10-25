import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import {positionChange} from './actions'
import * as synaptic from 'synaptic'
import NetForm from './components/NetForm'

console.log(synaptic)
window.store = store
window.positionChange = positionChange
window.synaptic = synaptic

class App extends Component {
  render() {
    return (
      <div className="App">
    		<NetForm/>
      </div>
    )
  }
}


console.log(1111321)


ReactDOM.render(
  <App/>,
  document.getElementById('react-container')
)