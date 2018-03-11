import { GET_INITIAL, SUM, SUBTRACT, MULTIPLY, DIVISION } from '../actions/index.js'

export default function calculatorReducer(state = 0, action) {
  switch (action.type) {
    case GET_INITIAL:
      return 0
    default:
      return state
  }
}

