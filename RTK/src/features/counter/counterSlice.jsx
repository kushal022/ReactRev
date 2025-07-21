import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    //Slice name:
    name: 'counter',

    //Initial state value:
    initialState: {value: 0},

    //Reducers:
    reducers: {
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        },

        incrementByValue: (state, action) => {
            state.value += action.payload;
        },

        decrementByValue: (state, action) => {
            state.value -= action.payload
        },
    }

})

//Export Reducers Methods/actions: from counterSlice.action
export const {
    increment,
    decrement,
    incrementByValue,
    decrementByValue,
} = counterSlice.actions;

//export reducer
export default counterSlice.reducer;