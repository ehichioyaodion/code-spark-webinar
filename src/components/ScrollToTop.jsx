import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // useLocation hooks into the current URL path string matrix
  const { pathname } = useLocation();

  useEffect(() => {
    // Triggers an instant structural viewport reset to the top of the window coordinates
    window.scrollTo(0, 0);
  }, [pathname]); // Fires every single time the user transitions to a new path page
  return null; // This component works entirely in the background, rendering no UI elements
};

export default ScrollToTop;