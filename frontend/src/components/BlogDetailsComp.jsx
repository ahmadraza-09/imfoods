import React from "react";
import { useParams } from "react-router-dom";

const BlogDetailsComp = () => {
  const { id } = useParams();

  // Same blogs as Blogs.js (ideally this should come from API or context)
  const blogs = [
    {
      id: "1",
      title: "The Complete Guide to Organic Spices and Their Health Benefits",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2025",
      content:
        "Full blog content about organic spices and their benefits goes here...",
    },
    {
      id: "2",
      title: "Farm to Table: Our Sustainable Sourcing Journey",
      author: "Michael Chen",
      date: "March 10, 2025",
      content:
        "Full blog content about our sustainable sourcing journey goes here...",
    },
  ];

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <p className="text-center mt-10 text-red-500">Blog not found!</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {blog.author} • {blog.date}
      </p>
      <p className="text-lg leading-relaxed text-gray-700">{blog.content}</p>
    </div>
  );
};

export default BlogDetailsComp;
