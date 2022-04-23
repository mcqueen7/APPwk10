import { createSlice } from "@reduxjs/toolkit";

// Part1: 
const initialState={counterValue:0};

const counterSlice=createSlice({
  name:"counter",
  initialState,
  reducers:{
    setCounter:(state,action)=>{
      state.counterValue=action.payload;
    },
    increaseOne:(state)=>{
      console.log("increaseOne()");
      state.counterValue++;
    },
    decreaseOne:(state)=>{
      console.log("decreaseOne()");
      state.counterValue--;
    }
  },

});
export const selectCounter=(state)=>state.counter.counterValue;
export const {setCounter,decreaseOne,increaseOne} = counterSlice.actions;
export default counterSlice.reducer;
