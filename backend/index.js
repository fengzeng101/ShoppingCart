const express = require("express")
const cors = require("cors")
const products = require("./products")
const app = express()

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Welcome to our online shop API...")
})

// return the products
// products will display at "http://localhost:5000/products"
app.get("/products",(req,res)=>{
    res.send(products)
})

// calculate the total shipping cost
// call "http://localhost:5000/shipping/50" to get the shipping price
app.get("/shipping/:price",(req,res)=>{
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
app.post("/order/",(req,res)=>{
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


const port = process.env.port || 5000
app.listen(port, console.log(`Server running on port ${port}`))
