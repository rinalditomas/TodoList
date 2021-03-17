import axios from 'axios'
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";


export const getSearchProduct = createAsyncThunk('SEARCH_PRODUCT',(search)=> {
  return axios.get(``)

   .then(response =>{return(response.data)})
})


 export const getSearchProductReducer = createReducer([],{
   [getSearchProduct.fulfilled]: (state, action) => action.payload,
  })