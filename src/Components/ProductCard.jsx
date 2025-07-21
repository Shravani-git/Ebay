import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product, onToggleFavorite, onAddToCart }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
      {/* Image + Overlay */}
      <div className="relative overflow-hidden">
        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite?.(product)}
          className="absolute top-3 right-3 z-10 h-8 w-8 p-0 rounded-full bg-white/70 backdrop-blur-md hover:bg-white"
        >
          <Heart className="h-4 w-4 m-auto text-red-500" />
        </button>

        {/* Product Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Quick Add to Cart Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <button
            onClick={() => onAddToCart?.(product)}
            className="translate-y-4 opacity-0 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium shadow group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </div>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-blue-600">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
