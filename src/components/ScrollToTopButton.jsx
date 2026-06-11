import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Triggers visibility once the user scrolls deep enough into the viewport layout
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div
      className={`fixed bottom-24 right-6 md:right-8 z-50 transition-all duration-300 ease-in-out ${
        isVisible 
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100" 
          : "opacity-0 translate-y-6 pointer-events-none scale-75"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        className="relative p-3.5 rounded-xl bg-orange-600 text-white shadow-xl shadow-orange-600/20 focus:outline-none hover:bg-orange-700 hover:scale-110 active:scale-95 transition-all duration-200 ease-in-out group"
      >
        {/* Subtle decorative pulsing halo effect on hover */}
        <span className="absolute inset-0 rounded-xl bg-orange-500 opacity-0 group-hover:animate-ping group-hover:opacity-20 transition-opacity"></span>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform group-hover:-translate-y-0.5 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
