import { useState } from 'react';
import PropTypes from 'prop-types';
export const CounterApp = ({value})=>{

    const [counter,setCounter] = useState(value);

    const handleAdd = ()=>{
        console.log('+1');
        setCounter(counter + 1);
    }

    const handleSubstract = ()=>{
        console.log('-1');
        setCounter(counter - 1);
    }

    const handleReset = ()=>{
        console.log('reset');
        setCounter(value);
    }


    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ event => handleAdd(event,2)}>
                +1
            </button>
            <button onClick={handleSubstract}>
                -1
            </button>
            <button onClick={handleReset}>
                reset
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
