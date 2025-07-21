import React from "react";
import { Link } from "react-router-dom";
import { XCircle, ArrowLeft, RefreshCw } from "lucide-react";

const FailurePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 text-center">
        {/* Failure Icon */}
        <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <XCircle className="w-8 h-8 text-red-600" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Payment Failed</h2>
        <p className="text-gray-500 mb-6">
          We couldn't process your payment. Please try again or use a different payment method.
        </p>

        {/* Reason Tips */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-gray-500 mb-2 font-medium">Common reasons for payment failure:</p>
          <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
            <li>Insufficient funds</li>
            <li>Incorrect card details</li>
            <li>Card expired or blocked</li>
            <li>Network connection issues</li>
          </ul>
        </div>

        {/* Order Info (static for now) */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
          <div className="flex items-center justify-between py-1">
            <span className="text-gray-500">Order Number</span>
            <span className="font-medium text-gray-700">ORD-2024-001523</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-gray-500">Total Amount</span>
            <span className="text-base font-bold text-red-600">$315.24</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/products"
            className="flex items-center justify-center gap-2 w-full sm:w-1/2 border border-gray-300 text-gray-700 rounded-md py-2 hover:bg-gray-50 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 w-full sm:w-1/2 bg-red-600 text-white rounded-md py-2 hover:bg-red-700 transition"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailurePage;
