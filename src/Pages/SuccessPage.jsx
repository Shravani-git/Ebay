import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft, Home } from "lucide-react";

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 text-center">
        <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-500 mb-6">
          Thank you for your purchase. Your payment has been processed
          successfully.
        </p>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-500 mb-2">
            You should receive a confirmation email shortly.
          </p>
          <p className="text-sm text-gray-500">
            Order details and tracking information will be sent to your email.
          </p>
        </div>
        <div className="max-w-md mx-auto mt-6 bg-white rounded-2xl p-6 border border-gray-100 my-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>

          {/* Order Number */}
          <div className="flex items-center justify-between py-2 border-b border-gray-200 ">
            <span className="text-gray-500">Order Number</span>
            <span className="font-medium text-gray-700">ORD-2024-001523</span>
          </div>

          {/* Total Amount */}
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-500">Total Amount</span>
            <span className="text-lg font-bold text-green-600">$315.24</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/products"
            className="flex items-center justify-center gap-2 w-full sm:w-1/2 border border-gray-300 text-gray-700 rounded-md py-2 hover:bg-gray-50 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full sm:w-1/2 bg-gray-800 text-white rounded-md py-2 hover:bg-gray-700 transition"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
