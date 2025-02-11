"use client";

export default function TextPhotoSection() {
  return (
    <div className="bg-slate-100 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="relative flex-1">
          <div className="absolute inset-0 bg-green-500 w-5/6 h-full" />
          <img
            src="/project3.jpg"
            alt="Environmental Sustainability"
            className="rounded-lg shadow-lg lg:w-5/6 object-cover relative z-10"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-sans font-thin text-gray-800">
            Shaping the Future of Workspaces
          </h2>
          <p className="mt-4 text-gray-600 font-sans font-lg text-justify font-thin">
            Explore our insights and initiatives as we redefine the modern
            workspace. From embracing hybrid work models and resimercial design to
            integrating AI-powered solutions, we're creating environments that
            prioritize comfort, collaboration, and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
}
