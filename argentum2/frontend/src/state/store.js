import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {getSingleProductReducer} from './singleProduct'
import {getSearchProductReducer} from './searchProduct'
import {getAllProductsReducer} from './allProducts'
import {productReducer} from './product'
import { userReducer } from "./user";




const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    singleProduct: getSingleProductReducer,
    searchProduct: getSearchProductReducer,
    allProducts : getAllProductsReducer,
    user: userReducer,
   product :productReducer,

  },
});



export default store;