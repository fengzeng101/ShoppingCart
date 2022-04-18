import React from 'react'
// import { render, screen } from './test-utils'
import { render as rtlRender,screen } from '@testing-library/react'
import Home from "../components/Home"
import { Provider } from 'react-redux';
import store from "../store";
import '@testing-library/jest-dom';
import {BrowserRouter} from "react-router-dom";
//import userEvent from '@testing-library/user-event";'


const render = component => rtlRender(
    <BrowserRouter>
        <Provider store={store} >
        {component}
        </Provider>,
    </BrowserRouter>
)


describe("Home", () => {

    test('Home loading properly', ()=>{
    render(<Home/>)
    //const goToBasketButton = getByRole('button',{name:'goToBasket'})
    //userEvent.click(goToBasketButton)
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
    // beforeEach(() => {
    //     useSelectorMock.mockClear()
    //     useDispatchMock.mockClear()
    // })


    //cdase
    // useSelectorMock.mockReturnValue({ cartTotalQuantity: 0 });
    // it("NavBar loading without crashing", () => {
    //     render(
    //         <Provider store={createStore(rootReducers, {  })} >
    //             <NavBar />
    //         </Provider>,
    //     );

        // render(<NavBar />);
        // expect(screen.getByText('Store')).toBeInTheDocument();
 });


    
    // const navWrapper=<></>;  //enzemy==  
    // expect (navWrapper).find(text).t



