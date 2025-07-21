import React from 'react'

const Navbar = () => {
  return (

   <>
        <nav className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">E-commerce Store</h1>
            <ul className="flex justify-between px-10 mt-2 text-md  md:text-2xl ">
                <li><a href="/" className="hover:text-blue-500">Home</a></li>
                <li><a href="/products" className="hover:text-blue-500">Products</a></li>
                <li><a href="/cart" className="hover:text-blue-500">Cart</a></li>
                <li><a href="/checkout" className="hover:text-blue-500">Checkout</a></li>
            </ul>
        </nav>
        </>
  )
}

export default Navbar