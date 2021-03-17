
import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";



export const getSingleProductRequest = createAsyncThunk("SINGLE-PRODUCT", (productId) => {
  return axios
    .get(`/products/${productId}`)
    .then((res) => res.data)
    
})
    

const singleProductReducer = createReducer([], {
  [getSingleProductRequest.fulfilled]: (state, action) => action.payload,
});

export default singleProductReducer;