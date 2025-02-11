"use client";

import React from "react";

const officeLocations = [
  {
    city: "Pune",
    address: "Office 6, Anmol Pride,Baner-Road,Baner, Pune-45",

    phone: "7798931936",
  },
  {
    city: "Pune",
    address: "Office 504,Sacred World,Jagtap Chowk,Pune-40",
 
    phone: "7798931936",
  },
  {
    city: "Mumbai",
    address: "Contact Amit for more details",
 
    phone: "7798931936",
  },
  {
    city: "Bangalore",
    address: "We Work Galaxy, Residency Road, Bangalore",
  
    phone: "7798931936",
  },
];

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl font-sans font-thin text-gray-800 text-center mb-8">
          Let’s Bring Your Vision to Life
        </h2>

        <div className="grid gap-8 lg:grid-cols-3 font-sans font-thin">
          {/* Column 1: Image */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/project1.jpeg" // Replace with your image URL
              alt="Contact Us"
              className="w-full h-64 sm:h-full object-cover"
            />
          </div>

          {/* Column 2: Cards 1 and 2 */}
          <div className="space-y-8">
            {officeLocations.slice(0, 2).map((location, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center"
              >
                <h3 className="text-lg font-normal text-gray-700">{location.city}</h3>
                <p className="text-gray-600 break-words">{location.address}</p>
                <p className="text-gray-600 mt-2">
                  <span className="font-sans font-thin">{location.contactName}</span> {location.phone}
                </p>
                <div className="mt-4 flex flex-wrap justify-center space-x-4">
                  <a
                    href={`tel:${location.phone}`}
                    className="bg-[#7c0c2b]  text-white px-4 py-2 rounded-md shadow-md hover:bg-red-900 transition"
                  >
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${location.phone.replace(/\s+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7c0c2b]  text-white px-4 py-2 rounded-md shadow-md  transition"
                  >
                    Message
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3: Cards 3 and 4 */}
          <div className="space-y-8">
            {officeLocations.slice(2).map((location, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center"
              >
                <h3 className="text-lg  font-normal text-gray-700">{location.city}</h3>
                <p className="text-gray-600 break-words">{location.address}</p>
                <p className="text-gray-600 mt-2">
                  <span className="font-sans font-thin">{location.contactName}</span> {location.phone}
                </p>
                <div className="mt-4 flex flex-wrap justify-center space-x-4">
                  <a
                    href={`tel:${location.phone}`}
                    className="bg-[#7c0c2b]  text-white px-4 py-2 rounded-md shadow-md hover:bg-red-900 transition"
                  >
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${location.phone.replace(/\s+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7c0c2b]  text-white px-4 py-2 rounded-md shadow-md transition"
                  >
                    Message
                  </a>
                </div>
              </div>
            ))}
          </div>

     

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
