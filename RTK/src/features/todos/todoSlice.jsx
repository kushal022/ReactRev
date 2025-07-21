
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    editID:null,
    todos: []
  },

  reducers: {
    setEditID: (state, action) => {
      state.editID = action.payload
    },
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        isCompleted: false
      });
    },
    checkTodo: (state, action) => {
      const task = state.todos.find(todo => todo.id === action.payload);
      if (task) task.isCompleted = !task.isCompleted;
    },
    updateTodo: (state, action) => {
      const task = state.todos.find(todo => todo.id === state.editID);
      if (task) task.text = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.isCompleted);
    }
  }
});

export const {
  addTodo,
  checkTodo,
  deleteTodo,
  clearCompleted,
  setEditID,
  updateTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
