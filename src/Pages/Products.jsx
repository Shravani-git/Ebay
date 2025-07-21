import React from 'react'
import ProductCard from '../Components/ProductCard'
const Products = () => {
    const products = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199,
    originalPrice: 2490,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviewCount: 128,
    category: "Electronics",
    isNew: false,
    isSale: true,
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    price: 29,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.2,
    reviewCount: 640,
    category: "Clothing",
    isNew: true,
    description: "Comfortable organic cotton t-shirt in various colors"
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 205,
    category: "Electronics",
    isSale: true,
    description: "Advanced fitness tracking with heart rate monitor"
  },
  {
    id: "4",
    name: "Leather Messenger Bag",
    price: 8900,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.3,
    reviewCount: 89,
    category: "Accessories",
    description: "Handcrafted leather messenger bag for professionals"
  },
  
];
  return (
    <div className="container mx-auto">
        
        {/* Header */}
        <header className="py-4">
            <h1 className="text-3xl font-bold text-center">Our Products</h1>
        </header>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {products.map(product => (
            <ProductCard 
                key={product.id} 
                product={product} 
            />
        ))}
    </div>
    </div>
  )
}

export default Products