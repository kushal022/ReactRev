import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import ClearCompleted from './ClearCompleted'

const Todo = () => {
  return (
    <div>
        <AddTodo/>
        <TodoList/>
        <ClearCompleted/>
    </div>
  )
}

export default Todo