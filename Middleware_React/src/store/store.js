import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counterSlice';
import loggerMiddleware from "../middleware/logger";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    //^ Middleware can be added here if needed
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(loggerMiddleware)
})

export default store;