"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Bar with ISO Certifications */}
     

      {/* Main Footer Content */}
      <div className="py-10 bg-[#7c0c2b]">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Logo & Social Media */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/flogo.png"
                alt="ANCI Fitouts Logo"
                className="w-40 mb-6"
              />
              <div className="flex space-x-6 lg:ml-2 ">
                <a
                  href="https://www.facebook.com/www.anci.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/ancifitouts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/anci0909/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Address & Contact */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="font-sans font-thin text-2xl mb-2">Contact Address</h3>
              <p className="text-center md:text-right font-sans font-thin text-sm leading-relaxed">
                South Block – 504 <br />
                Sacred World, Wanowrie <br />
                Pune 111045
              </p>
              <a
                href="tel:9604434846"
                className="flex items-center mt-3 text-white hover:underline"
              >
                <span className="mr-2 text-lg">📞</span> 96044 34846
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto font-sans flex flex-col items-center space-y-2 text-sm md:flex-row md:justify-between md:space-y-0 ">
          <p className="text-center font-sans md:text-left">
            &copy; {new Date().getFullYear()} ANCI FITOUTS LLP. All rights
            reserved.
          </p>
          <p className="text-center md:text-right font-sans">
            Powered by{" "}
            <a
              href="https://rbshstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-blue-500 hover:underline"
            >
              RBSH Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
