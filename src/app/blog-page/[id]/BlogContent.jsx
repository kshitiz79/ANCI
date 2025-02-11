"use client";

import { useRouter } from "next/navigation";

export default function BlogContent({ blog, blogIndex, totalBlogs }) {
  const router = useRouter();

  return (
    <section className="bg-gray-100 py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Blog Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="bg-white shadow-md rounded-lg p-8 mt-8">
          <h1 className="text-4xl font-sans font-thin text-gray-800 mb-4">{blog.title}</h1>

          {/* Meta Info */}
          <div className="text-gray-600 mb-6 font-sans font-thin space-y-1 text-justify">
            <p>
              <strong>Author:</strong> {blog.author}
            </p>
            <p>
              <strong>Company:</strong> {blog.company}
            </p>
            <p>
              <strong>Published:</strong> {blog.published_date}
            </p>
          </div>

          {/* Blog Content */}
          <div className="leading-relaxed text-gray-700 text-justify">
            {blog.content.map((paragraph, idx) => {
              if (
                paragraph.match(
                  /^(1\.|2\.|3\.|4\.|5\.|6\.|7\.|8\.|9\.|10\.|The Connection Between|Key Design Principles|Bringing It All Together|Cultivating a Supportive Office|Conclusion)/
                )
              ) {
                return (
                  <h2
                    key={idx}
                    className="text-2xl font-sans font-thin text-gray-800 mt-8 mb-4"
                  >
                    {paragraph}
                  </h2>
                );
              }
              return <p key={idx} className="mb-4">{paragraph}</p>;
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-8">
          {/* Previous Button */}
          <button
            onClick={() => router.push(`/blog-page/${blogIndex - 1}`)}
            disabled={blogIndex === 0}
            className={`px-6 py-3 text-white font-semibold rounded-md transition ${
              blogIndex === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#7c0c2b] hover:bg-[#7c0c2b]"
            }`}
          >
            ⬅ Previous
          </button>

          {/* Next Button */}
          <button
            onClick={() => router.push(`/blog-page/${blogIndex + 1}`)}
            disabled={blogIndex === totalBlogs - 1}
            className={`px-6 py-3 text-white font-semibold rounded-md transition ${
              blogIndex === totalBlogs - 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#7c0c2b] hover:bg-[#7c0c2b]"
            }`}
          >
            Next ➡
          </button>
        </div>
      </div>
    </section>
  );
}
