// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
//import userReducer from '../userSlice'
import rootReducer from '../features/rootReducers'

// copy these coding from this site
//https://redux.js.org/usage/writing-tests

const preloadedState = {
  // use Local Storage to avoid refresh screen to lost data
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartShippingAmount: { newValue: 10, audValue: 10 },
  cartCountry: { value: 1, label: "Australia" },
  currencyLabel: "$",
}

function render(
 
  ui,
  {
    preloadedState={cartTotalQuantity: 0},
    store = configureStore({ reducer: { user: rootReducer }, preloadedState}),
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