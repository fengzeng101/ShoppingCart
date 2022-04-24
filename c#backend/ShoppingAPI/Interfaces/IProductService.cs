namespace ShippingAPI
{
    public interface  IProductService
    {
        IEnumerable<Product> GetProducts();
        
    }
}