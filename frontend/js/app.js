import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import {positionChange} from './actions'
import * as synaptic from 'synaptic'
import store from './store'
import App from './components/NetCreator'

window.positionChange = positionChange
window.synaptic = synaptic
window.store = store

ReactDOM.render(
  (<Provider store={store}>
  	<App/>
  	</Provider>),
  document.getElementById('react-container')
)