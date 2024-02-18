import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:false,
    currentPage:'market'
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setLoggedIn:(state,action)=>{
            localStorage.setItem('authToken',JSON.stringify(action.payload));
            
        },
        setUser:(state,action)=>{
            localStorage.setItem('user',JSON.stringify({...action.payload}));
        },
        setIsLoggedIn:(state,action)=>{
            state.isLoggedIn =action.payload;
        },
        setCurrentPage:(state,action)=>{
            state.currentPage =action.payload;
        },
        

    }
})


export const authReducer = authSlice.reducer;
export const actions = authSlice.actions;
export const authSelector =(state)=>state.authReducer;