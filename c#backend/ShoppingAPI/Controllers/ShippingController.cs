using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;


namespace ShippingAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShippingController : ControllerBase
    {

        private readonly IShippingService _service;

        // Dependency injection for our product service
        public ShippingController(IShippingService service)
        {
            _service = service;
        }

        //GET http://localhost:5000/shipping/60
        [EnableCors("_myAllowSpecificOrigins")]        
        [HttpGet("{price}")]
        [HttpGet(Name = "GetShippingFee")]
        // need to set price to decimal, otherwise the forign currency calculation is not working
        public IActionResult  Get(decimal price)
        {
            
            var result =  _service.GetShippingFee(price);
            // return {"Shipping":20}
            return Ok(Newtonsoft.Json.JsonConvert.SerializeObject(result));
            
        }
    }

}