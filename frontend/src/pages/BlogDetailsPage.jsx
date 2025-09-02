import React from "react";
import { useParams } from "react-router-dom";
import { Calendar, User, Share2, Tag } from "lucide-react";
import { blogs } from "../data/Blog";

const BlogDetailsPage = () => {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <p className="text-center mt-10 text-red-500">Blog not found!</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Cover Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full sm:h-[400px] h-[200px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Header */}
        <h1 className="sm:text-4xl text-2xl font-bold text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-green-600" />
            {blog.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-green-600" />
            {blog.date}
          </div>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-green-600" />
            {blog.category}
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:marker:text-green-600 prose-a:text-green-700">
          {blog.content
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line, index) =>
              line.startsWith("##") ? (
                <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
                  {line.replace("##", "").trim()}
                </h2>
              ) : line.startsWith("-") ? (
                <li key={index}>{line.replace("-", "").trim()}</li>
              ) : (
                <p key={index}>{line}</p>
              )
            )}
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-10">
          {blog.tags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Box */}
        {/* <div className="bg-white mt-12 p-6 rounded-xl shadow-md flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-green-200 flex items-center justify-center text-lg font-bold text-green-800">
            {blog.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{blog.author}</p>
            <p className="text-sm text-gray-600">
              Passionate about {blog.category.toLowerCase()} and sharing
              knowledge with the world.
            </p>
          </div>
        </div> */}

        {/* Share Section */}
        {/* <div className="mt-10 border-t pt-6 flex justify-between items-center">
          <p className="text-gray-600 font-medium">Share this article:</p>
          <button className="flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold">
            <Share2 className="h-5 w-5" />
            Share
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default BlogDetailsPage;
