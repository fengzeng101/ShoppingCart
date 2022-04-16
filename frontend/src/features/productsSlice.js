import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "../common/contants"
import axios from "axios"
const initialState={
    items:[],
    status:null
};

// create Async Thunk
export const productsFetch = createAsyncThunk(
    "prducts/productsFetch",
    async ()=>{
       const response = await axios.get(BASE_URL+"/products")
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