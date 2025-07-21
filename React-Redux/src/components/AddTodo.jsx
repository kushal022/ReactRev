import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleAdd = ()=> {
      console.log('add click')
      console.log(input.trim())
        if(input.trim() === '') return;
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div>
        <input 
            type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
             />
             <button onClick={handleAdd}>add</button>
    </div>
  )
}

export default AddTodo