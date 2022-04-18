
import {configureStore} from "@reduxjs/toolkit";
import { productsApi } from './API/productsApi';
import  { productsFetch } from "./features/productsSlice";
import rootReducer from './features/rootReducers';

const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>{
     return getDefaultMiddleware().concat(productsApi.middleware)
   },
 });
 store.dispatch(productsFetch())

 export default store