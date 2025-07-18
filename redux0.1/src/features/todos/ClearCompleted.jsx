import React from "react";
import { clearCompleted } from "./todoSlice";
import { useDispatch } from "react-redux";

const ClearCompleted = () => {
  const dispatch = useDispatch();
  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default ClearCompleted;
