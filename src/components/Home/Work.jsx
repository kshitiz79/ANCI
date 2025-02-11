"use client";

import React from "react";

const projects = [
  {
    title: "Tech Mahindra",
    area: "50,000 Sqft / 60 days",
    location: "Airoli, Mumbai",
    scope: "Design & Build",
    image: "/project1.jpeg",
  },
  {
    title: "Conneqt",
    area: "50,000 Sqft / 60 days",
    location: "Pune",
    scope: "Design & Build",
    image: "/project2.jpg",
  },
  {
    title: "EFC Business Center",
    area: "50,000 Sqft / 60 days",
    location: "Marigold, Pune",
    scope: "Design & Build",
    image: "/project3.jpg",
  },
  {
    title: "EFC Business Centre",
    area: "50,000 Sqft / 60 days",
    location: "Marigold, Pune",
    scope: "Design & Build",
    image: "/project4.png",
  },
  {
    title: "JSW Green Mobility",
 
    scope: "Design & Build",
    image: "/projecr5.png",
  },
  {
    title: "Raipur Hospital",

    location: "Raipur",
    scope: "Design & Build",
    image: "/RaipurHospital/raipur4.jpeg",
  },
];


const OurWorks = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-thin font-sans text-gray-800 text-center mb-8">
          Our Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white shadow-md rounded-lg group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-lg font-normal text-white uppercase">{project.title}</h3>
                <p className="text-sm text-gray-200">{project.area}</p>
                <p className="text-sm text-gray-200">{project.location}</p>
                <p className="text-sm text-gray-200">{project.scope}</p>
                
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
        <a
  href="/project-page"
  className="bg-[#7c0c2b] text-white px-6 py-3 rounded-lg hover:bg-red-900 transition inline-block"
>
  View More Projects
</a>

        </div>
      </div>
    </section>
  );
};

export default OurWorks;
