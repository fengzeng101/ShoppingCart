const express = require('express');
const products = require("../products/products")

const router = express.Router();

router.get("/",(req,res)=>{
  res.send("Welcome to our online shop API...")
});

// return the products
// products will display at "http://localhost:5000/products"
router.get("/products",(req,res)=>{
  res.send(products)
})


// calculate the total shipping cost
// call "http://localhost:5000/shipping/50" to get the shipping price
router.get("/shipping/:price",(req,res)=>{
  const {price}= req.params;    
  console.log(`shipping req.params =${JSON.stringify(req.params)}`);      
  if(!price)
  {
      res.status(418).send({message:'We need a price parameter!'})
  }
  else
  {
      // default shipping fee is AUD$10
      let shippingCost = 10    
      // if the basket total > AUD$50, return $20 
      if(price >50)        
        {shippingCost = 20;}        
      res.send({shipping:shippingCost});    
  }    
});


// return the thank you message
router.post("/order/",(req,res)=>{
  const order= req.body;       
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


module.exports = router;
