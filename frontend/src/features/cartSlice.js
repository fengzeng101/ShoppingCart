import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
import { COUNTRY_LIST as countryList } from "../common/contants";

const initialState = {
    cartItems:localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")):[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
    cartShippingAmount:10,
    cartCountry:{ value:1, label:"Australia"},
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
                toast.info(`increased ${state.cartItems[itemIndex].name} quantity`,{position:"bottom-left"});
            }
            else{
                console.log(`new item${state.cartCountry.label}`);
                const tempProduct = {...action.payload, cartQuantity:1,oldPrice:action.payload.price};
                state.cartItems.push(tempProduct);  
                console.log(`newcartItem =${JSON.stringify(state.cartItems)}`);               
                toast.success(`${action.payload.name} added to basket`,{position:"bottom-left"});
                
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
                toast.error(`Decreased ${action.payload.name} basket quantity`,{position:"bottom-left"});
            }
            else if(state.cartItems[itemIndex].cartQuantity===1){
                const nextCartItems = state.cartItems.filter(
                    cartItem=>cartItem.id !== action.payload.id
                )
                state.cartItems = nextCartItems;               
                toast.error(`${action.payload.name} remove from basket`,{position:"bottom-left"});
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        clearCart(state,action){
            state.cartItems = [];
            toast.error(`Basket cleared`,{position:"bottom-left"});
            localStorage.setItem("cartItems","[]");
            
        },
        getTotal(state,action)
        {
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
            state.cartTotalAmount=total + state.cartShippingAmount;
        },
        setCartCountry(state,action)
        {
            //if(action.payload.label !== state.cartCountry.label)
            //{
               // console.log(`old country${state.cartCountry.label}`);
               // console.log(`new country${action.payload.label}`);
                //let oldValue = state.cartCountry.value;
                state.cartCountry = action.payload;
               //console.log(`action.payload =${JSON.stringify(action.payload)}`); 
                 //console.log(`state.cartItems111 =${JSON.stringify(state.cartItems)}`); 
                // console.log(`hello`); 
                  const countryIndex =countryList.findIndex(country=>country.label===action.payload.label);
                //  console.log(`countryIndex${countryIndex}`); 
                //  const countryOldIndex =countryList.findIndex(country=>country.label===action.payload.oldLabel);
                //  console.log(`countryOldIndex${countryOldIndex}`); 
                //  if(countryIndex>=0 && countryOldIndex>=0)
                 //{
                     state.currencyLabel=countryList[countryIndex].symbol;
                    
                //console.log(`hello`); 
                     for (let i = 0; i < state.cartItems.length; i++) {
                         state.cartItems[i].price = state.cartItems[i].oldPrice * countryList[countryIndex].value;                        
                     }
                // }
                // else
                // {
                //     state.currencyLabel="$";
                // }
                // getTotal(state,action);
            //}
        }
    },
});
export const {addToCart,removeFromCart,decreaseCart,clearCart,getTotal,setCartCountry} = cartSlice.actions;

export default cartSlice.reducer;