import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import Lego from "../images/lego.png";

const NavBar = () => {
    const {cartTotalQuantity} =useSelector(state=>state.cart)   
    // const cartTotalQuantity =0;
    return ( <nav className = "nav-bar">
            <Link to = "/">
                <div className="nav-bar-lego">
                    {/* <img src={"https://res.cloudinary.com/dmkadw8wn/image/upload/v1650083881/shoppingCart/logo1_xh4z93.png"} alt="LEGO"/> */}
                    <img src={Lego} alt="LEGO"/>
                    <h2>Store</h2>
                </div>
            </Link>
            <Link to = "/cart">
                <div className="nav-bag">

                    <svg xmlns="http://www.w3.org/2000/svg" 
                            width="35" 
                            height="35" 
                            fill="currentColor" 
                            className="bi bi-handbag-fill" 
                            viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 
                            1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 
                            0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 
                            2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <span className="bag-quantity">
                        <span>{cartTotalQuantity}</span>
                    </span>
                </div>
            </Link>
        </nav> );
}
 
export default NavBar;