import React from "react";

const WhoWeAreSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 font-sans font-thin">
      <div className="max-w-7xl mx-auto">
        {/* Who We Are Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 mt-10">
          <div>
            <h3 className="text-3xl  text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-700 text-base  mb-4">
              A.N.C.I. is an interior fit-out company, founded back in 2006. We
              are headquartered in Pune and are in the process of expanding our
              business into other major cities across India. We have worked in
              various capacities and successfully executed over 2 million
              square feet of work for corporates and companies.
            </p>
            <p className="text-gray-700 text-base">
              Our dedication and work process throughout the years have earned
              us recognition for delivering challenging projects and fulfilling
              customer satisfaction without fail. Our project reach extends
              beyond Maharashtra as we cater to Gujarat, Goa, Delhi, Andhra
              Pradesh, and Karnataka as well.
            </p>
          </div>
          <img
            src="/hero1.jpg" // Replace with actual image URL
            alt="Who We Are"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* A Brief Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <img
            src="/hero2.jpg" // Replace with actual image URL
            alt="A Brief Story"
            className="rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-3xl  text-gray-800 mb-8">
              A Brief Story
            </h3>
            <p className="text-gray-700 text-base mb-4">
              We offer a unique and systematic turn-key fit-out service for
              commercial spaces. We are a growing brand and strongly believe in
              future-proofing our projects in terms of both quality and design.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              We excel in our services by using only the finest materials,
              informed design, and the best craftsmanship. We achieve this by
              working closely with our clients to understand their requirements
              and needs.
            </p>
            <p className="text-gray-700 text-lg">
              We follow a schematic design and execution process, promising to
              deliver our services in an organized and timely manner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
