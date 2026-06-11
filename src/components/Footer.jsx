import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-16 code-section animate-fade-in" id="contact">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-gray-100">
          
          {/* BRAND AND DESCRIPTION COLUMN */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block text-2xl font-black tracking-tight select-none">
              <span className="text-orange-600">CODE</span>
              <span className="text-gray-900"> SPARK</span>
            </Link>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm">
              An elite project-driven academy transforming tech enthusiast minds into practical, structural code configuration builders.
            </p>
          </div>

          {/* ACADEMY NAVIGATION NAVIGATION SYSTEM */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 select-none">
              Academy Track
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              <Link to="/webinars" className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200">
                Webinars
              </Link>
              <Link to="/about-us" className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200">
                About Us
              </Link>
              <Link to="/faq" className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200">
                FAQ
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* SOCIAL CHANNELS INTERACTIVE HUB */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 select-none">
              Connect With Us
            </h4>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 text-gray-500 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-100 transition-all duration-200"
                aria-label="Facebook Link"
              >
                <i className="fa-brands fa-facebook-f text-sm" aria-hidden="true"></i>
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 text-gray-500 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-100 transition-all duration-200"
                aria-label="Twitter X Link"
              >
                <i className="fa-brands fa-x-twitter text-sm" aria-hidden="true"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 text-gray-500 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-100 transition-all duration-200"
                aria-label="LinkedIn Link"
              >
                <i className="fa-brands fa-linkedin-in text-sm" aria-hidden="true"></i>
              </a>
            </div>
          </div>

        </div>

        {/* METRICS & COPYRIGHT PLATFORM META */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm font-medium text-gray-500">
            &copy; {currentYear} <span className="text-gray-900 font-semibold">CODE SPARK Academy</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400 font-medium select-none">
            <span className="hover:text-gray-600 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-gray-600 cursor-pointer transition-colors">Privacy Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
