import React from "react";

const profiles = [
  {
    name: "SAWAN R YEDE",
    position: "DIRECTOR – STRATEGIES & COLLABORATIONS",
    image: "/about/profile2.png",
    email: "sawan@example.com",
    location: "Pune, Maharashtra, India",
    about:
      "Experienced and results-driven leader with over a decade in the real estate industry, adept at implementing strategic initiatives to optimize business processes and enhance overall efficiency. Sawan is a certified professional in PPP®, CSSYB®, CCMP® and MSP®. He holds an MBA in Operations Management, a post-graduation in Urban Planning and Management, and an Executive Management Development Programme from IIM Kozhikode.",
  },
  {
    name: "ADITYA RATHOD",
    position: "FOUNDER & MANAGING DIRECTOR",
    image: "/about/profile1.png",
    email: "aditya@example.com",
    location: "Pune, Maharashtra, India",
    about:
      "ANCI was founded by Aditya Rathod in 2006 & headquartered in Pune (Maharashtra, India). Aditya is a veteran with over two decades of experience in the Indian Real Estate industry. Known for his valuable insights, he has helped various companies with portfolio planning, strategic consulting, expansion/relocations & project delivery. Aditya’s core strengths lie in offering turnkey solutions encompassing Design & Build, Contracting, and Interior Fit-Outs, ensuring seamless execution and exceptional results for Clients..",
  },
];

const ProfileCards = () => {
  return (
    <div className="w-full bg-gray-100 py-8 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl ">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105"
          >
            {/* Image Section */}
         

            {/* Content Section */}
            <div className="pl-20 p-4 flex flex-col justify-center font-sans font-thin">
            <div className="flex">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-24 h-24 object-cover  border-1 border-white shadow-md"
              />

              <div className="ml-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {profile.name}
              </h2>
              <p className="text-xs font-medium  text-indigo-500 mb-2">
                {profile.position}
              </p>
              {/* <p className="text-xs text-gray-600 mb-1">
                <strong>Email:</strong> {profile.email}
              </p> */}
              {/* <p className="text-xs text-gray-600 mb-1">
                <strong>Location:</strong> {profile.location}
              </p> */}
              </div>


            </div>
              <p className="text-sm text-gray-600 text-justify mt-5">
                 {profile.about}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCards;
