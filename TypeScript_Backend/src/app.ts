import express,{Application,Request,Response} from 'express';
import products from './products/products';
import cors from "cors";
// const express = require('express');
// const cors = require('cors');
// const products1 = require('./products/products');


const app:Application = express();
const port:number = 5000;
const router = express.Router();
app.use(express.json());
app.use(cors())
app.use(router);


router.get("/",(req:Request,res:Response )=>{
    res.send("Welcome to our online shop API...")
  });
  
 // return the products
 // products will display at "http://localhost:5000/products"
  router.get("/products",(req : Request,res : Response)=>{
    res.send(products)
  })
  

  // calculate the total shipping cost
  // call "http://localhost:5000/shipping/50" to get the shipping price
  //router.get("/shipping/:price",(req : Request,res : Response)=>{
    router.get("/shipping/:price",(req : Request,res : Response)=>{    
        
    const price :string = req.params.price; 
    if(!price)
    {
        res.status(418).send({message:'We need a price parameter!'})
    }
    else
    {
        // default shipping fee is AUD$10
        let shippingCost = 10    
        // if the basket total > AUD$50, return $20 
        if(parseInt(price) >50)        
          {shippingCost = 20;}        
        res.send({shipping:shippingCost});    
    }    
  });
  

  // return the thank you message
  router.post("/order/",(req : Request,res: Response)=>{
    const order = req.body;       
    console.log(`order body =${JSON.stringify(req.body)}`);   
    if (Object.keys(order).length === 0) 
    {
        res.status(418).send({message:'We need a order value!'})
    }
    else
    {               
        res.send({order:"Order success!"});    
    }    
  });


app.listen(port,()=>{
    console.log(`Çonnected successfully on port ${port}`)
});
export default app
//module.exports = app;