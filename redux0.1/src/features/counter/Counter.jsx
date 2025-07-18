import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {decrement, decrementByValue, increment, incrementByValue} from './counterSlice'

const Counter = () => {
    const [inputValue, setInputValue] = useState(0)
    // useSelector: read state/store
    const count = useSelector((state)=>state.counter.value)
    // useDispatch: pass actions/reducer methods to the store
    const dispatch = useDispatch()
    console.log(count)
  return (
    <div>
        <h5>Redux Counter</h5>
        <p>Count: {count}</p>
        <div>
        <button onClick={()=>dispatch(increment())}>+1</button>
        <button onClick={()=>dispatch(decrement())}>-1</button>
        </div>
        <div>
            <input type="number"
                value={inputValue}
                onChange={e=>setInputValue(e.target.value)}
            />
        <button onClick={()=>dispatch(incrementByValue(Number(inputValue)))}>+{inputValue}</button>
        <button onClick={()=>dispatch(decrementByValue(Number(inputValue)))}>-{inputValue}</button>
        </div>
    </div>
  )
}

export default Counter