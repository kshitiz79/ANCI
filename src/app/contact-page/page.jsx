"use client";

import React from "react";
import { FaBuilding, FaRegBuilding, FaLandmark } from "react-icons/fa";

const iconMapping = {
  Pune: <FaBuilding className="text-[#7C0c2B] text-6xl" />, // Office building icon
  Mumbai: <FaBuilding className="text-[#7C0c2B] text-6xl" />, // Office-style building
  Bangalore: <FaBuilding className="text-[#7C0c2B] text-6xl" />, // Landmark office-like icon
  Hyderabad: <FaBuilding className="text-[#7C0c2B] text-6xl" />, // Consistent with other office icons
}
const offices = [
  {
    location: "Pune",
    address: "South Block – 504, Sacred World, Wanowrie, Pune",
    contact: "Contact Diksha: 96044 34846",
  },
  {
    location: "Mumbai",
    address: "Contact Amit for more details",
    contact: "Contact Amit: 98600 75842",
  },
  {
    location: "Bangalore",
    address: "We Work Galaxy, Residency Road, Bangalore",
    contact: "Contact Neha: 96063 52985",
  },
  {
    location: "Hyderabad",
    address: "Contact Kabilan for assistance",
    contact: "Contact Kabilan: 99448 59465",
  },
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formDetails = Object.fromEntries(formData.entries());
    console.log("Form Submitted:", formDetails);

    // Add API call or EmailJS logic here
  };

  return (
    <div className="bg-gray-50 min-h-screen  py-16 px-4 ">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-sans font-thin text-gray-800 mb-4">
          Our Offices
        </h1>
        <p className="text-gray-600 text-sm font-sans font-thin sm:text-lg">
          Reach out to us at any of our locations. We’re always here to help.
        </p>
      </div>

      {/* Layout with Offices and Contact Form */}
      <div className="flex flex-col lg:flex-row gap-8  justify-between max-w-7xl mx-auto">
        {/* Office Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
            >
              <div className="flex justify-center items-center w-full h-32">
                {iconMapping[office.location] || (
                  <FaBuilding className="text-[#7C0c2B] text-6xl" />
                )}
              </div>
              <div className="p-6">
                <h2 className="text-base font-sans  font-thin text-gray-800 mb-2">
                  {office.location}
                </h2>
                <p className="text-gray-600 text-sm">{office.address}</p>
                <p className="text-[#7C0c2B] text-sm font-medium">
                  {office.contact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-2/6 font-sans font-thin">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-sans font-thin text-gray-800 mb-4">
              Contact Us
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-900"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-900"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Company Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your company email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-900"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-900"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Describe your requirements or questions"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-red-900"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-800 text-white font-semibold rounded-lg py-2 hover:bg-red-900 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
