using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.Json;
using System.Text.Json.Nodes;


namespace ShippingAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly ILogger<OrderController> _logger;

        public OrderController(ILogger<OrderController> logger)
        {
            _logger = logger;
        }

        // POST http://localhost:5000/order
        // Body JSON value =  [{"id":2,"name":"London","desc":"LEGO 21034 Architecture London","price":20}]
        [EnableCors("_myAllowSpecificOrigins")]
        [HttpPost(Name = "PostOrder")]
        public IActionResult  Post([FromBody] Newtonsoft.Json.Linq.JArray payload)
        {
            var result = new OrderResult() { Order = "Order fail!" };            
            bool isProperProduct = true;

            try
            {               
                List<object> list = new List<object>();

                foreach (object obj in payload)
                {
                    if (obj != null)
                    {
                        string orderString = obj.ToString();

                        // deserialize to product object
                        var product = Newtonsoft.Json.JsonConvert.DeserializeObject<Product>(orderString);

                        // make sure the product has a name and price value
                        if (product == null || product?.Name == string.Empty || product?.Price == 0)
                        {
                            isProperProduct = false;
                        }
                    }
                }
                                                                      
                if (isProperProduct == true)
                    result = new OrderResult() { Order = "Order success!" };
            }
            catch (Exception ex)
            {                
                 string Message = $"Error happened when order product at {DateTime.UtcNow.ToLongTimeString()}, " + ex.Message;

                // log to Windows EventLog
                _logger.LogError(Message);
            }
            return new JsonResult(result);
        }
    }

}