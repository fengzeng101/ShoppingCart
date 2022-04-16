import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer, { productsFetch } from "./features/productsSlice";
import { productsApi } from './API/productsApi';
import cartReducer from "./features/cartSlice"
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // I move "Browser Router" from App.js to here, otherwise will have refresh problem
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
