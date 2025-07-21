const readline = require('readline');
const store = require('./store');
const { addTodo, deleteTodo } = require('./actions');

// CLI Setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Show Menu
function showMenu() {
  console.log('\n--- TODO APP ---');
  console.log('1. View Todos');
  console.log('2. Add Todo');
  console.log('3. Delete Todo');
  console.log('4. Exit');
  rl.question('Choose an option: ', handleMenu);
}

// Handle User Input
function handleMenu(option) {
  switch (option.trim()) {
    case '1':
      const todos = store.getState().todos;
      console.log('\nYour Todos:');
      todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
      });
      showMenu();
      break;

    case '2':
      rl.question('Enter a new todo: ', (text) => {
        store.dispatch(addTodo(text));
        console.log('Todo added!');
        showMenu();
      });
      break;

    case '3':
      const currentTodos = store.getState().todos;
      currentTodos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
      });
      rl.question('Enter the number of the todo to delete: ', (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < currentTodos.length) {
          store.dispatch(deleteTodo(index));
          console.log('Todo deleted!');
        } else {
          console.log('Invalid number!');
        }
        showMenu();
      });
      break;

    case '4':
      console.log('Goodbye!');
      rl.close();
      break;

    default:
      console.log('Invalid option');
      showMenu();
  }
}

// Start app
showMenu();
