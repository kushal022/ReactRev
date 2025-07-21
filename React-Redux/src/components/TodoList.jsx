import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../actions'

const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <div>
        {todos.map((todo,index)=>(
            <li key={index}>
                <span>{todo}</span>
                <button 
                    onClick={()=>dispatch(deleteTodo(index))}
                >dlt</button>
            </li>
        ))}
    </div>
  )
}

export default TodoList