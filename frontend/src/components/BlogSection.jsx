import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { CircleChevronRight } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
const API_URL = "https://api.imfoodss.com";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log("Backend URL:", API_URL);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/blog/getallblogs`);
      // Filter out featured blogs and take only first 3
      const regularBlogs = res.data
        .filter((blog) => !blog.featured)
        .slice(0, 3);
      setBlogs(regularBlogs);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="py-10 bg-gray-50">
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

        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogs.map((post, index) => (
              <BlogCard key={post._id || index} {...post} />
            ))}
          </div>
        )}

        {/* View More Button */}
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
