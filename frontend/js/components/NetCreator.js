import React, { Component } from 'react'
import { connect } from 'react-redux'
import NetForm from './../components/NetForm'
import TrainerForm from './../components/TrainerForm'

class App extends Component {
  render() {
    return (
      <div className="App">
    		<NetForm/>
    		<TrainerForm/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state
  }
}

export default connect(mapStateToProps)(App)