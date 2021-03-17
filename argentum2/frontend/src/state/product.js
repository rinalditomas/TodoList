import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const editRequest = createAsyncThunk("EDIT", (user,thunkAPI) => {
    return axios.post("/login",{email:user.email,password:user.password}).then((res)=> res.data )
  });
export const deleteRequest = createAsyncThunk("DELETE", (user,thunkAPI) => {
    return axios.post("/logout").then((res)=> res.data )
  });

  export const createRequest = createAsyncThunk("CREATE", (user,thunkAPI) => {
      return axios.post("/signup",{email:user.email,password:user.password,name:user.name,lastname:user.lastname}).then((res)=> res.data )
    });

  export const productReducer = createReducer({}, {
    [editRequest.fulfilled]: (state, action) => action.payload,
    [deleteRequest.fulfilled]: (state, action) => action.payload,
    [createRequest.fulfilled]: (state, action) => action.payload,
  });