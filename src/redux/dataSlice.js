import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    data:{},
    loading:false,
    error:"",
};

export const getGithub = createAsyncThunk('getGithub',async ()=>{
    const response = await axios.get('https://api.github.com/users/kececirecep')
    return response.data;  
})



const dataSlice = createSlice({
    name:"myGithub",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getGithub.pending,(state,action)=>{
            state.loading = true;
            state.error=""
        })
        builder.addCase(getGithub.fulfilled,(state,action)=>{
            state.data = action.payload
            state.loading=false
        })
        builder.addCase(getGithub.rejected,(state,action)=>{
            state.loading=false;
            state.error="Error data"
        })
    }
})

export default dataSlice.reducer;