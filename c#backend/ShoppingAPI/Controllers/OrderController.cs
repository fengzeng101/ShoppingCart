using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;


namespace ShippingAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly ILogger<OrderController> _logger;
        private readonly IOrderService _service;

        public OrderController(ILogger<OrderController> logger, IOrderService service)
        {
            _logger = logger;
            _service = service;
        }

        // POST http://localhost:5000/order
        // Body JSON value =  [{"id":2,"name":"London","desc":"LEGO 21034 Architecture London","price":20}]
        [EnableCors("_myAllowSpecificOrigins")]
        [HttpPost(Name = "PostOrder")]
        public IActionResult  Post([FromBody] Newtonsoft.Json.Linq.JArray payload)
        {
            var result = new OrderResult() { Order = "Order fail!" };                        
            try
            {              
                result = _service.GetOrderResult(payload);
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