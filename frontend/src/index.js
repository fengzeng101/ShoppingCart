import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer, { productsFetch } from "./features/productsSlice";
import { productsApi } from './features/productsApi';
import cartReducer, {getTotal} from "./features/cartSlice"
import {BrowserRouter} from "react-router-dom"


const store = configureStore({
  reducer:{
    products:productsReducer,
    cart:cartReducer,
    [productsApi.reducerPath]:productsApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(productsApi.middleware)
  },
});
store.dispatch(productsFetch())
store.dispatch(getTotal())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
