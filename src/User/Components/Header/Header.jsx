import React, { useState } from "react";
import "../../../style/universalStyle.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-bg text-white">
      <nav className="container mx-auto py-4 px-6">
        <div className="row d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="col-6 col-lg-2">
            <div className="logo">
              <img
                src="logo/logob.png"
                className="w-[15rem] h-[6rem] object-cover"
                alt="Logo"
              />
            </div>
          </div>
          {/* Toggle Button for Small Screens */}
          <div className="col-2 lg:hidden flex justify-end">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Center Navigation Links */}
          <div
            className={` col-lg-5 lg:flex justify-center ${isMenuOpen ? " opacity-100 visible" : "xs:opacity-0 xs:invisible sm:opacity-0 sm:invisible sm:opacity-0 sm:invisible"
              } lg:opacity-100 lg:visible absolute lg:static top-20 left-0 w-full bg-header-bg lg:bg-transparent z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? "backdrop-blur-md bg-opacity-70" : ""
              }`}
          >
            < ul className="flex flex-col items-center w-full justify-center lg:flex-row lg:space-y-0 lg:space-x-6 p-4 lg:p-0 text-center duration-300 ease-in-out">
              <li className="my-2 lg:my-0">
                <a
                  href="#home"
                  className="relative poppins pb-1 text-green-500 after:absolute after:left-0/4 after:w-1/2 after:bottom-0 after:left-0 after:h-[2px] after:bg-green-500 after:content-[''] after:transition-all"
                >
                  Home
                </a>
              </li>
              <li className="my-2 lg:my-0">
                <a
                  href="#about"
                  className="relative poppins pb-1 text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-500 after:content-[''] hover:after:left-0/4 hover:after:w-1/2 after:transition-all after:duration-500 after:ease-out"
                >
                  About
                </a>
              </li>
              <li className="my-2 lg:my-0">
                <a
                  href="#services"
                  className="relative poppins pb-1 text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-500 after:content-[''] hover:after:left-0/4 hover:after:w-1/2 after:transition-all after:duration-500 after:ease-out"
                >
                  Services
                </a>
              </li>
              <li className="my-2 lg:my-0">
                <a
                  href="#testimonials"
                  className="relative poppins pb-1 text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-500 after:content-[''] hover:after:left-0/4 hover:after:w-1/2 after:transition-all after:duration-500 after:ease-out"
                >
                  Testimonials
                </a>
              </li>
              <li className="my-2 lg:my-0">
                <a
                  href="#casestudies"
                  className="relative poppins pb-1 text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-500 after:content-[''] hover:after:left-0/4 hover:after:w-1/2 after:transition-all after:duration-500 after:ease-out"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>


          {/* Contact Us Button */}
          <div className="col-4 col-lg-2 hidden lg:flex justify-end">
            <a
              href="#contact"
              className="bg-green-gradient bg-green-500 text-white font-semibold tracking-wide px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header >
  );
};

export default Header;
