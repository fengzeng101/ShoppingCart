import React, {useState,useEffect} from 'react'
import Select from 'react-select'
import {useSelector,useDispatch} from "react-redux";
import { setCartCountry} from "../features/cartSlice";
import { COUNTRY_LIST as countryList } from "../common/contants";

// this control is for country select combo box
const CountrySelect = () => {
    
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();    
    const [country,setCountry]=useState(cart.cartCountry);   
    useEffect(()=>{
        setCountry(cart.cartCountry);  
        localStorage.setItem("country",JSON.stringify(cart.cartCountry));          
    },[cart.cartCountry,country])
       
   const selectHandler = (e)=>
   {   
        dispatch(setCartCountry(e));         
   }   
   return (<div><Select  defaultValue={country}  options={countryList} onChange={selectHandler}/></div>  );
}
export default CountrySelect;