import React from 'react'
// import { render, screen } from './test-utils'
import { render as rtlRender,screen } from '@testing-library/react'
import Cart from "../components/Cart"
import { Provider } from 'react-redux';
import store from "../store";
import '@testing-library/jest-dom';
import {BrowserRouter} from "react-router-dom";


const render = component => rtlRender(
    <BrowserRouter>
        <Provider store={store} >
        {component}
        </Provider>,
    </BrowserRouter>
)


describe("Cart", () => {

    test('Cart loading properly', ()=>{
    render(<Cart/>)
    expect(screen.getByText('Shopping Basket Checkout')).toBeInTheDocument();

    });
  
});

