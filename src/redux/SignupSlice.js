// import { createSlice } from "@reduxjs/toolkit";

// export const Signup=createSlice({
//     name:'signup',
//     initialState:{
//         firstname:'',
//         lastname:'',
//         email:'',
//         uid:'',
//         isUserSignedup:false
//     },
//     reducers:{
//         userSignedupRequest:(state,action)=>{
//             state.email=action.payload.email
//             state.uid=action.payload.uid
//             state.isUserSignedup=true
//         },
//         userLogoutRequest:(state,action)=>{
//             state.email=action.payload
//             state.uid=null
//             state.isUserSignedup=false
//         }
//     }
// })

// export const {userSignedupRequest,userLogoutRequest}=Signup.actions

// export default Signup.reducer