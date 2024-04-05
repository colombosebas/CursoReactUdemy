import { useState } from 'react';
import PropTypes from 'prop-types';

// const handleAdd = (event) => console.log(event)

export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);
    const handleAdd = (event) => {
        setCounter(counter + 1)
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>1</button>
        </>
    );
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired,
}