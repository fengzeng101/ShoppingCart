namespace ShippingAPI
{
    public interface  IOrderService
    {
        OrderResult GetOrderResult(Newtonsoft.Json.Linq.JArray payload);
        
    }
}