export const GET_INITIAL = 'GET_INITIAL'
export const SUM = 'SUM'
export const SUBTRACT = 'SUBTRACT'
export const MULTIPLY = 'MULTIPLY'
export const DIVISION = 'DIVISION'

export function getInitial() {
  return {
    type: GET_INITIAL,
    payload: 0
  }
}
export function sum() {
  return {
    type: SUM
  }
}
export function subtrat() {
  return {
    type: SUBTRACT
  }
}
export function multiply() {
  return {
    type: MULTIPLY
  }
}
export function division() {
  return {
    type: DIVISION
  }
}