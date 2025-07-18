import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [text, setText] = useState("");
  const [isEdit, setIsEdit] = useState(false)
  const [currentItemId, setCurrentItemId] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleAdd = () => {
    if(isEdit){
        setTasks(prev=>
            prev.map(item=>
                item.id === currentItemId ? {...item,text:text}:item
            )
        )
    }else{
        setTasks((prev) => [...prev, { text, isComplete: false, id: Date.now() }]);
    }
    setText('')
    setIsEdit(false)
  };

  const handleCheck = (id) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  const handleDelete = (id)=>{
    let filterTasks = tasks.filter(task=>task.id!==id)
    setTasks(filterTasks)
  }

  const handleEdit = (id)=>{
    let fountTask = tasks.find(task=>task.id===id)
    if(fountTask){
        setIsEdit(true)
        setText(fountTask.text)
        setCurrentItemId(fountTask.id)
    }
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
        <div>
            <button onClick={()=>navigate('/')}>Home</button>
        </div>
      <div className="inputBox">
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleAdd}>{isEdit?'Update':'Add'}</button>
      </div>
      <ul className="list">
        {tasks &&
          tasks.map((task) => (
            <li key={task.id}>
              <span style={{ color: task.isComplete ? "green" : "black" }}>
                {task.text}
              </span>
              <button onClick={() => handleCheck(task.id)}>{ task.isComplete ? "✅" : "☑️" }</button>
              <button onClick={() => handleEdit(task.id)}>📝</button>
              <button onClick={()=>handleDelete(task.id)}>❌</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Tasks;
