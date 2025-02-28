import React from "react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Footer = () => {
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <ScrollToTopButton />
      <footer className="py-16 code-section" id="contact">
        <div className="container mx-auto px-4 text-center">
          <div className="m-8 text-xl font-bold">
            <a href="/" className="text-3xl text-primary">
              <span>CODE</span>
              <span className="text-dark-text"> SPARK</span>
            </a>
          </div>
          <div
            onClick={ScrollToTop}
            className=" mb-8 flex flex-col justify-center sm:flex-row"
          >
            <Link
              to={"/webinars"}
              className="mx-8 text-lg text-gray-text hover:text-primary"
            >
              Webinar
            </Link>
            <Link
              to={"/about-us"}
              className="mx-8 text-lg text-gray-text hover:text-primary"
            >
              About Us
            </Link>
            <Link
              to={"/faq"}
              className="mx-8 text-lg text-gray-text hover:text-primary"
            >
              FAQ
            </Link>
            <Link
              to={"/contact"}
              className="mx-8 text-lg text-gray-text hover:text-primary"
            >
              Contact
            </Link>
          </div>
          <div className="mb-8">
            <a
              href="/"
              className="mx-2 text-lg text-gray-text hover:text-primary"
            >
              <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a
              href="/"
              className="mx-2 text-lg text-gray-text hover:text-primary"
            >
              <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="/"
              className="mx-2 text-lg text-gray-text hover:text-primary"
            >
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>
          </div>
          <p className="text-lg text-gray-700">
            © {new Date().getFullYear()} CODE SPARK All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
