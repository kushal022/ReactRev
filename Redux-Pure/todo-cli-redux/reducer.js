const { ADD_TODO, DELETE_TODO } = require('./actions');

const initialState = {
  todos: []
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload)
      };
    default:
      return state;
  }
}

module.exports = todoReducer;