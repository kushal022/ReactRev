import React, { useReducer, useState } from 'react'
import { todoReducer } from './todoReducer'

const Todo = () => {
    const [text, setText] = useState('')
    const [todos, dispatch] = useReducer(todoReducer,[])
    const [isEdit, setIsEdit] = useState(false)

    const handleAdd = ()=>{
        if(text.trim()==='')return;
        dispatch({type:'add',payload:text})
        setText('')
    }

    const handleDelete = (id)=>{
        dispatch({type: 'delete',payload:id})
    }

    const handleCheck = (id)=>{
        dispatch({type: 'check', payload:id})
    }

    const handleClear = ()=>{
        dispatch({type:'clearCompleted'})
    }

    const handleEdit = (id,todoText)=>{
        setText(todoText)
        setIsEdit(true)
        dispatch({type:'edit',payload:id})
    }

    const handleUpdate = ()=>{
        dispatch({type:'update',payload:text})
        setIsEdit(false)
        setText('')
    }

    const handleCancel = ()=>{
        setIsEdit(false)
        setText('')
        dispatch({type:'cancel'})
    }

    const completedTodos = todos.filter(todo=>todo.isCompleted===true)
    const pendingTodos = todos.filter(todo=>todo.isCompleted!==true)
  return (
    <div>
        <h5>Todo with useReducer()</h5>
        <div>
            <input type="text" value={text}
            onChange={e=>setText(e.target.value)}
            placeholder='enter todo..' />
            {!isEdit ?
                <button onClick={handleAdd} >Add</button> :
                <div>
                    <button onClick={handleUpdate} >update</button> 
                    <button onClick={handleCancel} >Cancel</button> 
                </div>
            }
        </div>
        <p>All Tasks:</p>
        <ul>
            {todos&&todos.map(todo=>(
                <li key={todo.id}>
                    <span style={{color:todo.isCompleted?'green':'black'}} >{todo.text}</span>
                    <button onClick={()=>handleCheck(todo.id)}>{todo.isCompleted?'UnCheck':'Check'}</button>
                    <button onClick={()=>handleEdit(todo.id,todo.text)}>Edit</button>
                    <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
        <p>Pending Tasks:</p>
        <ul>
            {
                pendingTodos.map(todo=>(
                    <li key={todo.id}>
                    <span style={{color:todo.isCompleted?'green':'black'}} >{todo.text}</span>
                    <button onClick={()=>handleCheck(todo.id)}>{todo.isCompleted?'UnCheck':'Check'}</button>
                    <button onClick={()=>handleEdit(todo.id,todo.text)}>Edit</button>
                    <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                </li>
                ))
            }
        </ul>
        <p>Completed Tasks:</p>
        <ul>
            {
                completedTodos.map(todo=>(
                    <li key={todo.id}>
                    <span style={{color:todo.isCompleted?'green':'black'}} >{todo.text}</span>
                    <button onClick={()=>handleCheck(todo.id)}>{todo.isCompleted?'UnCheck':'Check'}</button>
                    <button onClick={()=>handleEdit(todo.id,todo.text)}>Edit</button>
                    <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                </li>
                ))
            }
        </ul>
        <button onClick={handleClear} >Clear Completed</button>
    </div>
  )
}

export default Todo