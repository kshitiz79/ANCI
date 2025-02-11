"use client";

import AssetExpertise from "@/components/AssetExpertise";
import React from "react";

const services = [
  {
    title: "Design & Build",
    description:
      "We offer end-to-end comprehensive services of Design & Build for all kinds of spaces, be it an Office, Industry, or a House! Inclusive of design, project management & execution.",
    image: "/service/service4.jpg",
  },
  {
    title: "General Contracting",
    description:
      "Our in-house experts collaborate with design partners to create vibrant, humanized workspaces, ensuring unbeatable speed, quality, and flexibility.",
      image: "/service/service5.jpeg",
  },
  {
    title: "Contracting",
    description:
      "Our journey started with R.C.C. Contracting, Project Management & then designing further developing into Design & Build Co. We specialize in interior fit-outs for Commercial Projects.",
      image: "/service/service3.jpg",
  },
  {
    title: "Civil & Interiors",
    description:
      "Our Civil and Interiors service seamlessly integrates top-tier engineering, design, and project management to materialize clients’ ideas with exceptional speed and quality.",
      image: "/service/service5.jpeg",
  },
  {
    title: "Office Refurbishment",
    description:
      "Our office refurbishment service expertly transforms existing spaces with minimal disruption, uniting specialists and designers to fulfill client requirements seamlessly.",
      image: "/service/service3.jpg",
  },
];

const ServicesPage = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-sans font-thin text-center text-gray-800 mb-12">
          Our Services
        </h2>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-[480px] flex items-center justify-center"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover w-auto h-full bg-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Overlay Background (optional for better readability) */}
              <div className="absolute inset-0 bg-black opacity-5"></div>

              {/* Floating Text Box */}
              <div
                className={`relative bg-[#fcf9f8]  p-10 md:px-10 md:py-14  max-w-xl ${
                  index % 2 === 0 ? "mr-auto " : "ml-auto "
                }`}
              >
                <h3 className="text-3xl font-sans font-thin text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xl font-sans text-justify font-thin ">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AssetExpertise/>
    </section>


  );
};

export default ServicesPage;
