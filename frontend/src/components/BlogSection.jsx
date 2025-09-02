import React from "react";
import BlogCard from "./BlogCard"; // make sure path is correct
import { blogs } from "../data/Blog";
import { Link } from "react-router-dom";
import { CircleChevronRight } from "lucide-react";

const BlogSection = () => {
  const featuredPost = blogs.find((post) => post.featured);
  const regularPosts = blogs.filter((post) => !post.featured);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest From Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in organic
            living and healthy lifestyles.
          </p>
        </div>

        {/* Featured Blog */}
        {/* {featuredPost && <BlogCard {...featuredPost} />} */}

        {/* Regular Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {regularPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/blogs"
            className="inline-flex mt-8 items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-xl text-lg"
          >
            <CircleChevronRight className="mr-3 h-6 w-6" />
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
