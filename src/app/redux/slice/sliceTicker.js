"use client";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  hello:
  {
    // id: nanoid(),
    ticker:"abc",
    name:"apple",
    price:89,
    change_amount:34,
  }
};

export const tickerSlice=createSlice(
  {
    name:"tickerstore",
    initialState, 
    reducers:
    {
      update(state,action){
        state.hello=action.payload;
    }
  }
})
export const { update } = tickerSlice.actions;
export default tickerSlice.reducer;