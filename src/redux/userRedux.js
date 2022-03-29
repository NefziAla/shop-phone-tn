import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
       loginStart:(state)=>{
         state.isFetching=true
         state.error=false

       },
       loginSuccess:(state,action)=>{
        state.isFetching=false
        state.currentUser=action.payload


       },
       loginFailure:(state,action)=>{
        state.isFetching=false
        state.error=true

       },
       logoutUser:(state)=>{
         state.currentUser=null
       },
       register:(state,action)=>{
        state.currentUser=action.payload
       }
    }
})

export const {loginStart,loginSuccess,loginFailure,logoutUser}=userSlice.actions
export default userSlice.reducer