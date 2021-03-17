import axios from 'axios'
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";


export const getSingleProduct = createAsyncThunk('GET_PRODUCT',(productID,thunkAPI)=> {
  return axios.get(`http://localhost:3001/products/${productID}`)
   .then(response =>{console.log("ACA ESTA LA DATA",response.data)})
})



 export const getSingleProductReducer = createReducer({},{
 
   [getSingleProduct.fulfilled]: (state, action) => action.payload,

  })