namespace ShippingAPI
{
    public class ShippingService : IShippingService
    {
       
        public ShippingFee GetShippingFee(decimal price)
        {
            
            // set up default shipping fee
            int shippingFee = 10;
            // if order price greater then $50, change the shipping fee
            if (price > 50)
                shippingFee = 20;

            var result = new ShippingFee()
            {
                shipping = shippingFee,
            };

            return result;
        }

    }
}