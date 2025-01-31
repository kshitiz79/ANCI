"use client";

import Link from "next/link";
import data from "@/data/data.json";

export default function SimpleCardGrid() {
  const blogs = data.blogs.slice(0, 6); // Get first 6 blogs

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12 px-4 sm:px-6">
          <h2 className="text-3xl font-sans font-thin text-gray-800">
            Our Blogs
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs.map((card, idx) => (
            <Link
              key={idx}
              href={`/blog-page/${idx}`}
              className="block bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-sans font-light text-gray-800 hover:text-gray-600 transition">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
