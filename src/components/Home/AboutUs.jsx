"use client";

import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 flex justify-center items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between md:items-center gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl  text-gray-800 mb-4 text-left font-sans font-thin">
            A Brief Story
          </h2>
          <p className="text-lg  text-gray-600 mb-6 font-sans font-thin text-left leading-relaxed">
            We offer a unique and systematic turn-key fit-out service for
            commercial spaces. We are a growing brand and strongly believe in
            future-proofing our projects, both in terms of quality as well as
            design. We excel in our services by using only the finest materials,
            informed design, and the best craftsmanship.  
            <br />
            We achieve this by working closely with our clients to understand
            their requirements and needs. Our highly schematic design and
            execution process ensures that we deliver our services in an
            organized and timely manner.
          </p>
          <a
            href="/about-page"
            className="inline-block bg-red-900 text-white font-medium px-6 py-3 font-sans font-thin rounded hover:bg-red-800 transition text-left mt-2"
          >
            Learn More About Our Story
          </a>
        </div>
        <div className="w-full md:w-1/3">
          <img src="./about.jpg" alt="About Us" className="w-full h-auto rounded" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
