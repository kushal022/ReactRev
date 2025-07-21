import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserThunk = createAsyncThunk('users/fetchUserThunk', async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!res.ok){
        throw new Error('Failed to fetch users');
    }
    const data = await res.json()
    // console.log(data)
    return data;
})