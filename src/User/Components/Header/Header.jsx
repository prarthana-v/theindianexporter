import React from "react";
import '../../../style/universalStyle.css'

const Header = () => {
  return (
    <header className="header-bg  text-white">
      <nav className="container mx-auto  py-4 px-6">
        <div className="row d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="col-2 ">
            <div className="logo">
              <img src="logo/logob.png" className="w-[15rem] h-[6rem] object-cover  " alt="" />
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="col-5 flex justify-center">
            <ul className="hidden lg:flex space-x-6 mb-0">
              {/* Home Link with 50% underline by default */}
              <li>
                <a
                  href="#home"
                  className="relative poppins pb-1  text-green-500 after:absolute after:left-0/4 after:w-1/2 after:bottom-0 after:left-0 after:h-[2px] after:bg-green-500 after:content-[''] after:transition-all"
                >
                  Home
                </a>
              </li>

              {/* About Link with underline only on hover */}
              <li>
                <a
                  href="#about"
                  className="relative poppins pb-1 text-white  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-500 after:content-[''] hover:after:left-0/4 hover:after:w-1/2 after:transition-all after:duration-500 after:ease-out"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="relative poppins pb-1 text-white  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-500 after:content-[''] hover:after:left-0/4 hover:after:w-1/2 after:transition-all after:duration-500 after:ease-out"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="relative poppins pb-1 text-white  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-500 after:content-[''] hover:after:left-0/4 hover:after:w-1/2 after:transition-all after:duration-500 after:ease-out"
                >
                  Testimonials
                </a>
              </li>

              {/* Services Link with underline only on hover */}
              <li>
                <a
                  href="#casestudies"
                  className="relative poppins pb-1 text-white  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-500 after:content-[''] hover:after:left-0/4 hover:after:w-1/2 after:transition-all after:duration-500 after:ease-out"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Button */}
          <div className="col-2 flex justify-end">
            <a
              href="#contact"
              className="bg-green-gradient hidden lg:inline-block bg-green-500 text-white font-semibold tracking-wide px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
