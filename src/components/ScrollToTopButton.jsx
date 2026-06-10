import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Triggers visibility the absolute microsecond the user scrolls past the top pixel
      if (window.scrollY > 0) {
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
      className={`fixed bottom-24 right-8 z-50 transition-all duration-300 ease-in-out ${
        isVisible 
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100 animate-bounce" 
          : "opacity-0 translate-y-4 pointer-events-none scale-75"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg focus:outline-none hover:scale-110 active:scale-95 transition-transform duration-150 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
