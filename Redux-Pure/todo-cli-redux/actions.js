// actions.js

// Action Types
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

// Action Creators
const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: index,
});

module.exports = {
  ADD_TODO,
  DELETE_TODO,
  addTodo,
  deleteTodo
};

