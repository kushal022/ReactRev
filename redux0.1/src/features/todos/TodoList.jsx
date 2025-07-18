import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkTodo, deleteTodo, setEditID } from "./todoSlice";

const TodoList = () => {
  const { todos, text } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);

  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

 const handleEdit = (id) => {
    dispatch(setEditID(id));
  };
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ color: todo.isCompleted ? "green" : "",
              textDecoration: todo.isCompleted ? 'line-through' : 'none'
             }}>
              {todo.text}
            </span>
            <button onClick={() => handleCheck(todo.id)}>Check</button>
            <button onClick={() => handleEdit(todo.id)}>edit</button>
            <button onClick={() => handleDelete(todo.id)}>dlt</button>
          </li>
        ))}
    </div>
  );
};

export default TodoList;
