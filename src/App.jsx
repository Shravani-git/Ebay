// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Homepage";
import ProductPage from "./Pages/Products";
import CheckoutPage from "./Pages/CheckoutPage";
import CartPage from "./Pages/Cart";
import SuccessPage from "./Pages/SuccessPage";
import FailurePage from "./Pages/FailurePage";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/failure" element={<FailurePage />} />
    </Routes>
    </>
  );
}

export default App;
