import React, { Component } from 'react'
import * as synaptic from 'synaptic'

class NetForm extends Component{
	constructor(props){
		super(props)
		
		this.submitHandle = this.submitHandle.bind(this)
	}	
	
	render(){
		return (<form className='NetForm' onSubmit={this.submitHandle}>
			<input type='text' placeholder='input layer' ref={(input) => { this.inputLayer = input }}/>
			<input type='text' placeholder='hidden layer' ref={(input) => { this.hiddenLayer = input }}/>
			<input type='text' placeholder='output layer' ref={(input) => { this.outputLayer = input }}/>
			<input type='submit' value='Create net'/>
		</form>)
	}
	
	submitHandle(e){
		e.preventDefault()
		window.net = new synaptic.Architect.Perceptron(
			this.inputLayer.value, 
			this.hiddenLayer.value, 
			this.outputLayer.value
		)		
	}
}

export default NetForm