import React from 'react'
//import { render as rtlRender } from './test-utils'
import { render as rtlRender,screen } from '@testing-library/react'
//import { screen } from '@testing-library/react'
import Cart from "../components/Cart"
import { Provider } from 'react-redux';
import store from "../store";
import '@testing-library/jest-dom';
import {BrowserRouter} from "react-router-dom";
import * as actions from "../features/cartSlice";
import Enzyme from 'enzyme';



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

    // it('cart item number', () => {

    //   const mockStore={ 'quantity'};
    //   const dispatchSpy = jest.spyOn(ReactRedux, 'useDispatch');
    //   const mockDispatch = jest.fn();
    //   dispatchSpy.mockReturnValue(mockDispatch);
  
  
    //   const addToCartMock = jest.fn();
    //   const addToCartSpy = jest.spyOn(actions, 'addToCart');
    //   addToCartSpy.mockImplementation(addToCartMock);
  
    //   // const wrapper = Enzyme.mount(<Provider store={store} >
    //   //   <Cart />
    //   // </Provider>);
    //   // expect(wrapper.find('button')).toHaveLength(0);
  
    //   render(<Provider store={mockStore} >
    //     <Cart />
    //   </Provider>);
  
    //   const backHomeLink = screen.getByText('Back To Home')
  
    //   fireEvent.click(backHomeLink);
  
    //   expect(screen.getByText('Thank You For Shopping')).toBeInTheDocument();



    });
  
});

