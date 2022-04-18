import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
import { COUNTRY_LIST as countryList } from "../common/contants";

const initialState = {
    // use Local Storage to avoid refresh screen to lost data
    cartItems:localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems")):[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
    cartShippingAmount:{newValue:10,audValue:10},
    cartCountry:localStorage.getItem("country")
        ? JSON.parse(localStorage.getItem("country")):{ value:1, label:"Australia"},
    currencyLabel:"$",
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const itemIndex =state.cartItems.findIndex(item=>item.id===action.payload.id);
            if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity +=1;
                //toast.info(`increased ${state.cartItems[itemIndex].name} quantity`,{position:"bottom-left"});
            }
            else{                
                const tempProduct = {...action.payload, cartQuantity:1,audPrice:action.payload.price};
                const countryIndex =countryList.findIndex(country=>country.label===state.cartCountry.label);                         
                if(countryIndex>=0)                                                                                                                   
                {                 
                   tempProduct.price = action.payload.price * countryList[countryIndex].value;                   
                }                                
                state.cartItems.push(tempProduct);                       
                //toast.success(`${action.payload.name} added to basket`,{position:"bottom-left"});                
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));            
        },
        removeFromCart(state,action){
            const nextCartItems = state.cartItems.filter(
                cartItem=>cartItem.id !== action.payload.id
            );
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
            toast.error(`${action.payload.name} remove from basket`,{position:"bottom-left"});            
        },
        decreaseCart(state,action){
            const itemIndex =state.cartItems.findIndex(item=>item.id===action.payload.id);
            if(state.cartItems[itemIndex].cartQuantity>1)
            {
                state.cartItems[itemIndex].cartQuantity-=1;
                //toast.error(`Decreased ${action.payload.name} basket quantity`,{position:"bottom-left"});
            }
            else if(state.cartItems[itemIndex].cartQuantity===1){
                const nextCartItems = state.cartItems.filter(
                    cartItem=>cartItem.id !== action.payload.id
                )
                state.cartItems = nextCartItems;               
                //toast.error(`${action.payload.name} remove from basket`,{position:"bottom-left"});
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));            
        },
        clearCart(state,action){
            state.cartItems = [];
            toast.error(`Basket cleared`,{position:"bottom-left"});
            localStorage.setItem("cartItems","[]");           
            
        },
        removeCart(state,action){
            state.cartItems = [];
            toast.info(`Sending order`,{position:"bottom-left"});
            localStorage.setItem("cartItems","[]");           
            
        },
        getTotal(state,action)
        {
            // use reduce to calculate product total
            let {total,quantity} = state.cartItems.reduce((cartTotal,cartItem)=>{
                const{price, cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity+=cartQuantity;
                return cartTotal;
            },{
                total:0,
                quantity:0
            })
            state.cartTotalQuantity=quantity;           
            state.cartShippingAmount.newValue= action.payload; //payload is shipping fee
            state.cartTotalAmount=total + action.payload;           
        },
        setCartCountry(state,action)
        {            
            state.cartCountry = action.payload;            
            const countryIndex =countryList.findIndex(country=>country.label===action.payload.label);            
            state.currencyLabel=countryList[countryIndex].symbol;                            
            for (let i = 0; i < state.cartItems.length; i++) {
                state.cartItems[i].price = state.cartItems[i].audPrice * countryList[countryIndex].value;                        
            }  
            state.cartShippingAmount.newValue = state.cartShippingAmount.audValue  * countryList[countryIndex].value;                         
        }
    },
});
export const {addToCart,removeFromCart,decreaseCart,clearCart,getTotal,setCartCountry,removeCart} = cartSlice.actions;

export default cartSlice.reducer;