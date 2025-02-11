"use client";

import React from "react";

const projects = [


  {
    title: "JWS Energy Ltd",
   
    scope: "Design & Build",
    image: "/JSWEnergyLtd/JWSE.jpeg",
  },{
    title: "JWS Mobility Ltd",
    
    image: "/JSWMobilityLtd/JWSMOBILE2.png",
  },{
    title: "AIL",
    area: "50,000 Sqft / 60 days",
    location: "Pune",
    scope: "Design & Build",
    image: "/AIL/ali3.jpeg",
  },
  {
    title: "Raipur Hospital",
   
    scope: "Design & Build",
    image: "/RaipurHospital/raipur3.jpeg",
  },








  {
    title: "Marigold",
    area: "50,000 Sqft / 60 days",
    location: "Pune",
    scope: "Design & Build",
    image: "/Project/project1.png",
  },
  {
    title: "Pent House",
    area: "6,000 Sqft / 8 months",
    location: "Pune",
    scope: "Design & Build",
    image: "/Project/project15.jpg",
  },
  {
    title: "Conneqt",
    area: "50,000 Sqft / 60 days",
    location: "Pune",
    scope: "Design & Build",
    image: "/Project/project16.jpg",
  },
  {
    title: "Bungalow",
    area: "4,500 Sqft / 2 years",
    location: "Pune",
    scope: "Turnkey Contracting",
    image: "/Project/project13.jpg",
  },
  {
    title: "EFC Business Centre",
    area: "50,000 Sqft / 60 days",
    location: "Marigold, Pune",
    scope: "Design & Build",
    image: "/Project/project14.jpg",
  },
  {
    title: "Urbanwrk - Probiz",
    area: "50,000 Sqft",
    location: "Pune",
    scope: "Build",
    image: "/Project/project1.png",
  },
  {
    title: "Gayatri Hospital",
    area: "50,000 Sqft",
    location: "Madhya Pradesh",
    scope: "Design & Build",
    image: "/Project/project11.png",
  },
  {
    title: "Brookfield - SEIT",
    area: "21,000 Sqft / 8 months",
    location: "Mumbai",
    scope: "Design & Build",
    image: "/Project/project4.png",
  },
  {
    title: "SKF",

    location: "Pune",
    scope: "Design & Build",
    image: "/Project/project7.png",
  },
  {
    title: "Nidhan Hospital",
    area: "24,000 Sqft",
    location: "Madhya Pradesh",
    scope: "Design & Build",
    image: "/Project/project12.png",
  },
  {
    title: "Urbanwrk",
    area: "10,000 Sqft / 8 months",
    location: "Pune",
    scope: "Design & Build",
    image: "/Project/project3.png",
  },
  {
    title: "Fidesto",
    area: "10,000 Sqft / 8 months",
    location: "Pune",
    scope: "Design & Build",
    image: "/Project/project5.png",
  },
  {
    title: "Kohler",
    area: "Not Available",
    location: "Pune",
    scope: "Design & Build",
    image: "/Project/project8.png",
  },
  {
    title: "AIL Bioequivalence Lab",
    area: "20,000 Sqft",
    location: "Pune",
    scope: "Design & Build",
    image: "/Project/project10.png",
  },
  {
    title: "Tech Mahindra",
    area: "50,000 Sqft / 60 days",
    location: "Airoli, Mumbai",
    scope: "Design & Build",
    image: "/Project/project17.jpeg",
  },
  {
    title: "Tata Conneqt",
    area: "52,000 Sqft",
    location: "Pune",
    scope: "Design & Build",
    image: "/Project/project2.png",
  },
  {
    title: "The Bombay Store",
    area: "2,000 Sqft / 18 days",
    location: "Ishanya Mall, Pune",
    scope: "Turnkey Contractor",
    image: "/about.jpg",
  },
  {
    title: "BMC Office",
    area: "10,000 Sqft",
    location: "Mumbai",
    scope: "Design & Build",
    image: "/Project/project6.png",
  },
  {
    title: "PhonePe Cafeteria",
    area: "Not Available",
    location: "Pune",
    scope: "Design & Build",
    image: "/Project/project9.png",
  },
  {
    title: "Nidan Centre",
    area: "7,500 Sqft",
    location: "Balaghat, MP",
    scope: "Design & Build",
    image: "/Project/project18.jpg",
  },
];


const OurWorks = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-sans font-thin text-gray-800 text-center mb-8">
          Our Projects
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
                <h3 className="text-lg font-sans text-white uppercase" >{project.title}</h3>
                <p className="text-sm text-gray-200">{project.area}</p>
                <p className="text-sm text-gray-200">{project.location}</p>
                <p className="text-sm text-gray-200">{project.scope}</p>
              
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default OurWorks;
