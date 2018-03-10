import React from 'react';
import ReactDom from 'react-dom';

import Historial from './historial';
import Operador from './operadoresN';
import Output from './output';


const Calculator = () => {
  return(
  <div>
    <Historial />
    <Operador />
    <Output />
  </div>)
}

export default Calculator;