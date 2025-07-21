import { Link } from "react-router-dom";
import { Star, Heart, Truck, ShoppingBag } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Premium Products Store
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our curated collection of high-quality products designed to enhance your lifestyle
          </p>
          <Link to="/products">
            <button className="inline-flex items-center text-lg px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Feature Card 1 */}
          <div className="p-6 border rounded-lg text-center hover:shadow-lg transition hover:scale-[1.02]">
            <Star className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600 text-sm">
              Carefully selected products that meet our high standards for quality and durability
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="p-6 border rounded-lg text-center hover:shadow-lg transition hover:scale-[1.02]">
            <Heart className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Customer Love</h3>
            <p className="text-gray-600 text-sm">
              Thousands of happy customers who trust our products and service
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="p-6 border rounded-lg text-center hover:shadow-lg transition hover:scale-[1.02]">
            <Truck className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Quick and reliable shipping to get your products to you as soon as possible
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="mb-6 text-gray-700">
            Browse our complete product catalog and find exactly what you're looking for
          </p>
          <Link to="/products">
            <button className="px-6 py-2 border border-gray-700 text-gray-700 rounded-lg hover:bg-gray-100 transition">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
