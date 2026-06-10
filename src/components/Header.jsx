import React, { useState } from "react";
import { Link } from "react-router-dom";
import codespark from "../assets/CODESPARKLOGO.png";

const Header = () => {
  const [mobileBtn, setMobileBtn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = () => {
    setMobileBtn(false);
    setShowMenu(false);
  };

  return (
    <header className="relative z-50 bg-white lg:bg-transparent" id="header">
      <nav className="container mx-auto px-4 py-4 lg:py-10">
        <div className="flex items-center justify-between relative">
          
          {/* Logo Branding Section */}
          <div className="text-xl font-bold">
            <Link
              to="/"
              className="flex items-center text-primary lg:text-3xl"
              onClick={handleLinkClick}
            >
              <img className="mr-2 w-10 h-10 lg:w-12 lg:h-12 object-contain" src={codespark} alt="CODESPARK Logo" />
              <span className="tracking-tight">CODE<span className="text-dark-text"> SPARK</span></span>
            </Link>
          </div>

          {/* Native Hamburger Trigger Button */}
          <button
            onClick={() => setMobileBtn(!mobileBtn)}
            type="button"
            className="p-2 text-gray-700 lg:hidden rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navigation-menu"
            aria-expanded={mobileBtn}
            aria-label="Toggle Navigation Menu"
          >
            {mobileBtn ? (
              // Close Icon when Mobile Menu is Active
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Menu Icon when Mobile Menu is Inactive
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Main Navigation Matrix Container */}
          <div
            id="navigation-menu"
            className={`absolute left-0 right-0 top-full mt-2 w-full bg-white shadow-xl rounded-b-xl border border-gray-100 p-6 z-50 lg:static lg:mt-0 lg:w-auto lg:bg-transparent lg:shadow-none lg:border-none lg:p-0 lg:flex lg:flex-1 lg:items-center lg:justify-between ${
              mobileBtn ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row flex-1 lg:justify-center lg:items-center gap-1 lg:gap-8">
              <li className="border-b border-gray-100 lg:border-none">
                <Link 
                  className="block py-3 px-2 text-gray-700 hover:text-blue-600 font-medium transition duration-150" 
                  to="/"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li className="border-b border-gray-100 lg:border-none">
                <Link
                  to="/webinars"
                  className="block py-3 px-2 text-gray-700 hover:text-blue-600 font-medium transition duration-150"
                  onClick={handleLinkClick}
                >
                  Webinar
                </Link>
              </li>
              
              {/* Responsive Dropdown Parent Element */}
              <li className="border-b border-gray-100 lg:border-none">
                <div className="w-full lg:relative group">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="flex w-full items-center justify-between lg:justify-center py-3 px-2 text-gray-700 hover:text-blue-600 font-medium transition duration-150"
                  >
                    <span>About Us</span>
                    <svg 
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showMenu ? "rotate-180" : ""}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Container Sub-Matrix Routing Blocks */}
                  <div
                    className={`${
                      showMenu ? "block" : "hidden"
                    } bg-gray-50 rounded-lg p-2 mt-1 mb-2 space-y-1 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-full lg:w-[240px] lg:bg-white lg:shadow-lg lg:border lg:border-gray-100 lg:p-1.5 lg:mt-2 lg:mb-0 lg:group-hover:block`}
                  >
                    <Link
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md font-medium transition duration-150"
                      to="/about-us"
                      onClick={handleLinkClick}
                    >
                      Our Mission &amp; Vision
                    </Link>
                    <Link
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md font-medium transition duration-150"
                      to="/faq"
                      onClick={handleLinkClick}
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block py-3 px-2 text-gray-700 hover:text-blue-600 font-medium transition duration-150"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Action Call Button Section Area */}
            <div className="mt-4 pt-4 border-t border-gray-100 lg:mt-0 lg:pt-0 lg:border-none flex flex-col lg:flex-row items-center">
              <Link
                to="/webinars"
                className="w-full lg:w-auto text-center bg-blue-600 text-white rounded-md px-5 py-2.5 font-medium shadow-sm hover:bg-blue-700 active:scale-[0.98] transition dynamic-all duration-150"
                onClick={handleLinkClick}
              >
                Register Now
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
