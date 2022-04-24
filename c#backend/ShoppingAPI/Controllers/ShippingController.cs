using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;


namespace ShippingAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShippingController : ControllerBase
    {        
        
        //GET http://localhost:5000/shipping/60
        [EnableCors("_myAllowSpecificOrigins")]        
        [HttpGet("{price}")]
        [HttpGet(Name = "GetShippingFee")]
        // need to set price to decimal, otherwise the forign currency calculation is not working
        public IActionResult  Get(decimal price)
        {
            // set up default shipping fee
            int shippingFee = 10;
            // if order price greater then $50, change the shipping fee
            if (price >50)
                shippingFee = 20;
           
            var result = new
            {
                shipping = shippingFee,             
            };

            // return {"Shipping":20}
            return Ok(Newtonsoft.Json.JsonConvert.SerializeObject(result));
            
        }
    }

}