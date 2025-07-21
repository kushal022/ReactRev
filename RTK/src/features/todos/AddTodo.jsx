import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setEditID, updateTodo } from "./todoSlice";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const { todos, editID } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  
 useEffect(()=>{ const editingTask = todos.find(todo=> todo.id === editID)
  console.log(editingTask)
  if(editingTask){
    setInputText(editingTask.text || '')
  }},[editID])

  const handleAdd = () => {
    if (!inputText.trim()) return;
    dispatch(addTodo(inputText));
    setInputText("");
  };

  const handleUpdate = () => {
    dispatch(updateTodo(inputText));
    dispatch(setEditID(null))
    setInputText("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      {!editID ? (
        <button onClick={handleAdd}>add</button>
      ) : (
        <button onClick={handleUpdate}>update</button>
      )}
    </div> 
  );
};

export default AddTodo;
