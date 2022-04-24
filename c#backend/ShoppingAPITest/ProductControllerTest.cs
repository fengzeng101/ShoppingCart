
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ShippingAPI;
using ShippingAPI.Controllers;
using System.Collections.Generic;
using Xunit;

namespace ShoppingAPITest
{
    public class ProductControllerTest
    {
        private readonly ProductsController _controller;
        private readonly IProductService _service;
        private readonly ILogger<ProductsController> _logger;
       
        public ProductControllerTest()
        {
            using var logFactory = LoggerFactory.Create(builder => builder.AddConsole());
            var logger = logFactory.CreateLogger<ProductsController>();

            _service = new ProductService();            
            _controller = new ProductsController(_service, logger);
            _logger = logger;

        }


        [Fact]
        public void Get_WhenCalled_ReturnsOkResult()
        {
            // Act
            var okResult = _controller.Get();

            // Assert
            Assert.IsType<OkObjectResult>(okResult.Result as OkObjectResult);
        }

        [Fact]
        public void GetProductsTest()
        {
          
            var result = _controller.Get();
            
            Assert.IsType<OkObjectResult>(result.Result);

            var list = result.Result as OkObjectResult;

            if (list != null)
            {
                Assert.IsType<List<Product>>(list.Value);

                var listProducts = list.Value as List<Product>;

                // expect return 3 procudts from the backend server
                Assert.Equal(3, listProducts?.Count);
            }
        }
    }
}