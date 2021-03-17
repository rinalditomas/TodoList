import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productReducer from './allProducts'
import singleProductReducer from './singleProduct'



const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
      products : productReducer,
      singleProduct : singleProductReducer
      
      
  },
});




export default store;
