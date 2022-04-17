import React from 'react';
import {shallow, mount,configure} from "enzyme";
import toJson from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16"

import App from '../App';
import NavBar from "../components/NavBar"

configure({adapter: new Adapter()});


describe("rendering components",()=>{
  it("renders App component without crashing", ()=>{
    shallow(<App/>);
  });
  
  // it("renders NavBar component without crashing", ()=>{
  //   shallow(<NavBar/>);
  // });

 })