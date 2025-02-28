import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scroll position is greater than a certain value (e.g., 300px)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
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
      behavior: "smooth", // For smooth scrolling animation
    });
  };

  return (
    <div
      className="fixed bottom-24 animate-bounce right-8 z-50 transition-opacity duration-500" // Position and animation
      style={{ opacity: isVisible ? 1 : 0 }} // Conditional visibility
    >
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full bg-blue-500 hover:bg-blue-700 text-white shadow-sm focus:outline-none transition:transform duration-200 ease-in-out" // Button styles and animation
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
          />{" "}
          {/* Up arrow */}
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
