// store.js
const { createStore } = require('redux');
const todoReducer = require('./reducer');

const store = createStore(todoReducer);

module.exports = store;
