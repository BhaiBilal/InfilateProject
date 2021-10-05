import { createSlice } from "@reduxjs/toolkit";

export const Userlogin=createSlice({
    name:'user-login',
    initialState:{
        email:'',
        token:'',
        FullName:'',
        isUserLoggedIn:false,
        role_id:'',
    },
    reducers:{
        userLoginRequest:(state,action)=>{
            state.email=action.payload.email
            state.token=action.payload.token
            state.isUserLoggedIn=true
            state.FullName=action.payload.FullName
            state.role_id = action.payload.role_id
        },
        userLogoutRequest:(state,action)=>{
            state.email=''
            state.token=''
            state.isUserLoggedIn=false
            state.FullName=''
            state.role_id = ''
        }
    }
})

export const {userLoginRequest,userLogoutRequest}=Userlogin.actions

export default Userlogin.reducer