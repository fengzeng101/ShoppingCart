import cartSlice from "../features/cartSlice"

const defaultState =
 {
    "cartCountry": {"label": "Australia", "value": 1},
    "cartItems": [], 
    "cartShippingAmount": {"audValue": 10, "newValue": 10}, 
    "cartTotalAmount": 0,
    "cartTotalQuantity": 0, 
    "currencyLabel": "$"
}


describe("Cart Reducer", () => {
    test('Cart reducer initial state', ()=>{    
    expect(cartSlice(undefined,{})).toEqual(defaultState);
    });  
});  