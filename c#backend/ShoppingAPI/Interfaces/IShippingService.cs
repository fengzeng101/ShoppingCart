namespace ShippingAPI
{
    public interface  IShippingService
    {
        ShippingFee GetShippingFee(decimal price);
        
    }
}