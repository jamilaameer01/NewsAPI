import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-gray-800 text-white py-6 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center ">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm">
                © 2024 Your Company. All rights reserved.
              </p>
            </div>

            <div className="flex justify-center space-x-6 mb-4 md:mb-0">
              <Link className="text-sm hover:text-gray-400">About Us</Link>
              <Link className="text-sm hover:text-gray-400">
                Privacy Policy
              </Link>
              <Link className="text-sm hover:text-gray-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
