import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increment:(state,action)=>{
            return state+1;
        },
        decrement:(state,action)=>{
            return state-1;
        },
        reset:()=>{
            return 0;
        },
        increaseByVal:(state,action)=>{
            return state+action.payload;
        }

    }
});
export const counterReducer=counterSlice.reducer;

export const {increment,decrement,reset,increaseByVal}=counterSlice.actions;