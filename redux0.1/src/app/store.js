import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todos/todoSlice'

//^ Without LocalStorage:
// export const  store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         todos: todoReducer
//     }
// })

//^ Implement LocalStorage: by Redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ todos: todoReducer, counter: counterReducer });

const persistConfig = { key: 'root', storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gdm) =>
    gdm({ serializableCheck: { ignoredActions: [
      'persist/PERSIST', 'persist/REHYDRATE'
    ] } }),
});

export const persistor = persistStore(store);
