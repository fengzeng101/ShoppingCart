
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ShippingAPI;
using ShippingAPI.Controllers;
using Xunit;

namespace ShoppingAPITest
{
    public class ShippingControllerTest
    {
        private readonly ShippingController _controller;
        private readonly IShippingService _service;


        public ShippingControllerTest()
        {                                             
            _service = new ShippingService();
            _controller = new ShippingController(_service);
        }
       
        [Fact]
        public void GetSmallOrderShippingFeeTest()
        {
            var okResult = _controller.Get(15);            
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);            
            var shippingObject = okResult as OkObjectResult;

            // return $10 as delivery fee when order price <= $50
            Assert.Equal("{\"shipping\":10}", shippingObject?.Value?.ToString());           
        }

        [Fact]
        public void GetBigOrderShippingFeeTest()
        {
            var okResult = _controller.Get(55);
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
            var shippingObject = okResult as OkObjectResult;

            // return $20 as delivery fee when order price > $50
            Assert.Equal("{\"shipping\":20}", shippingObject?.Value?.ToString());
        }
    }
}