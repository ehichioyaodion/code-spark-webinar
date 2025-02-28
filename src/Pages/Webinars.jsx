import React from "react";

const Webinars = () => {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] to-light-background-color font-sans antialiased">
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 w-full max-w-lg">
          <h2 className="text-3xl font-medium mb-4 text-center text-gray-800">
            Webinar Registration
          </h2>
          <form className="space-y-6">
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
                placeholder="Your Email Address"
                className="border-b-2 border-gray-300 w-full py-2 px-1 text-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="whatsappNumber"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsappNumber"
                placeholder="Your WhatsApp Number"
                className="border-b-2 border-gray-300 w-full py-2 px-1 text-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 text-white font-medium py-2 px-6 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
                type="submit"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Webinars;
