import { createSlice } from "@reduxjs/toolkit";

export const CartItems=createSlice({
    name:'Cart items',
    initialState:{
        count:''
    },
    reducers:{
        cartDispatch:(state,action)=>{
            state.count=action.payload.count
        },
        cartReset:(state,action)=>{
            state.count=''
        }
    }
})

export const {cartDispatch,cartReset}=CartItems.actions

export default CartItems.reducer