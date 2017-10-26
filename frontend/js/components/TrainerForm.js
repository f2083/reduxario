import React, { Component } from 'react'
import * as synaptic from 'synaptic'

class NetForm extends Component{
	constructor(props){
		super(props)
		
		this.submitHandle = this.submitHandle.bind(this)
	}	
	
	render(){
		return (<form className='TrainerForm' onSubmit={this.submitHandle}>
			<input type='text' placeholder='input' ref={(input) => { this.input1 = input }}/>			
			<input type='text' placeholder='input' ref={(input) => { this.input2 = input }}/>
			<input type='text' placeholder='output' ref={(input) => { this.output1 = input }}/>
			<input type='submit' value='train net'/>
		</form>)
	}
	
	submitHandle(e){
		e.preventDefault()
		window.trainer = new synaptic.Trainer(window.net)
		let trainingSet = [{
			input: [Number(this.input1.value),Number(this.input2.value)],
			ouput: [].push(Number(this.output1.value))
		}]
		
		trainer.train(trainingSet);
				
	}
}

export default NetForm