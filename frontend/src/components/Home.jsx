import { useGetAllProductsQuery } from "../API/productsApi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const Home = () => {
  
    const {data, error,isLoading} =useGetAllProductsQuery();
    const dispatch = useDispatch();
    const history = useHistory();
   
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        history.push("/cart");
    }
    const handleGoToCart = () => {        
        history.push("/cart");
    }
    return ( <div className="home-container">
                {isLoading ?( <p>Loading...</p>
                ):error?
                    (<p>Please start backend API then refresh this page</p>
                    ):(
                    <>
                        <h2>New Arrivals</h2>
                        <div className="go-basket-container">
                            <div className="go-basket-left"> </div>
                            <button onClick={()=> handleGoToCart()} className="go-basket" >Go To Basket</button>
                        </div>
                        <div className="products">
                            {data?.map(product=><div key={product.id} className="product">
                                <h3>{product.name}</h3>
                                <img src={product.image} alt={product.name}/>
                                <div className="details">
                                    <span>{product.desc} </span>
                                    <span className="price">${product.price}</span>                                   
                                </div>
                                <button onClick={()=> handleAddToCart(product)}>Add To Basket</button>
                            </div>)}
                        </div>
                    </>)
                }
            </div> );
}
 
export default Home ;