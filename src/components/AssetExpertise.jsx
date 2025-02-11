"use client";

import React from "react";

const expertise = [
  {
    title: "Workplace Interiors",
    description:
      "Transforming workspaces into dynamic, functional, and inspiring environments. We specialize in creating interiors that enhance productivity and reflect your brand identity.",
    image: "/service/service5.jpeg",
  },
  {
    title: "Retail & Hospitality",
    description:
      "Crafting unforgettable retail and hospitality experiences with designs that captivate customers and elevate your brand presence.",
    image: "/service/service6.jpg",
  },
  {
    title: "Auditorium Interiors",
    description:
      "Designing state-of-the-art auditoriums with acoustics, visibility, and comfort in mind. Our interiors ensure every event is a memorable experience.",
    image: "/service/service7.jpg",
  },
  {
    title: "Institutional Interiors",
    description:
      "Creating well-organized, efficient, and aesthetically pleasing interiors for educational and institutional spaces, tailored to meet the specific needs of students and staff.",
    image: "/service/service3.jpg",
  },
  {
    title: "Clinical Laboratories",
    description:
      "Designing high-performance, compliant, and safe clinical laboratories with an emphasis on functionality and innovation.",
    image: "/service/service1.png",
  },
  {
    title: "Medical Hospitals",
    description:
      "Building modern, patient-centric hospital interiors that prioritize safety, comfort, and efficient healthcare delivery.",
    image: "/service/service2.png",
  },
];

const AssetExpertise = () => {
  return (
    <section className="bg-white py-16 mt-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-sans font-thin text-center text-gray-800 mb-12">
          Asset Class Expertise
        </h2>

        <div className="space-y-16">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[500px] flex items-center justify-center"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Overlay Background for Readability */}
              <div className="absolute inset-0 bg-black opacity-5"></div>

              {/* Floating Text Box */}
              <div
                className={`relative bg-[#fcf9f8]  p-8 md:px-10 md:py-10  max-w-xl ${
                  index % 2 === 0 ? "ml-auto " : "mr-auto "
                }`}
              >
                 <h3 className="text-3xl font-sans font-thin text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xl font-sans font-thin text-justify ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetExpertise;
