"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("Submitting...");

    const formDataToSend = new FormData();
    formDataToSend.append("from_name", formData.name);   // Make sure this matches the template variable
    formDataToSend.append("from_email", formData.email); // Ensure consistency with template
    formDataToSend.append("from_phone", formData.phone); // Ensure consistency with template
    formDataToSend.append("from_message", formData.message); // Ensure consistency with template
    formDataToSend.append("from_resume", formData.resume);

    // Hardcoded EmailJS credentials
    const serviceID = "service_ei9yfzf";
    const templateID = "template_ggvk4vf";
    const publicKey = "uE3OSSvhO9A9hdwQK";

    emailjs
      .sendForm(serviceID, templateID, formDataToSend, publicKey)
      .then(
        (result) => {
          setSubmitStatus("Application submitted successfully!");
          setFormData({ name: "", email: "", phone: "", resume: null, message: "" });
        },
        (error) => {
          setSubmitStatus("Error: Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-100 font-sans font-thin">
      <section className="bg-white py-12 px-6 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-gray-800 mb-6 text-center font-thin">Join Our Team</h2>
          <p className="text-gray-600 mb-8 text-center">
            Apply for a career with us by filling out the form below. We’re excited to meet talented individuals!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="from_email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="from_phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="+1-234-567-8900"
              />
            </div>
            <div>
              <label htmlFor="resume" className="block text-gray-700 mb-2">Resume (PDF)</label>
              <input
                type="file"
                id="resume"
                name="from_resume"
                accept="application/pdf"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Cover Letter</label>
              <textarea
                id="message"
                name="from_message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 h-32 resize-none"
                placeholder="Tell us about yourself and why you’d like to join us..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#7c0c2b] text-white py-3 rounded-lg hover:bg-red-800 transition-colors duration-200"
            >
              Submit Application
            </button>
            {submitStatus && <p className="text-center text-green-600 mt-4">{submitStatus}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Career;
