import React, { useReducer } from 'react'
import { counterReducer } from './reducer'

const CounterUseReducer = () => {
    const [ state, dispatch] = useReducer(counterReducer,{count:0})

    const handleIncrement = ()=>{
        dispatch({type:'increment'})
    }

    const handleDecrement = ()=>{
        dispatch({type:'decrement'})
    }

    const handleReset = ()=>{
        dispatch({type:'reset'})
    }
  return (
    <div>
        <h5>counter: {state.count}</h5>
        <button onClick={handleIncrement}>inc</button>
        <button onClick={handleDecrement}>dec</button>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default CounterUseReducer;