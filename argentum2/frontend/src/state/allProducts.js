import axios from 'axios'
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

 export const getAllProducts = createAsyncThunk('GET_ALL',()=> {
   return axios
    .get("http://localhost:3001/products")
    .then((res) => res.data)
})

 export const getAllProductsReducer = createReducer([],{
   [getAllProducts.fulfilled]: (state, action) => action.payload,
  })

  