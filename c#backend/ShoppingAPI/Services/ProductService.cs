namespace ShippingAPI
{
    public class ProductService : IProductService
    {
        private readonly List<Product> _products;

        public ProductService()
        {
            _products = new List<Product>()
            {
                new Product()
                {
                    Id = 1,
                    Name = "New York",
                    Description = "LEGO 21028 Architecture New York City",
                    Price = 35,
                    Image = @"https://res.cloudinary.com/dmkadw8wn/image/upload/v1650024348/shoppingCart/new_york_ontlxn.png"
                },
                new Product()
                {
                    Id = 2,
                    Name = "London",
                    Price = 20,
                    Description = "LEGO 21034 Architecture London",
                    Image = @"https://res.cloudinary.com/dmkadw8wn/image/upload/v1650025281/shoppingCart/London_e1pxxi.png"
                    },
                new Product()
                {
                    Id = 3,
                    Name = "Sydney",
                    Description = "LEGO 21032 Architecture Sydney Skyline Building",
                    Price = 30,
                    Image = @"https://res.cloudinary.com/dmkadw8wn/image/upload/v1650024348/shoppingCart/sydney_hyjj6i.png"
                }               
            };
        }

        public IEnumerable<Product> GetProducts()
        {
            // use the Arrow Function to remove some invalid products
            //IEnumerable<Product> items = _products.Cast<Product>().Where(x => x.Name != String.Empty)
            //  .Take(3);
            return _products;
        }

    }
}