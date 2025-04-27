"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { FaBuilding } from "react-icons/fa";

const iconMapping = {
  Pune: <FaBuilding className="text-zinc-500 text-6xl" />,
  Mumbai: <FaBuilding className="text-zinc-500 text-6xl" />,
  Bangalore: <FaBuilding className="text-zinc-500 text-6xl" />,
  Hyderabad: <FaBuilding className="text-zinc-500 text-6xl" />,
};

const offices = [
  {
    location: "Pune",
    address: "Office 6, Anmol Pride, Baner-Road, Baner, Pune - 45",
  },
  {
    location: "Pune",
    address: "Office 504, Sacred World, Jagtap Chowk, Pune - 40",
  },
  {
    location: "Mumbai",
    address: "",
  },
  {
    location: "Hydrabad",
    address: "",
  },
];

const contactNumber = "7798931936";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your EmailJS details
    const serviceID = "service_ei9yfzf";
    const templateID = "template_ggvk4vf";
    const publicKey = "uE3OSSvhO9A9hdwQK";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setLoading(false);
          setPopupVisible(true);
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 relative">
      {/* Popup Overlay */}
      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-2xl mb-4">Email Sent!</h2>
            <p className="mb-6">Thank you for reaching out to us. We will get back to you soon.</p>
            <button
              onClick={() => setPopupVisible(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-[#7c0c2b] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
      <div className="flex flex-col lg:flex-row gap-8 justify-between max-w-7xl mx-auto">
        {/* Office Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
            >
              <div className="flex justify-center items-center w-full h-32">
                {iconMapping[office.location] || (
                  <FaBuilding className="text-zinc-500 text-6xl" />
                )}
              </div>
              <div className="p-6">
                <h2 className="text-base font-sans font-thin text-gray-800 mb-2">
                  {office.location}
                </h2>
                <p className="text-gray-600 text-sm">{office.address}</p>
                <p className="text-gray-900 text-sm font-medium mt-1">
                  {contactNumber}
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
            <form ref={form} className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-900"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="from_company"
                  placeholder="Enter your company name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-900"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Company Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your company email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-900"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="from_phone"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-900"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="from_description"
                  placeholder="Describe your requirements or questions"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-red-900"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-400 text-white font-semibold rounded-lg py-2 hover:bg-[#7c0c2b] transition"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



// service_ei9yfzf
// service ID


// template_ggvk4vf templateid


// publick key

// uE3OSSvhO9A9hdwQK