"use client";

import React from "react";

const isoCertifications = [
  {
    id: 1,
    title: "ISO 9001: 2015",
    description: "Quality Management System",
    image: "/iso1.png", // Replace with actual ISO logo path
  },
  {
    id: 2,
    title: "ISO 14001: 2015",
    description: "Environment Management System",
    image: "/iso2.jpg", // Replace with actual ISO logo path
  },
  {
    id: 3,
    title: "ISO 45001: 2018",
    description: "Occupational Health & Safety Management System",
    image: "/iso3.jpg", // Replace with actual ISO logo path
  },
];

const ISOCertifications = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-sans font-thin text-center text-gray-800 mb-8">
          Our ISO Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isoCertifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-xl font-thin font-sans  text-gray-800">{cert.title}</h3>
              <p className="text-gray-600 mt-2 font-sans font-thin">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ISOCertifications;
