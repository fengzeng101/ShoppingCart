import React from 'react';
import { render as rtlRender,screen } from '@testing-library/react'
//import userEvent from '@testing-library/user-event";'

import {shallow, mount,configure} from "enzyme";
import toJson from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16"

import App from '../App';
import NavBar from "../components/NavBar"
import Home from "../components/Home"
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

configure({adapter: new Adapter()});
const ezymeWrapper = shallow(<App/>);


describe("rendering components",()=>{  
  it("renders App component without crashing", ()=>{    
    expect(ezymeWrapper).toBeDefined();
  });
  
  // it("renders NavBar component without crashing", ()=>{
  //   shallow(<NavBar/>);
  // });

});
 
describe("NavBar", () => {

  test('NavBar loading properly', ()=>{
  render(<NavBar/>)
  expect(screen.getByText('Store')).toBeInTheDocument();

  });

  // render(<NavBar/>);
  // test('should contain <img/ > with alt as logo', () => {
    
  //   expect(screen.getByAltText('LEGO')).toBeInTheDocument();  
  //  });
  
});

describe("Home", () => {

  test('Home loading properly', ()=>{
   render(<Home/>)
  //const goToBasketButton = getByRole('button',{name:'goToBasket'})
  //userEvent.click(goToBasketButton)
 
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});