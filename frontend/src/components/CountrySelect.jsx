import React, {useState,useEffect} from 'react'
import Select from 'react-select'
import {useSelector,useDispatch} from "react-redux";
import { setCartCountry} from "../features/cartSlice";
import { COUNTRY_LIST as countryList } from "../common/contants";

const CountrySelect = () => {
    // const countryList =[
    //     {
    //         value:1,
    //         label:"Australia"
    //     },
    //     {
    //         value:4.71,
    //         label:"China"
    //     },
    //     {
    //         value:0.57,
    //         label:"British"
    //     }
    // ]
    
    
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();
    
    const [country,setCountry]=useState(cart.cartCountry);
    useEffect(()=>{
        setCountry(cart.cartCountry);
        console.log(`user effect cart.cartCountry =${JSON.stringify(cart.cartCountry)}`);
        console.log(`user effect country =${JSON.stringify(country)}`);
        
    },[cart.cartCountry,country])
   
   

 
   const selectHandler = (e)=>
   {
    // let currencyObject = {label:e.label,value:e.value, oldLabel:country.label,oldValue:country.value };     
    // console.log(`currencyObject =${JSON.stringify(currencyObject)}`);  
    // setCountry(e);   
    // console.log(`country =${JSON.stringify(country)}`); 
    // dispatch(setCartCountry(currencyObject));  
    dispatch(setCartCountry(e)); 
   }
   
   return (<div><Select  defaultValue={country}  options={countryList} onChange={selectHandler}/></div>  );
}


export default CountrySelect;