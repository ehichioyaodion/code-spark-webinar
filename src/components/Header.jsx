import React, { useState } from "react";
import { Link } from "react-router-dom";
import codespark from "../assets/CODESPARKLOGO.png";

const Header = () => {
  const [mobileBtn, setMobileBtn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setMobileBtn(false);
  };

  return (
    <header className="relative z-50 code-section" id="header">
      <nav className="container mx-auto py-10">
        <div className="flex items-center justify-between relative">
          <div className="pl-6 text-xl font-bold">
            <Link
              to="/"
              className="flex justify-center items-center text-primary lg:text-3xl"
              onClick={handleLinkClick}
            >
              <img className="mr-2 w-12 h-12" src={codespark} />
              <span>CODE SPARK</span>
            </Link>
          </div>
          <button
            onClick={() => setMobileBtn(!mobileBtn)}
            data-collapse-toggle="navigation-menu"
            type="button"
            className="pr-6 text-dark-text lg:hidden"
            aria-controls="navigation-menu"
            aria-expanded="false"
            aria-label="Navigation Menu"
          >
            <i
              className="fa-regular fa-bars feather feather-menu"
              aria-hidden="true"
            ></i>
          </button>
          <div
            id="navigation-menu"
            className={`absolute left-0 top-full mt-4 w-full bg-white pb-4 lg:static lg:mt-0 lg:flex flex-1 lg:items-center lg:justify-between lg:bg-transparent lg:pb-0 ${
              mobileBtn ? "" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:px-6 lg:flex-row flex-1 lg:justify-center lg:items-center lg:space-y-0 lg:space-x-8">
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <Link className="cursor-pointer text-dark-text-color" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <Link
                  to="/webinars"
                  className="cursor-pointer text-dark-text-color"
                >
                  Webinar
                </Link>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <div className="group relative">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="flex w-full cursor-pointer flex-row items-center gap-1 text-dark-text lg:justify-center"
                  >
                    <span>About Us</span>
                    <i
                      className="fa-regular fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div
                    className={`left-0 top-full z-50 ${
                      showMenu ? "block" : "hidden"
                    } w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block`}
                  >
                    <div className="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                      <Link
                        className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                        to="/about-us"
                        onClick={handleLinkClick}
                      >
                        Our Mission &amp; Vision
                      </Link>
                      <Link
                        className="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                        to="/faq"
                        onClick={handleLinkClick}
                      >
                        FAQ
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
                <Link
                  to="/contact"
                  className="text-dark-text"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex flex-col mt-4 lg:flex-row items-center space-y-4 lg:mt-0 lg:space-y-0 lg:space-x-4 text-sm lg:text-base">
              <Link
                to="/webinars"
                className="text-blessing rounded bg-primary-button px-4 py-2 text-primary-button-text-color hover:bg-primary-button-hover"
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
