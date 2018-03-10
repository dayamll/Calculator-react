import React from 'react';
import ReactDom from 'react-dom';

import Historial from './historial';
import Numeros from './operadoresN';
import Operadores from './Operadores';
import Output from './output';


const Calculator = () => {
  return(
  <div>
    <Historial />
    <Numeros />
    <Output />
  </div>)
}

export default Calculator;