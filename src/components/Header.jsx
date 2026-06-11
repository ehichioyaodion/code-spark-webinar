import React, { useState } from "react";
import { Link } from "react-router-dom";
// Rolled back to target your existing verified PNG file asset structure
import codespark from "../assets/CODESPARKLOGO.png";

const Header = () => {
  const [mobileBtn, setMobileBtn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = () => {
    setMobileBtn(false);
    setShowMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100/80" id="header">
      <nav className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between relative">
          
          {/* LOGO BRANDING SECTION */}
          <div className="text-xl font-bold">
            <Link
              to="/"
              className="flex items-center text-orange-600 text-2xl"
              onClick={handleLinkClick}
            >
              {/* Preserved optimization parameters to keep your Cumulative Layout Shift (CLS) score perfect */}
              <img 
                className="mr-2.5 w-9 h-9 object-contain" 
                src={codespark} 
                alt="CODE SPARK Academy Logo" 
                width="36"
                height="36"
                loading="eager"
                decoding="async"
              />
              <span className="font-black tracking-tight text-orange-600">
                CODE<span className="text-gray-900 font-bold"> SPARK</span>
              </span>
            </Link>
          </div>

          {/* ... keeping the rest of your navigation menu markup exactly the same ... */}
          <button
            onClick={() => setMobileBtn(!mobileBtn)}
            type="button"
            className="p-2 text-gray-600 lg:hidden rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all"
            aria-controls="navigation-menu"
            aria-expanded={mobileBtn}
            aria-label="Toggle Navigation Menu"
          >
            {mobileBtn ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div
            id="navigation-menu"
            className={`absolute left-0 right-0 top-full mt-3 w-full bg-white shadow-xl rounded-2xl border border-gray-100 p-5 z-50 lg:static lg:mt-0 lg:w-auto lg:bg-transparent lg:shadow-none lg:border-none lg:p-0 lg:flex lg:flex-1 lg:items-center lg:justify-between transition-all duration-200 ${
              mobileBtn ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row flex-1 lg:justify-center lg:items-center gap-1 lg:gap-1">
              <li>
                <Link className="block py-2.5 px-4 text-gray-600 hover:text-orange-600 hover:bg-orange-50/50 lg:hover:bg-transparent font-semibold rounded-xl transition duration-150" to="/" onClick={handleLinkClick}>Home</Link>
              </li>
              <li>
                <Link to="/webinars" className="block py-2.5 px-4 text-gray-600 hover:text-orange-600 hover:bg-orange-50/50 lg:hover:bg-transparent font-semibold rounded-xl transition duration-150" onClick={handleLinkClick}>Webinar</Link>
              </li>
              <li className="block lg:relative" onMouseLeave={() => setShowMenu(false)}>
                <button onClick={() => setShowMenu(!showMenu)} onMouseEnter={() => setShowMenu(true)} className="flex w-full items-center justify-between lg:justify-center py-2.5 px-4 text-gray-600 hover:text-orange-600 hover:bg-orange-50/50 lg:hover:bg-transparent font-semibold rounded-xl transition duration-150 group">
                  <span>About Us</span>
                  <svg className={`w-4 h-4 ml-1 transform transition-transform duration-200 text-gray-400 group-hover:text-orange-600 ${showMenu ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div onMouseEnter={() => setShowMenu(true)} className={`${showMenu ? "block" : "hidden"} bg-gray-50/80 rounded-xl p-1.5 mt-1 mb-2 space-y-0.5 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-full lg:w-[220px] lg:bg-white lg:shadow-xl lg:border lg:border-gray-100 lg:p-2 lg:mt-1 lg:mb-0`}>
                  <Link className="block px-4 py-2.5 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50/60 rounded-xl font-semibold transition duration-150" to="/about-us" onClick={handleLinkClick}>Our Mission &amp; Vision</Link>
                  <Link className="block px-4 py-2.5 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50/60 rounded-xl font-semibold transition duration-150" to="/faq" onClick={handleLinkClick}>FAQ</Link>
                </div>
              </li>
              <li>
                <Link to="/contact" className="block py-2.5 px-4 text-gray-600 hover:text-orange-600 hover:bg-orange-50/50 lg:hover:bg-transparent font-semibold rounded-xl transition duration-150" onClick={handleLinkClick}>Contact</Link>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-100 lg:mt-0 lg:pt-0 lg:border-none flex flex-col lg:flex-row items-center">
              <Link to="/webinars" className="w-full lg:w-auto text-center bg-orange-600 text-white rounded-xl px-5 py-2.5 font-bold shadow-sm shadow-orange-600/10 hover:bg-orange-700 active:scale-[0.98] transition-all duration-150 select-none" onClick={handleLinkClick}>Register Now</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
