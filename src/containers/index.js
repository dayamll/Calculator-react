import React, { Component } from 'react'
import { connect } from 'react-redux'
import Output from '../componentes/output.js'
import Btn from '../componentes/button.js'

import OperadoresNumeros from '../componentes/operadoresN.js'
import { getInitial } from '../actions/index.js'

class Calculator extends Component {
  state = {
    inputNumber: 0,
    arr: [ "1", "2", "3", "C", "4", "5", "6", "=", "7", "8", "9", ".", "+", "0", "-", "*", "/" ]
  }
  componentDidMount() {
    this.props.getInitial()
  }
  showValue = (e) => {
    this.setState({
      inputNumber: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Output number={this.state.inputNumber} />
        {this.state.arr.map((item, index)=>{
          return (<input type="button" key={index} value={item} onClick = {this.showValue}/>)
        })}
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

