import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Calendar, User, Tag } from "lucide-react";
import { blogs } from "../data/Blog";

const BlogDetailsPage = () => {
  const { id } = useParams();

  const blog = blogs.find((b) => String(b.id) === String(id));

  if (!blog) {
    return <p className="text-center mt-10 text-red-500">Blog not found!</p>;
  }

  const metaDescription = blog.content.split("\n")[0].slice(0, 160) + "..."; // first line as meta description
  const pageUrl = `https://imfoods.com/blog/${blog.id}`;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Helmet for SEO */}
      <Helmet>
        <title>{blog.title} | Food & Wellness Blog</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content={`${blog.category}, ${blog.tags.join(", ")}, Food, Wellness`}
        />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="author" content={blog.author} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

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
      </div>
    </div>
  );
};

export default BlogDetailsPage;
