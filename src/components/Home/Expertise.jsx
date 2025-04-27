"use client";

import React, { useState } from "react";
import {
  FaBuilding,
  FaShoppingCart,
  FaMicrophone,
  FaUniversity,
  FaFlask,
  FaHospital,
} from "react-icons/fa";

const expertiseSectors = [
  {
    icon: <FaBuilding className="text-red-900 text-5xl mb-4 transition-all duration-300" />,
    title: "Workplace Interiors",
    description:
      "Creating productive, inspiring environments for today's modern workforce.",
    hoverDetails:
      "We design dynamic corporate office spaces that enhance collaboration, innovation, and efficiency. Whether revamping an office or starting fresh, we ensure your workspace reflects company culture and boosts employee productivity.",
    seoKeyword: "Corporate Office Design",
  },
  {
    icon: <FaShoppingCart className="text-red-900 text-5xl mb-4 transition-all duration-300" />,
    title: "Retail & Hospitality",
    description:
      "Designing unforgettable experiences for customers and guests.",
    hoverDetails:
      "From luxury retail stores to hospitality spaces, our designs captivate and engage. We blend aesthetics and functionality to create spaces that attract foot traffic, enhance brand loyalty, and elevate customer experiences.",
    seoKeyword: "Retail Store Layout & Hospitality Design",
  },
  {
    icon: <FaMicrophone className="text-red-900 text-5xl mb-4 transition-all duration-300" />,
    title: "Auditorium Interiors",
    description:
      "Crafting state-of-the-art auditoriums for memorable events.",
    hoverDetails:
      "Our auditorium designs focus on acoustics, seating arrangements, and visual appeal. Whether for corporate events, conferences, or entertainment, we ensure an immersive, high-impact experience.",
    seoKeyword: "Auditorium Design & Acoustics",
  },
  {
    icon: <FaUniversity className="text-red-900 text-5xl mb-4 transition-all duration-300" />,
    title: "Institutional Interiors",
    description:
      "Tailoring environments for education, research, and institutional excellence.",
    hoverDetails:
      "We specialize in designing inspiring educational and research spaces. Our interiors cater to universities, training centers, and institutions that need spaces optimized for learning, creativity, and innovation.",
    seoKeyword: "Educational & Institutional Interior Design",
  },
  {
    icon: <FaFlask className="text-red-900 text-5xl mb-4 transition-all duration-300" />,
    title: "Clinical Laboratories",
    description:
      "Building high-performance, compliant, and safe laboratories.",
    hoverDetails:
      "Our lab designs meet rigorous industry standards, ensuring safety, efficiency, and compliance. We integrate advanced technology and streamlined workflows to enhance performance and precision.",
    seoKeyword: "Clinical Laboratory Design & Compliance",
  },
  {
    icon: <FaHospital className="text-red-900 text-5xl mb-4 transition-all duration-300" />,
    title: "Medical Hospitals",
    description:
      "Creating modern, patient-centered hospital interiors for healing and comfort.",
    hoverDetails:
      "We prioritize patient comfort, accessibility, and operational efficiency in hospital design. Our spaces are built for healing environments, smooth hospital workflows, and advanced medical care infrastructure.",
    seoKeyword: "Hospital Interior Design & Patient Experience",
  },
];

const OurExpertise = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-12 px-6 font-sans font-thin">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-gray-800 mb-6">Asset Class Expertise</h2>
        <p className="text-lg text-gray-600 mb-8">
          Tailored solutions for diverse industries, built to meet unique challenges and drive lasting results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseSectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {sector.icon}
              <h3 className="text-xl font-thin text-black mb-2">{sector.title}</h3>
              <p className="text-gray-600 text-sm">
                {hoveredIndex === index ? sector.hoverDetails : sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;