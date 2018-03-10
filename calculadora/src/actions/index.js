let calc = 0
// export const addTodo = (text) => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

export const pressNumber = (numero) => ({
  type: 'PRESS_NUMBER',
  numero
})

export const pressOperator = (operador) => ({
  type: 'PRESS_OPERATOR',
  operador
})

export const generateResult = () => ({
  type: 'GENERATE_RESULT'
})

export const clearHistorial = () => ({
  type: 'CLEAR_HISTORIAL'
})