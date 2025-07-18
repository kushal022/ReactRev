//^ Reducer function: counter reducer
// it is a pure function that returns new state
export function counterReducer(state,action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count -1};
        case 'reset':
            return {count: 0};
        default:
            return state;
    }
}

/*
&| Part                     | Description                            |
| ------------------------ | -------------------------------------- |
| `reducer(state, action)` | A pure function that returns new state |
| `dispatch({ type })`     | Sends an action to update the state    |
| `state`                  | The current state (`{ count: 0 }`)     |

*/