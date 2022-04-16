import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom"
import { removeFromCart ,decreaseCart,addToCart,clearCart,getTotal} from "../features/cartSlice";
import { useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import CountrySelect from "./CountrySelect"


const Cart = () => {
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();
    const history = useHistory();
    const [currency,setCurrency]=useState(cart.currencyLabel);
    useEffect(()=>{
        
        setCurrency(cart.currencyLabel);
        dispatch(getTotal());
       // console.log(`user effect cart =${JSON.stringify(cart)}`);
    },[cart,dispatch,currency])
   
    

    const handleRemoveFromCart = (cartItem)=>{
        dispatch(removeFromCart(cartItem));
    }
    const handleDecreaseCart = (cartItem)=>{
        dispatch(decreaseCart(cartItem));
    }
    const handleIncreaseCart = (cartItem)=>{
        dispatch(addToCart(cartItem));
    }
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    const handlePlaceOrder = ()=>{
        dispatch(clearCart());
        history.push("/Order");
    }
    const handleGoToHome = ()=>{
        history.push("/");
    }

    return (
    <div className="cart-container">
        <h2>Shopping Basket Checkout</h2>
       
       
        { cart.cartItems.length===0 ?(
            <div className="cart-empty">
                <p>Your basket is currently empty</p>
                <div className="start-shopping">
                    <Link to ="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 
                            0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        ):(
            <div>
               <div className="go-home-container">
                    <button onClick={()=> handleGoToHome()} className="back-home" >Back To Home</button>
                    <div className="go-home-label">Country</div> 
                    <div className="go-home-right"><CountrySelect/></div>                    
               </div>
               <div className="titles">
                 <h3 className="product-title">Product</h3> 
                 <h3 className="price">Price</h3>
                 <h3 className="quantity">Quantity</h3>
                 <h3 className="total">Total</h3>
                </div>  
                <div className="cart-items">
                    {cart.cartItems?.map(cartItem=>(
                        <div className="cart-item" key = {cartItem.id}>
                            <div className="cart-product">
                                <img src={cartItem.image} alt={cartItem.name}/>
                                <div>
                                    <h3>{cartItem.name}</h3>
                                    <p>{cartItem.desc}</p>
                                    <button onClick={()=> handleRemoveFromCart(cartItem)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div className="cart-product-price">{currency}{parseFloat(cartItem.price).toFixed(2)}</div>
                            <div className="cart-product-quantity">
                                <button onClick={()=>handleDecreaseCart(cartItem)}>-</button>
                                <div className="count">{cartItem.cartQuantity}</div>
                                <button onClick={()=> handleIncreaseCart(cartItem)}>+</button>
                            </div>
                            <div className="cart-product-total-price">
                                {currency}{parseFloat(cartItem.cartQuantity * cartItem.price).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <button className="clear-cart" onClick={()=>handleClearCart()}>Clear Basket</button>
                    <div className="cart-checkout">
                        <div className="shipping">
                            <span>Shipping</span>
                            <span className="shippingAmount">{currency}{parseFloat(cart.cartShippingAmount.newValue).toFixed(2)}</span>
                        </div>
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className="amount">{currency}{parseFloat(cart.cartTotalAmount).toFixed(2)}</span>
                        </div>
                        {/* <p>Taxes and shipping calculated at checkout</p> */}
                        <button onClick={()=>handlePlaceOrder()}>Place order</button>
                        <div className="continue-shopping">
                            <Link to ="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 
                                    0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                </svg>
                                <span>Continue Shopping</span>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>

        )}

    </div>
    );
};
 
export default Cart;