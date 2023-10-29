"use client"
import { configureStore } from '@reduxjs/toolkit'
import  tickerreducer from "../slice/sliceTicker"
export const store = configureStore({
  reducer: {
    hello:tickerreducer,
  },
})