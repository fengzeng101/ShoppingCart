namespace ShippingAPI
{
    public class OrderService : IOrderService
    {
       
        public OrderResult GetOrderResult(Newtonsoft.Json.Linq.JArray payload)
        {

            var result = new OrderResult() { Order = "Order fail!" };
            bool isProperProduct = true;
            
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
            
          
            return result;
        }

    }
}