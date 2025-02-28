import React from "react";
import "./App.css";
import Teaching from "./components/Teaching";
import Header from "./components/Header";
import Webinars from "./Pages/Webinars";
import AboutUs from "./Pages/AboutUs";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="frame-root">
      <div className="frame-content"></div>
      <div className="frame-content">
        <div className="bg-[#fff] backdrop-blur-md w-full h-full">
          <div>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Teaching />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
