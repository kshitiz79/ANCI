"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close the menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-[#7c0c2b] shadow sticky top-0 z-50 py-2">
      <div className="max-w-[1340px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-[56px] w-[150px] object-contain"
              style={{ maxWidth: "150px", maxHeight: "56px" }}
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-montserrat font-normal text-white mr-7">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/about-page" className="hover:text-blue-500 transition">
            About Us
          </Link>
          <Link href="/project-page" className="hover:text-blue-500 transition">
            Projects
          </Link>
          <Link href="/service-page" className="hover:text-blue-500 transition">
            Services
          </Link>
          <Link href="/blog-page" className="hover:text-blue-500 transition">
            Blogs
          </Link>
          <Link href="/contact-page" className="hover:text-blue-500 transition">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none mr-5">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#7c0c2b] text-white p-4 absolute top-14 left-0 w-full shadow-lg">
            <ul className="space-y-4 text-sm font-sans font-extralight">
              <li>
                <Link href="/" className="hover:text-blue-500 transition block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-page" className="hover:text-blue-500 transition block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/project-page" className="hover:text-blue-500 transition block">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/service-page" className="hover:text-blue-500 transition block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog-page" className="hover:text-blue-500 transition block">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact-page" className="hover:text-blue-500 transition block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}