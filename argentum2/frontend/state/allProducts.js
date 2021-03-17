
import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";



 export const getProductsRequest = createAsyncThunk("PRODUCTS", () => {
  return axios
    .get("/products")
    .then((res) => res.data)
    
}); 

const productsReducer = createReducer([], {
  [getProductsRequest.fulfilled]: (state, action) => action.payload,
});

export default productsReducer;