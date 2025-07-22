
//^ Logger Middleware for Redux
// This middleware logs actions and the state after each action is dispatched.
const loggerMiddleware = store => next => action => {
    console.log('Dispatching: ', action);

    const result  = next(action);

    console.log("Next State: ", store.getState());


    return result;
}

export default loggerMiddleware;