import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
const initialState={
    items:[],
    status:null
};

// create Async Thunk
export const productsFetch = createAsyncThunk(
    "pprducts/productsFetch",
    async ()=>{
       const response = await axios.get("http://localhost:5000/products")
       return response?.data;
    }
)

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},  
    extraReducers:{
      [productsFetch.pending]  : (state,action)=>{
        //Better Reducers With Immer
        state.status= "pending"
      },
      [productsFetch.fulfilled]  : (state,action)=>{        
        state.status= "success"
        state.items=action.payload
      },
      [productsFetch.rejected]  : (state,action)=>{        
        state.status= "rejected"
      }
    }  

})

export default productsSlice.reducer