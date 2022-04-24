using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ShippingAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _service;                      

        // Dependency injection for our product service
        public ProductsController(IProductService service)        
        {            
            _service = service;
        }

        //GET http://localhost:5000/products
        [EnableCors("_myAllowSpecificOrigins")]        
        [HttpGet(Name = "GetProducts")]
        public ActionResult<IEnumerable<Product>> Get()
        {
            var items = _service.GetProducts();

            return Ok(items);

        }
    }
}