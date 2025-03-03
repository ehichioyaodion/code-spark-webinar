import { useState } from "react";

const Webinars = () => {
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    webinarTitle: "Introduction to React",
    price: 49.99,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const processPayment = async () => {
    setLoading(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setShowModal(false);
    alert("Payment successful! You are now registered for the webinar.");
  };

  return (
    <div className="bg-gradient-to-b from-[#ffffff] to-light-background-color font-sans antialiased">
      <div className="flex justify-center items-center py-10">
        <div className="bg-white p-8 w-full max-w-lg rounded-lg shadow-md">
          <h2 className="text-3xl font-medium mb-4 text-center text-gray-800">
            Webinar Registration
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Your Full Name"
                className="border-b-2 border-gray-300 w-full py-2 px-1 text-gray-700 focus:outline-none focus:border-blue-500"
                required
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="border-b-2 border-gray-300 w-full py-2 px-1 text-gray-700 focus:outline-none focus:border-blue-500"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                className="border-b-2 border-gray-300 w-full py-2 px-1 text-gray-700 focus:outline-none focus:border-blue-500"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="webinarTitle"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Webinar
              </label>
              <select
                id="webinarTitle"
                className="border-b-2 border-gray-300 w-full py-2 px-1 text-gray-700 focus:outline-none focus:border-blue-500"
                value={formData.webinarTitle}
                onChange={handleInputChange}
              >
                <option value="Introduction to React">
                  Introduction to React - $49.99
                </option>
                <option value="Advanced JavaScript">
                  Advanced JavaScript - $69.99
                </option>
                <option value="Web Development Fundamentals">
                  Web Development Fundamentals - $39.99
                </option>
              </select>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Complete Payment
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Order Summary</h4>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span>Webinar:</span>
                  <span>{formData.webinarTitle}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>${formData.price}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Payment Method</h4>
              <div className="flex space-x-4 mb-4">
                <button
                  className={`px-4 py-2 rounded-md ${
                    paymentMethod === "card"
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handlePaymentMethodChange("card")}
                >
                  Credit Card
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${
                    paymentMethod === "paypal"
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handlePaymentMethodChange("paypal")}
                >
                  PayPal
                </button>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-gray-700 text-sm font-medium mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <p className="text-gray-700 mb-2">
                    You will be redirected to PayPal to complete your payment.
                  </p>
                  <img
                    src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                    alt="PayPal"
                    className="mx-auto h-8"
                  />
                </div>
              )}
            </div>

            <button
              onClick={processPayment}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 flex justify-center items-center"
            >
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Complete Payment"
              )}
            </button>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Your payment information is secure and encrypted
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Webinars;
