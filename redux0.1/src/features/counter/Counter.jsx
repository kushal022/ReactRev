import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {decrement, decrementByValue, increment, incrementByValue} from './counterSlice'

const Counter = () => {

    const count = useSelector((state)=>state.counter.value)

    const dispatch = useDispatch()
    console.log(count)
  return (
    <div>
        <h5>Redux Counter</h5>
        <p>Count: {count}</p>
        <button onClick={()=>dispatch(increment())}>+1</button>
        <button onClick={()=>dispatch(decrement())}>-1</button>
        <button onClick={()=>dispatch(incrementByValue(5))}>+5</button>
        <button onClick={()=>dispatch(decrementByValue(5))}>-5</button>
    </div>
  )
}

export default Counter