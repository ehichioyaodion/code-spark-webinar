import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// STABLE ARCHITECTURAL LAYOUT SHELLS
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

// MODERN DYNAMIC LAZY-LOADED CORE VIEWS
const Teaching = lazy(() => import("./components/Teaching"));
const Webinars = lazy(() => import("./Pages/Webinars"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const FAQ = lazy(() => import("./Pages/FAQ"));
const Contact = lazy(() => import("./Pages/Contact"));

// Clean, high-end full-screen loader animation to track loading states
const PageLoader = () => (
  <div className="w-full min-h-[50vh] flex flex-col items-center justify-center gap-4 bg-white select-none">
    <div className="relative w-10 h-10">
      <div className="absolute w-full h-full rounded-full border-4 border-orange-50"></div>
      <div className="absolute w-full h-full rounded-full border-4 border-t-orange-600 animate-spin"></div>
    </div>
    <p className="text-xs tracking-widest uppercase font-bold text-gray-400 animate-pulse">
      Compiling Engine...
    </p>
  </div>
);

const App = () => {
  return (
    <div className="frame-root min-h-screen bg-white font-sans antialiased selection:bg-orange-100 selection:text-orange-900">
      {/* Structural visual background canvas frames */}
      <div className="frame-content"></div>
      
      <div className="frame-content relative flex flex-col min-h-screen">
        <div className="bg-white/90 backdrop-blur-md w-full flex-grow flex flex-col">
          
          <BrowserRouter>
            {/* Structural Scroll Reset Anchor */}
            <ScrollToTop />
            
            {/* Global Sticky Navigation System */}
            <Header />
            
            {/* Wrapper main block to contain compilation chunks cleanly */}
            <main className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Teaching />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </main>
            
            {/* Global Layout Close Footprint */}
            <Footer />
          </BrowserRouter>
          
        </div>
        
        {/* Floating Context Return Node */}
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default App;
