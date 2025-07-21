import { createSlice } from "@reduxjs/toolkit";
import { fetchUserThunk } from "./userThunk";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        error: null,
        users:[]
    },
    //^Reducers:
    reducers:{},

    //^ExtraReducers:
    extraReducers: (builder) => {
        builder.addCase(fetchUserThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUserThunk.fulfilled, (state, action) => {
            // console.log('in fulfilled')
            state.loading = false;
            state.users = action.payload;
            // console.log(state.users)
        })
        .addCase(fetchUserThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default userSlice.reducer;