import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(0);
    

    //HandleAdd
    const handleAdd = () =>{
        setCounter( counter + 1 );
    }

    //HandleReset
    const handleReset = ()=>{
        setCounter (value);
    }

    //HandleDecremento
    const handleDec = ()=>{
        setCounter (counter -1);
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button class='boton' onClick={ handleAdd }> Sumar 1</button>
            <button class='boton' onClick={ handleReset }> Reset </button>
            <button class='boton' onClick={ handleDec }> Restar 1</button>
        </> 
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp
