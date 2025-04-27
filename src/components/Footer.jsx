"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Bar with ISO Certifications */}
     


<div className="bg-[#fbf9f8] py-4">

<div className="flex  items-center justify-center  space-x-6 lg:ml-2 ">
                <a
                  href="https://www.facebook.com/www.anci.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 text-[#7c0c2b] transition"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/ancifitouts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 text-[#7c0c2b] transition"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 text-[#7c0c2b] transition"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/anci0909/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 text-[#7c0c2b] transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div> 

</div>



      {/* Main Footer Content */}
      <div className="py-5 bg-[#7c0c2b]">
        <div className="max-w-7xl mx-auto ">
          <div className="  gap-10  items-center">
            {/* Left: Logo & Social Media */}
            <div className=" items-center md:items-start flex justify-between flex-col md:flex-row text-xs md:text-lg gap-2">


            <div className="text-center md:text-left ">

<h1>Mumbai | Pune | Bangalore | Hyderabad | Gurgaon | Delhi NCR
   </h1>
</div>



<h1>&copy;  A.N.C.I 2025</h1> 













              {/* */}
            </div>

         
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
     
    </footer>
  );
};

export default Footer;
