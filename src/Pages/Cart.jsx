import React from "react";
import { useNavigate } from "react-router-dom";
const cartItems = [
  
   {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 1990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    quantity: 1,
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 290,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    quantity: 1,
  },
];

const CartPage = () => {
  const navigate = useNavigate(); // <-- Move this line here!

  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white rounded-2xl shadow p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 mt-1">₹{item.price}</p>
                <div className="mt-3 flex items-center space-x-2">
                  <button className="bg-gray-200 px-2 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button className="bg-gray-200 px-2 rounded">+</button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow p-6 h-fit sticky top-20">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{getTotal()}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Delivery</span>
            <span className="text-green-600">Free</span>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span>₹{getTotal()}</span>
          </div>
          <button onClick={() => {navigate('/checkout')}} className="w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 hover:shadow-xl">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
