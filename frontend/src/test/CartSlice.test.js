import cartSlice,{addToCart,removeFromCart,decreaseCart,
    clearCart,getTotal,setCartCountry,removeCart} from "../features/cartSlice";
import products from "./__mocks__/products";

const defaultState =
 {
    "cartCountry": {"label": "Australia", "value": 1},
    "cartItems": [], 
    "cartShippingAmount": {"audValue": 10, "newValue": 10}, 
    "cartTotalAmount": 0,
    "cartTotalQuantity": 0, 
    "currencyLabel": "$"
}

const product = products[0];

describe("Cart Reducer", () => {
    test('Cart reducer initial state', ()=>{    
        expect(cartSlice(undefined,{})).toEqual(defaultState);
        });  

    test('Add Product', ()=>{    
        const initialState = undefined;
        const action = addToCart(product);
        const state = cartSlice(initialState,action);              
        expect(JSON.stringify({product:state.cartItems[0]})).toEqual((JSON.stringify({product})));
        });  

    test('Remove Product', ()=>{    
        const initialState = undefined;
        const action = removeFromCart(product);
        const state = cartSlice(initialState,action);        
        expect(state.cartTotalQuantity).toEqual(0);
        });  

    test('clear Cart', ()=>{    
        const initialState = undefined;
        const action = clearCart();
        const state = cartSlice(initialState,action);
        expect(state.cartItems).toEqual([]);                 
        });  
});  

