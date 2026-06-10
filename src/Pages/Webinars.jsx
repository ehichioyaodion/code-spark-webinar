import { useState, useEffect } from "react";
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
      payment_options: geoBilling.paymentOptions || 'card,mobilemoney,ussd,banktransfer,account,googlepay,applepay,qr', // Dynamically loaded channel string
      customer: {
        email: formData.email.trim(),
        phone_number: completeInternationalPhone,
        name: formData.fullName.trim(),
      },
      customizations: {
        title: formData.webinarTitle,
        description: 'Registration fee for access link extraction',
        logo: {codespark},
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

      // Automatically omit leading 0 if keyed in by instinct (except for special mappings)
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

    // 1. Full Name Validation
    if (!formData.fullName.trim()) {
      templateErrors.fullName = "Please enter your full name.";
      validationFailure = true;
    } else if (formData.fullName.trim().length < 3) {
      templateErrors.fullName = "Full name must be at least 3 characters long.";
      validationFailure = true;
    }

    // 2. Email Address Validation
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

    // 3. Phone Number Structural Validation
    if (!plainCleanDigits) {
      templateErrors.phone = "Please enter your phone number.";
      validationFailure = true;
    } else if (!activeConfig.pattern.test(plainCleanDigits)) {
      templateErrors.phone = `This phone number structure does not match a valid network provider in ${activeConfig.countryName}. Please check for errors.`;
      validationFailure = true;
    }

    if (validationFailure) {
      setErrors(templateErrors);
      return;
    }

    setShowModal(true);
  };

  return (
    <div className="bg-gradient-to-b from-[#ffffff] to-light-background-color font-sans antialiased">
      <div className="flex justify-center items-center py-10">
        <div className="bg-white p-8 w-full max-w-lg rounded-lg shadow-md">
          <h2 className="text-3xl font-medium mb-4 text-center text-gray-800">
            Webinar Registration
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            
            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
              <input type="text" id="fullName" placeholder="Your Full Name" className={`border-b-2 w-full py-2 px-1 text-gray-700 focus:outline-none transition duration-200 ${errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}`} required value={formData.fullName} onChange={handleInputChange} />
              {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
              <input type="email" id="email" placeholder="your.email@example.com" className={`border-b-2 w-full py-2 px-1 text-gray-700 focus:outline-none transition duration-200 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}`} required value={formData.email} onChange={handleInputChange} />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
            </div>

            {/* Location Selector */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Where will you be watching from?
                </label>
              </div>
              <div className="relative">
                <select 
                  className="appearance-none bg-white border border-gray-300 text-gray-800 font-medium text-sm rounded-lg block w-full pl-3 pr-10 py-2.5 shadow-sm transition duration-200 ease-in-out cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedCountryKey} 
                  onChange={handleCountrySelectionChange}
                >
                  {Object.entries(currencyMapping).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value.countryName} ({value.currency} — {value.amount.toLocaleString()})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Custom Prefix Locked Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
              <div className="flex items-center w-full border-b-2 transition duration-200 focus-within:border-blue-500 border-gray-300">
                <span className="text-gray-400 font-medium text-base pr-2 select-none py-2 px-1 border-r border-gray-200 bg-gray-50/50 rounded-t-sm">
                  {geoBilling.dialCode}
                </span>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder={geoBilling.phonePlaceholder}
                  className="w-full py-2 pl-3 pr-1 text-gray-700 focus:outline-none tracking-widest font-medium bg-transparent" 
                  required 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium leading-relaxed">{errors.phone}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-300 shadow-md font-semibold tracking-wide"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Payment Confirmation Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Complete Payment</h3>
              <button onClick={() => { if (window.history.state?.modalOpen) window.history.back(); setShowModal(false); }} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Order Summary</h4>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span className="font-medium mr-2">Webinar:</span>
                  <span className="text-right text-sm text-gray-600">{formData.webinarTitle}</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                  <span>Total Due:</span>
                  <span className="text-blue-600">{geoBilling.label}</span>
                </div>
              </div>
            </div>

            <button
              onClick={triggerFlutterwaveCheckout}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 flex justify-center items-center font-semibold tracking-wide shadow"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Webinars;
