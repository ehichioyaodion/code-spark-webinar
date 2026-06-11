import React, { useState, useEffect } from "react";
import codespark from "../assets/CODESPARKLOGO.png";

// Master configuration matrix with Dialing Codes, Max Formatted Lengths, Patterns, and Tailored Payment Options
const currencyMapping = {
  NG: { 
    countryName: "Nigeria", 
    currency: 'NGN', 
    amount: 10000, 
    label: '₦10,000 NGN', 
    dialCode: "+234",
    exactDigits: 10, 
    phonePlaceholder: "803 123 4567",
    pattern: /^(70|80|81|82|90|91|71)\d{8}$/,
    paymentOptions: 'card,banktransfer,ussd,account,qr',
    format: (val) => val.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3').trim()
  }, 
  GH: { 
    countryName: "Ghana", 
    currency: 'GHS', 
    amount: 100, 
    label: 'GH₵100 GHS', 
    dialCode: "+233",
    exactDigits: 9, 
    phonePlaceholder: "24 123 4567",
    pattern: /^(23|24|54|55|27|57|20|50|26|56)\d{7}$/,
    paymentOptions: 'mobilemoney,card',
    format: (val) => val.replace(/(\d{2})(\d{3})(\d{4})/, '$1 $2 $3').trim()
  },    
  KE: { 
    countryName: "Kenya", 
    currency: 'KES', 
    amount: 1300, 
    label: 'KSh1,300 KES', 
    dialCode: "+254",
    exactDigits: 9, 
    phonePlaceholder: "712 345 678",
    pattern: /^(11|70|71|72|74|79|75|76|77|78)\d{7}$/,
    paymentOptions: 'mpesa,mobilemoney,card',
    format: (val) => val.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3').trim()
  },  
  ZA: { 
    countryName: "South Africa", 
    currency: 'ZAR', 
    amount: 180, 
    label: 'R180 ZAR', 
    dialCode: "+27",
    exactDigits: 9, 
    phonePlaceholder: "82 123 4567",
    pattern: /^(6|7|8)\d{8}$/,
    paymentOptions: 'card,banktransfer,qr',
    format: (val) => val.replace(/(\d{2})(\d{3})(\d{4})/, '$1 $2 $3').trim()
  },      
  UG: { 
    countryName: "Uganda", 
    currency: 'UGX', 
    amount: 37000, 
    label: 'USh37,000 UGX', 
    dialCode: "+256",
    exactDigits: 9, 
    phonePlaceholder: "772 123 456",
    pattern: /^(7\d)\d{7}$/,
    paymentOptions: 'mobilemoney,card',
    format: (val) => val.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3').trim()
  },
  TZ: { 
    countryName: "Tanzania", 
    currency: 'TZS', 
    amount: 26000, 
    label: 'TSh26,000 TZS', 
    dialCode: "+255",
    exactDigits: 9, 
    phonePlaceholder: "712 345 678",
    pattern: /^(6|7)\d{8}$/,
    paymentOptions: 'mobilemoney,card',
    format: (val) => val.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3').trim()
  },
  RW: { 
    countryName: "Rwanda", 
    currency: 'RWF', 
    amount: 13000, 
    label: 'RF13,000 RWF', 
    dialCode: "+250",
    exactDigits: 9, 
    phonePlaceholder: "788 123 456",
    pattern: /^(8|9|2|3)\d{8}$/,
    paymentOptions: 'mobilemoney,card',
    format: (val) => val.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3').trim()
  },
  SN: { 
    countryName: "Senegal (XOF)", 
    currency: 'XOF', 
    amount: 6000, 
    label: '6,000 XOF', 
    dialCode: "+221",
    exactDigits: 9, 
    phonePlaceholder: "77 123 45 67",
    pattern: /^(0|6|7|8)\d{8}$/,
    paymentOptions: 'mobilemoney,card',
    format: (val) => val.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4').trim()
  },
  CI: { 
    countryName: "Côte d'Ivoire (XOF)", 
    currency: 'XOF', 
    amount: 6000, 
    label: '6,000 XOF', 
    dialCode: "+225",
    exactDigits: 10, 
    phonePlaceholder: "07 0123 4567",
    pattern: /^(1|5|7)\d{9}$/,
    paymentOptions: 'mobilemoney,card',
    format: (val) => val.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2 $3').trim()
  },
  CM: { 
    countryName: "Cameroon (XAF)", 
    currency: 'XAF', 
    amount: 6000, 
    label: '6,000 XAF', 
    dialCode: "+237",
    exactDigits: 9, 
    phonePlaceholder: "677 123 456",
    pattern: /^(2|5|6|7|8|9)\d{8}$/,
    paymentOptions: 'mobilemoney,card',
    format: (val) => val.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3').trim()
  },
  US: { 
    countryName: "United States (USD)", 
    currency: 'USD', 
    amount: 10, 
    label: '$10.00 USD', 
    dialCode: "+1",
    exactDigits: 10, 
    phonePlaceholder: "202 555 0143",
    pattern: /^[2-9]\d{9}$/,
    paymentOptions: 'card,googlepay,applepay',
    format: (val) => val.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3').trim()
  },
  GB: { 
    countryName: "United Kingdom", 
    currency: 'GBP', 
    amount: 8, 
    label: '£8.00 GBP', 
    dialCode: "+44",
    exactDigits: 10, 
    phonePlaceholder: "7123 456 789",
    pattern: /^7\d{9}$/,
    paymentOptions: 'card,applepay,googlepay',
    format: (val) => val.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3').trim()
  },       
  DEFAULT: { 
    countryName: "Other International", 
    currency: 'USD', 
    amount: 10, 
    label: '$10.00 USD', 
    dialCode: "+",
    exactDigits: 15, 
    phonePlaceholder: "Enter mobile number",
    pattern: /^\d{7,15}$/,
    paymentOptions: 'card,googlepay',
    format: (val) => val
  } 
};

const Webinars = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountryKey, setSelectedCountryKey] = useState("GH");
  const [geoBilling, setGeoBilling] = useState(currencyMapping.GH);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "", 
    webinarTitle: "Apps, Softwares & Web Development Fundamentals",
  });

  const [errors, setErrors] = useState({ fullName: "", email: "", phone: "" });

  useEffect(() => {
    const handlePopState = () => { if (showModal) setShowModal(false); };
    if (showModal) {
      window.history.pushState({ modalOpen: true }, "");
      window.addEventListener("popstate", handlePopState);
    }
    return () => window.removeEventListener("popstate", handlePopState);
  }, [showModal]);

  const handleCountrySelectionChange = (e) => {
    const targetKey = e.target.value;
    setSelectedCountryKey(targetKey);
    setGeoBilling(currencyMapping[targetKey] || currencyMapping.DEFAULT);
    
    setFormData(prev => ({ ...prev, phone: "" }));
    setErrors(prev => ({ ...prev, phone: "" }));
  };

  const triggerFlutterwaveCheckout = () => {
    const cleanPhoneDigits = formData.phone.replace(/\s/g, "");
    const completeInternationalPhone = `${geoBilling.dialCode}${cleanPhoneDigits}`;

    const checkoutConfig = {
      public_key: 'FLWPUBK_TEST-a2c03609b8f702752c8cab5a24a39b0b-X',
      tx_ref: `webinar-${Date.now()}`,
      amount: geoBilling.amount,
      currency: geoBilling.currency,
      payment_options: geoBilling.paymentOptions || 'card,mobilemoney,ussd,banktransfer,account,googlepay,applepay,qr',
      customer: {
        email: formData.email.trim(),
        phone_number: completeInternationalPhone,
        name: formData.fullName.trim(),
      },
      customizations: {
        title: formData.webinarTitle,
        description: 'Registration fee for access link extraction',
        logo: codespark,
      },
      callback: (response) => {
        if (window.history.state?.modalOpen) window.history.back();
        setShowModal(false);
        if (response.status === "successful") {
          alert("Payment successful! You are now registered for the webinar.");
        } else {
          alert("Payment processing was not completed successfully.");
        }
      },
      onclose: () => console.log("Overlay closed.")
    };

    if (window.FlutterwaveCheckout) {
      window.FlutterwaveCheckout(checkoutConfig);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setErrors(prev => ({ ...prev, [id]: "" }));

    if (id === "phone") {
      let rawDigits = value.replace(/\D/g, "");
      const targetConfig = currencyMapping[selectedCountryKey] || currencyMapping.DEFAULT;

      if (rawDigits.startsWith("0") && targetConfig.exactDigits !== 11 && selectedCountryKey !== "CI") {
        rawDigits = rawDigits.substring(1);
      }

      if (rawDigits.length <= targetConfig.exactDigits) {
        const formattedValue = targetConfig.format(rawDigits);
        setFormData({ ...formData, [id]: formattedValue });
      }
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let templateErrors = { fullName: "", email: "", phone: "" };
    let validationFailure = false;
    const activeConfig = currencyMapping[selectedCountryKey] || currencyMapping.DEFAULT;
    const plainCleanDigits = formData.phone.replace(/\s/g, "");

    if (!formData.fullName.trim()) {
      templateErrors.fullName = "Please enter your full name.";
      validationFailure = true;
    } else if (formData.fullName.trim().length < 3) {
      templateErrors.fullName = "Full name must be at least 3 characters long.";
      validationFailure = true;
    }

    if (!formData.email.trim()) {
      templateErrors.email = "Please enter your email address.";
      validationFailure = true;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email.trim())) {
        templateErrors.email = "Please provide a valid email address.";
        validationFailure = true;
      }
    }

    if (!plainCleanDigits) {
      templateErrors.phone = "Please enter your phone number.";
      validationFailure = true;
    } else if (!activeConfig.pattern.test(plainCleanDigits)) {
      templateErrors.phone = `Valid structural match error for network routing channels inside ${activeConfig.countryName}.`;
      validationFailure = true;
    }

    if (validationFailure) {
      setErrors(templateErrors);
      return;
    }

    setShowModal(true);
  };

  return (
    <div className="bg-gradient-to-b from-[#ffffff] to-light-background-color font-sans antialiased min-height-screen py-16 px-6">
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 md:p-10 w-full max-w-xl rounded-3xl shadow-lg shadow-gray-200/80 border border-gray-100">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium mb-3 select-none">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Live Tech Seat Reservation
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Webinar Registration
            </h2>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            
            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-gray-800 text-sm font-semibold mb-2">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                placeholder="Your Full Name" 
                className={`w-full bg-light-background-color border rounded-xl py-3 px-4 text-gray-800 focus:outline-none transition-all duration-200 ${errors.fullName ? 'border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500'}`} 
                required 
                value={formData.fullName} 
                onChange={handleInputChange} 
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.fullName}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-800 text-sm font-semibold mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="your.email@example.com" 
                className={`w-full bg-light-background-color border rounded-xl py-3 px-4 text-gray-800 focus:outline-none transition-all duration-200 ${errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500'}`} 
                required 
                value={formData.email} 
                onChange={handleInputChange} 
              />
              {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
            </div>

            {/* Location Selector (Excluding DEFAULT option securely) */}
            <div className="bg-orange-50/40 border border-orange-100 rounded-2xl p-4">
              <div className="flex items-center space-x-2 mb-2.5">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <label className="text-xs font-bold uppercase tracking-wider text-orange-800 select-none">
                  Where will you be watching from?
                </label>
              </div>
              <div className="relative">
                <select 
                  className="appearance-none bg-white border border-gray-200 text-gray-800 font-semibold text-sm rounded-xl block w-full pl-4 pr-10 py-3 shadow-sm transition duration-200 ease-in-out cursor-pointer hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  value={selectedCountryKey} 
                  onChange={handleCountrySelectionChange}
                >
                  {Object.entries(currencyMapping)
                    .filter(([key]) => key !== "DEFAULT")
                    .map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.countryName} ({value.currency} {value.amount.toLocaleString()})
                      </option>
                    ))
                  }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Prefix-Locked Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-gray-800 text-sm font-semibold mb-2">Phone Number</label>
              <div className={`flex items-center w-full bg-light-background-color border rounded-xl overflow-hidden transition-all duration-200 focus-within:ring-2 focus-within:ring-orange-500/20 focus-within:border-orange-500 ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}>
                <span className="text-gray-500 font-bold text-base px-4 py-3 border-r border-gray-200 bg-gray-50 select-none">
                  {geoBilling.dialCode}
                </span>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder={geoBilling.phonePlaceholder}
                  className="w-full py-3 px-4 text-gray-800 focus:outline-none tracking-widest font-semibold bg-transparent" 
                  required 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-2 font-medium leading-relaxed">{errors.phone}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 px-4 rounded-xl transition duration-200 shadow-md shadow-orange-600/10 active:scale-[0.99] select-none"
              >
                Proceed to Secure Verification
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Payment Confirmation Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-gray-100 transform transition-all scale-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">Complete Registration</h3>
              <button 
                onClick={() => { if (window.history.state?.modalOpen) window.history.back(); setShowModal(false); }} 
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-3 select-none">Order Summary</h4>
              <div className="bg-light-background-color border border-gray-100 p-5 rounded-2xl space-y-3">
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-xs text-orange-600 uppercase tracking-wider">Academy Track</span>
                  <span className="text-gray-800 font-bold leading-snug">{formData.webinarTitle}</span>
                </div>
                <div className="flex justify-between items-center font-black text-lg border-t border-gray-200/60 pt-4 mt-2">
                  <span className="text-gray-900 text-sm font-bold">Total Due:</span>
                  <span className="text-orange-600 font-black">{geoBilling.label}</span>
                </div>
              </div>
            </div>

            <button
              onClick={triggerFlutterwaveCheckout}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 px-4 rounded-xl transition duration-200 flex justify-center items-center tracking-wide shadow-md shadow-orange-600/10 active:scale-[0.99] select-none"
            >
              Pay Now via Flutterwave
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Webinars;
