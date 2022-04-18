// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
//import userReducer from '../userSlice'

//import rootReducer from '../features/rootReducers'

import {cartSlice} from '../features/cartSlice'


// copy these coding from this site
//https://redux.js.org/usage/writing-tests


function render(  
  ui,
  {    
    preloadedState,
    store = configureStore({ reducer:  {cartSlice} , preloadedState:{      
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
        cartShippingAmount: { newValue: 10, audValue: 10 },
        cartCountry: { value: 1, label: "Australia" },
        currencyLabel: "$",
      
    }}),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }