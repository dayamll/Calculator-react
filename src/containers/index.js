import React, { Component } from 'react'
import { connect } from 'react-redux'
import Output from '../componentes/output.js'
import { getInitial } from '../actions/index.js'

class Calculator extends Component {
  componentDidMount() {
    this.props.getInitial()
  }

  render() {
    return (
      <div>
        <Output number={this.props.number} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    number: state.calculatorReducer
  }
}


export default connect(mapStateToProps, { getInitial })(Calculator)



