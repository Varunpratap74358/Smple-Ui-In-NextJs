import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            MyWebsite
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center mb-4 md:mb-0 space-x-4">
          <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </a>
          <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
            About Us
          </a>
          <a href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">
            Services
          </a>
          <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 dark:hover:text-blue-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-600 dark:hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 dark:hover:text-blue-400">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-600 dark:hover:text-blue-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 dark:bg-gray-800 text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
