import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom"
import { getTotal} from "../features/cartSlice";
import { useEffect } from "react";

const Order = () => {
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
        // reset the basket count in the header bar
        dispatch(getTotal(0));
    },[cart,dispatch])
        
    return (
    <div className="cart-container">
        <h2>Thank You For Shopping</h2>                       
        <div className="cart-empty">
            <p>We’ve received your order!</p>
            <div className="start-shopping">
                <Link to ="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 
                        0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <span>Back To Home</span>
                </Link>
            </div>
        </div>        
    </div>
    );
};
 
export default Order;