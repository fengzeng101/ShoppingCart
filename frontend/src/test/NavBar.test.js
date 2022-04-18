import React from 'react'
// import { render, screen } from './test-utils'
import { render as rtlRender,screen } from '@testing-library/react'
import NavBar from "../components/NavBar"
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


describe("NavBar", () => {

    test('NavBar loading properly', ()=>{
    render(<NavBar/>)
    expect(screen.getByText('Store')).toBeInTheDocument();

    });
    
});


