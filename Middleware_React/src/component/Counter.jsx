import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, fetchCounter, increment } from '../slices/counterSlice'

const Counter = () => {
    const value = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <p>{value}</p>
        <button onClick={()=>dispatch(increment())}>+1</button>
        <button onClick={()=>dispatch(decrement())}>-1</button>
        <button onClick={()=>dispatch(fetchCounter())}>fetch</button>
    </div>
  )
}

export default Counter