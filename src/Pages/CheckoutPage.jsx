import React, { useState } from 'react';
import { 
  CreditCard, 
  Shield, 
  Lock, 
  CheckCircle, 
  ArrowLeft, 
  Smartphone, 
  Wallet,
  MapPin,
  User,
  Mail,
  Phone,
  Eye,
  EyeOff,
  Gift,
  Percent
} from 'lucide-react';

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [showCVV, setShowCVV] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [showPromo, setShowPromo] = useState(false);

  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'US'
  });

  const orderSummary = {
    items: [
       {
    name: "Premium Wireless Headphones",
    price: 1990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    quantity: 1,
  },
  {
    name: "Organic Cotton T-Shirt",
    price: 290,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    quantity: 1,
  },
    ],
    subtotal: 2218,
    shipping: 15,
    tax: 22.24,
    discount: 0,
    total: 2240.24
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
    //   redirect to success page or failure page randomly
        if (Math.random() > 0.5) {
            window.location.href = '/success';
        } else {
            window.location.href = '/failure';
        }
    }, 3000);
  };

  const applyPromoCode = () => {
    if (promoCode === 'SAVE20') {
      orderSummary.discount = 55.65;
      orderSummary.total = 259.59;
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-8">

            {/* Billing Information */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Billing Information</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="xyz@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      />
                      <Mail className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="9090909080"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      />
                      <Phone className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      placeholder="Neela society"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                    <MapPin className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Mumbai"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="400001"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    >
                      <option value="IN">India</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Payment Method</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <button
                  onClick={() => setSelectedPayment('card')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    selectedPayment === 'card'
                      ? 'border-purple-500 bg-purple-50 scale-105'
                      : 'border-slate-200 hover:border-slate-300 hover:scale-105'
                  }`}
                >
                  <CreditCard className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <span className="block text-sm font-medium text-slate-900">Credit Card</span>
                </button>
                
                <button
                  onClick={() => setSelectedPayment('paypal')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    selectedPayment === 'paypal'
                      ? 'border-blue-500 bg-purple-50 scale-105'
                      : 'border-slate-200 hover:border-slate-300 hover:scale-105'
                  }`}
                >
                  <Wallet className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <span className="block text-sm font-medium text-slate-900">PayPal</span>
                </button>
                
                <button
                  onClick={() => setSelectedPayment('apple')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    selectedPayment === 'apple'
                      ? 'border-blue-500 bg-purple-50 scale-105'
                      : 'border-slate-200 hover:border-slate-300 hover:scale-105'
                  }`}
                >
                  <Smartphone className="w-8 h-8 text-slate-900 mx-auto mb-3" />
                  <span className="block text-sm font-medium text-slate-900">Apple Pay</span>
                </button>
              </div>

              {/* Credit Card Form */}
              {selectedPayment === 'card' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formatCardNumber(formData.cardNumber)}
                          onChange={(e) => handleInputChange({
                            target: { name: 'cardNumber', value: e.target.value }
                          })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                          maxLength="19"
                        />
                        <CreditCard className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formatExpiryDate(formData.expiryDate)}
                        onChange={(e) => handleInputChange({
                          target: { name: 'expiryDate', value: e.target.value }
                        })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        maxLength="5"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        CVV
                      </label>
                      <div className="relative">
                        <input
                          type={showCVV ? 'text' : 'password'}
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                          maxLength="4"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCVV(!showCVV)}
                          className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                        >
                          {showCVV ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PayPal Option */}
              {selectedPayment === 'paypal' && (
                <div className="text-center py-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    Continue with PayPal
                  </div>
                  <p className="text-slate-600 mt-4">You'll be redirected to PayPal to complete your payment</p>
                </div>
              )}

              {/* Apple Pay Option */}
              {selectedPayment === 'apple' && (
                <div className="text-center py-8">
                  <div className="bg-black text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    Pay with Apple Pay
                  </div>
                  <p className="text-slate-600 mt-4">Use Touch ID or Face ID to complete your purchase</p>
                </div>
              )}
            </div>

            
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Order Items */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {orderSummary.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-xl overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-slate-900">Rs.{item.price}</p>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="border-t border-slate-200 pt-6 mb-6">
                <button
                  onClick={() => setShowPromo(!showPromo)}
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
                >
                  <Gift className="w-5 h-5" />
                  <span className="font-medium">Have a promo code?</span>
                </button>
                
                {showPromo && (
                  <div className="mt-4 flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-3 border-t border-slate-200 pt-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>Rs.{orderSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span>Rs.{orderSummary.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tax</span>
                  <span>Rs.{orderSummary.tax.toFixed(2)}</span>
                </div>
                {orderSummary.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-Rs.{orderSummary.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-bold text-slate-900 pt-3 border-t border-slate-200">
                  <span>Total</span>
                  <span>Rs.{orderSummary.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Security Info */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-6 border border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Secure Payment</h3>
                  <p className="text-sm text-slate-600">Your payment is protected</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>256-bit SSL encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>PCI DSS compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Money-back guarantee</span>
                </div>
              </div>
            </div>

            {/* Complete Payment Button */}
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
                isProcessing
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-400 hover:scale-105 hover:shadow-xl'
              } text-white`}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Lock className="w-5 h-5" />
                  <span>Complete Payment</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;