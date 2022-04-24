
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using ShippingAPI;
using ShippingAPI.Controllers;
using System.Collections.Generic;
using System.Text.Json;
using Xunit;

namespace ShoppingAPITest
{
    public class OrderControllerTest
    {
        private readonly OrderController _controller;
        private readonly IProductService _service;
        private readonly ILogger<OrderController> _logger;
       
        public OrderControllerTest()
        {
            using var logFactory = LoggerFactory.Create(builder => builder.AddConsole());
            var logger = logFactory.CreateLogger<OrderController>();

            _service = new ProductService();            
            _controller = new OrderController(logger);
            _logger = logger;

        }
       

        [Fact]
        public void OrderProductsSuccessTest()
        {
            string orderJson =  "[{ \"id\":2,\"name\":\"London\",\"desc\":\"LEGO 21034 Architecture London\",\"price\":20}]";

            var result = _controller.Post(JArray.Parse(orderJson));
            
            Assert.IsType<JsonResult>(result);

            var orderStatus = result as JsonResult;

            var expectResult = new JsonResult(new OrderResult() { Order = "Order success!" });

            if (orderStatus != null)
            {
                Assert.Equal(JsonSerializer.Serialize(expectResult.Value), JsonSerializer.Serialize(orderStatus.Value));                                
            }
        }

        [Fact]
        public void OrderProductsFailTest()
        {
            // if the product price is 0, it should return "order fail"
            string orderJson = "[{ \"id\":2,\"name\":\"London\",\"desc\":\"LEGO 21034 Architecture London\",\"price\":0}]";

            var result = _controller.Post(JArray.Parse(orderJson));

            Assert.IsType<JsonResult>(result);

            var orderStatus = result as JsonResult;

            var expectResult = new JsonResult(new OrderResult() { Order = "Order fail!" });

            if (orderStatus != null)
            {
                Assert.Equal(JsonSerializer.Serialize(expectResult.Value), JsonSerializer.Serialize(orderStatus.Value));
            }
        }
    }
}
