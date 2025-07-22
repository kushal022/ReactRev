import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value:0,
        status: 'idle' // can be 'idle', 'loading', 'succeeded', or 'failed'
    },

    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCounter.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCounter.fulfilled, (state, action)=> {
                state.status = 'succeeded';
                state.value = action.payload; // assuming payload is the new value
            })
            .addCase(fetchCounter.rejected, (state) => {
                state.status = 'failed';
            })
    }
})

export const fetchCounter = createAsyncThunk('counter/fetchCounter', async ()=>{
    const response = await new Promise((resolve)=> {
        setTimeout(() => {resolve(45)},10000);
    })
    return response; // this will be the payload
})

export const { increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;