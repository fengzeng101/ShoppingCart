import React from 'react'
//import { render as rtlRender,screen,fireEvent } from '@testing-library/react'
import { screen,fireEvent } from '@testing-library/react'
import Order from "../components/Order"
import '@testing-library/jest-dom';
import {BrowserRouter} from "react-router-dom";
import  {render as rtlRender}  from './test-utils'


const render = component => rtlRender(
    <BrowserRouter>        
        {component}        
    </BrowserRouter>
)


describe("Orderr", () => {

    test('Order loading properly', ()=>{
    render(<Order/>)
    expect(screen.getByText('Back To Home')).toBeInTheDocument();
    const backHomeLink = screen.getByText('Back To Home')       
    
    fireEvent.click(backHomeLink);
    
    expect(screen.getByText('Thank You For Shopping')).toBeInTheDocument();
    });
    
});


