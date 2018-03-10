import React from 'react'
// import './operadoresN.css';

const OperadoresNumeros = () => {
    return ( 
        <div className="keys">
        	<div class="top">
		        <button className="clear">CE</button>
	        </div>  
	
            <div className="row">
            </div>
            <div className="row">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>x</button>
            </div>
            <div className="row">
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
            </div>
            <div className="row">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="tall">+</button>
            </div>
            <div className="row">
                <button>%</button>
                <button>÷</button>
                <button>.</button>
                <button>=</button>
            </div>
        </div>      

    )
}

export default OperadoresNumeros