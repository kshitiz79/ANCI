import data from "@/data/data.json";
import { notFound } from "next/navigation";
import BlogContent from "./BlogContent"; // Import the client component

export async function generateStaticParams() {
  return data.blogs.map((_, index) => ({
    id: index.toString(),
  }));
}

export default function BlogPage({ params }) {
  const { id } = params;
  const blogIndex = parseInt(id, 10);

  // Handle invalid blog IDs
  if (isNaN(blogIndex) || blogIndex < 0 || blogIndex >= data.blogs.length) {
    return notFound();
  }

  const blog = data.blogs[blogIndex];

  // ✅ Pass `blog` and `blogIndex` as props to the Client Component
  return <BlogContent blog={blog} blogIndex={blogIndex} totalBlogs={data.blogs.length} />;
}
