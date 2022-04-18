import{combineReducers} from 'redux';
import productsReducer  from "./productsSlice";
import { productsApi } from '../API/productsApi';
import cartReducer from "./cartSlice"

const rootReducer = combineReducers({
    products:productsReducer,
    cart:cartReducer,
    [productsApi.reducerPath]:productsApi.reducer,
})

export default rootReducer