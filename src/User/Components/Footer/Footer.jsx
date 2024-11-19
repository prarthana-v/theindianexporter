import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-900 via-black to-green-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-green-500 mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-white hover:text-green-500 transition-all duration-300">Home</a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-green-500 transition-all duration-300">Services</a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-green-500 transition-all duration-300">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-green-500 transition-all duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>

            <h3 className="text-2xl font-bold text-green-500 mb-4">About Us</h3>
            <div>
              <img src="" alt="" />
            </div>
            <p className="text-white opacity-70 mt-3">
              We connect international buyers with trusted Indian manufacturers for a seamless trading experience.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold text-green-500 mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com" className="text-white hover:text-green-500 transition-all duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com" className="text-white hover:text-green-500 transition-all duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.twitter.com" className="text-white hover:text-green-500 transition-all duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/in/piyush-jindal-theindianexporter/" target='_blank' className="text-white hover:text-green-500 transition-all duration-300">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center opacity-50 text-sm">
          <p>&copy; 2024 The Indian Exporter developed by VortexPlay Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
