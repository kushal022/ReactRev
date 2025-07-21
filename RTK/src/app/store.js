// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from '../features/userList/userSlice'


// //^ Without LocalStorage:
// export const  store = configureStore({
//     reducer: {
//       users: userReducer
//         // counter: counterReducer,
//         // todos: todoReducer
//     }
// })

//^---------------nested redux-persist:---------------------------
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todos/todoSlice";
import userReducer from '../features/userList/userSlice'

//^ Implement LocalStorage: by Redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import { combineReducers } from "redux";
import { todosPersistConfig } from "./todoPersistConfig";

//&1. Root Reducer:
const rootReducer = combineReducers({
  todos: persistReducer(todosPersistConfig, todoReducer), // todo persist
  counter: counterReducer, // not persisted
  users: userReducer
});

//&2. Persist/Store individual/Selected Slice:
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["counter","users"],
}; // only 'todos' will be persisted/stored in localStorage

//&3. Persisted Reducer:
const persistedReducer = persistReducer(persistConfig, rootReducer);

//&4. Configure Store:
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (
    gdm // gdm= getDefaultMiddleware
  ) =>
    gdm({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

//^---------------------------------------------- -----------------
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice'
// import todoReducer from '../features/todos/todoSlice'

//^ Without LocalStorage:
// export const  store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         todos: todoReducer
//     }
// })

//^ Implement LocalStorage: by Redux-persist
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // localStorage
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({ todos: todoReducer, counter: counterReducer });

//& Persist/Store All Slices:
/// const persistConfig = { key: 'root', storage };
//& Persist/Store individual/Selected Slice:
// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['todos'], // or
    // blacklist: ['counter']
// }; // only 'todos' will be persisted/stored in localStorage

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (gdm) =>
//     gdm({ serializableCheck: { ignoredActions: [
//       'persist/PERSIST', 'persist/REHYDRATE'
//     ] } }),
// });

// export const persistor = persistStore(store);
