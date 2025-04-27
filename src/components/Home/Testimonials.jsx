"use client";

import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const feedbackData = [
  {
    company: "BIOSEQ",
    details: [
      {
        category: "Company Team Capability / Project Methodology",
        points: [
          {
            question:
              "Was the deployed execution team technically competent and deeply involved in the task?",
            rating: 5,
          },
          {
            question:
              "Guidance to contractors and subcontractors during the execution stage.",
            rating: 5,
          },
          {
            question:
              "How was the involvement of senior management as & when required?",
            rating: 5,
          },
        ],
      },
      {
        category: "Quality of Work as per Methodology",
        points: [
          {
            question:
              "Does the vendor execute the work in quality and installation as per the specifications?",
            rating: 5,
          },
          {
            question: "Is the project completion done as per the schedule?",
            rating: 5,
          },
        ],
      },
      {
        category: "Response Time",
        points: [
          {
            question:
              "The vendor is to adhere to the agreed TURN AROUND TIME for deliverables.",
            rating: 5,
          },
        ],
      },
    ],
    overallRating: 10,
    clientFeedback:
      "The ANCI team understood the challenges and helped us with the exact execution requirements. Their professionalism and dedication are evident in the results delivered.",
  },
  {
    company: "JSW Energy",
    details: [
      {
        category: "Project Management and Execution",
        points: [
          {
            question:
              "ANCI has demonstrated exceptional project management capabilities.",
            rating: 5,
          },
          {
            question:
              "The entire scope of work was completed ahead of the deadline.",
            rating: 5,
          },
          {
            question:
              "Attention to detail in interior design and execution was commendable.",
            rating: 5,
          },
        ],
      },
    ],
    overallRating: 10,
    clientFeedback:
      "ANCI has done JSW plant interior and office building project. The professionalism, dedication, and skill of your team have exceeded our expectations, and we are extremely pleased with the results. This not only showcased your commitment to quality but also reinforced our confidence in ANCI as a reliable partner.",
    clientDetails: {
      name: "Pravinkumar S. Powar",
      role: "Head Plant Operations @ JSW Energy Ltd",
      date: "January 24, 2025",
    },
  },
];

const FeedbackCard = ({ category, points }) => (
  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
    <h3 className="text-base sm:text-lg font-thin text-gray-800 mb-4">
      {category}
    </h3>
    <ul className="space-y-2 sm:space-y-3">
      {points.map((point, index) => (
        <li
          key={index}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
        >
          <p className="text-gray-700 text-sm sm:text-base font-sans font-thin">
            {point.question}
          </p>
          <div className="flex items-center mt-2 sm:mt-0">
            {Array(point.rating)
              .fill()
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-500 ml-1" />
              ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const ClientFeedback = ({ data }) => (
  <div className="py-6 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-thin font-sans text-gray-800 mb-4 sm:mb-6">
        {data.company}
      </h2>
      <div className="flex flex-col sm:flex-row font-sans space-y-4 sm:space-y-0 sm:space-x-6">
        {data.details.map((item, index) => (
          <FeedbackCard
            key={index}
            category={item.category}
            points={item.points}
          />
        ))}
      </div>

      <div className="bg-gray-50 border-l-4 border-green-500 p-4 sm:p-6 mt-6">
        <FaCheckCircle className="text-green-500 text-xl sm:text-2xl mb-2" />
        <p className="text-gray-700 italic text-sm sm:text-base">
          {data.clientFeedback}
        </p>
        {data.clientDetails && (
          <div className="mt-4 text-xs font-sans sm:text-sm text-gray-600">
            <p>
              <strong>{data.clientDetails.name}</strong>
            </p>
            <p>{data.clientDetails.role}</p>
            <p>{data.clientDetails.date}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-gray-50  md:py-0 sm:py-12">
      <div className="max-w-8xl mx-auto ">
        <h1 className="text-center text-2xl sm:text-3xl font-sans font-thin text-gray-800 lg:mb-3 sm:mb-10">
          Client Testimonials
        </h1>
        {feedbackData.map((clientFeedback, index) => (
          <ClientFeedback key={index} data={clientFeedback} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
