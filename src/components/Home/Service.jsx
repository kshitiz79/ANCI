"use client";

import React from "react";
import { FaDraftingCompass, FaTools, FaBuilding, FaRecycle, FaRulerCombined } from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      icon: <FaDraftingCompass className="text-red-900 text-4xl mb-4" />,
      title: "Design & Build",
      description: "End-to-end design and construction solutions for all kinds of spaces.",
    },
    {
      icon: <FaTools className="text-red-900 text-4xl mb-4" />,
      title: "General Contracting",
      description: "Expert collaboration with designers to deliver vibrant workspaces.",
    },
    {
      icon: <FaBuilding className="text-red-900 text-4xl mb-4" />,
      title: "Civil & Interiors",
      description: "Seamless integration of engineering, design, and project management.",
    },
    {
      icon: <FaRecycle className="text-red-900 text-4xl mb-4" />,
      title: "Office Refurbishment",
      description: "Transforming existing spaces with minimal disruption and optimal results.",
    },
    {
      icon: <FaRulerCombined className="text-red-900 text-4xl mb-4" />,
      title: "Space Optimization",
      description: "Efficiently maximizing space with innovative solutions.",
    },
  ];

  // Duplicate services to ensure seamless scrolling
  const repeatedServices = [...services, ...services];

  return (
    <section className="bg-gray-50 py-12 overflow-hidden font-sans font-thin">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl text-gray-800">
          Comprehensive Solutions for Every Space
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="marquee-container relative overflow-hidden">
        <div className="marquee-content flex space-x-8">
          {repeatedServices.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center min-w-[300px]"
            >
              {service.icon}
              <h3 className="text-xl font-thin text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .marquee-content {
          display: flex;
          will-change: transform;
          animation: marquee 50s linear infinite;
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused; /* Pauses animation on hover */
        }
      `}</style>
    </section>
  );
};

export default OurServices;
