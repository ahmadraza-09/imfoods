import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import BlogCard from "../components/BlogCard";
import { Search, TrendingUp } from "lucide-react";
import NewsLetterSignupSection from "../components/NewsLetterSignupSection";
import Banner from "../components/Banner";
import axios from "axios";
import { toast } from "react-hot-toast";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = [
    "All",
    "Health & Nutrition",
    "Sustainability",
    "Recipes & Tips",
    "Seasonal",
    "Coffee Culture",
  ];
  const trendingTopics = [
    "Organic Farming",
    "Spice Health Benefits",
    "Seasonal Recipes",
    "Sustainable Living",
    "Ancient Grains",
  ];

  // Fetch blogs from API
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/blog/getallblogs"); // Replace with your API endpoint
      setBlogs(res.data || []);
    } catch (error) {
      toast.error("Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Food & Wellness Blog | Healthy Recipes, Tips & Nutrition</title>
        <meta
          name="description"
          content="Explore Food & Wellness blogs covering nutrition, recipes, sustainable farming, coffee culture, and healthy living tips."
        />
        <meta
          name="keywords"
          content="Food blog, Healthy recipes, Nutrition tips, Sustainable farming, Coffee culture, Wellness"
        />
        <meta property="og:title" content="Food & Wellness Blog" />
        <meta
          property="og:description"
          content="Stay updated with nutrition, sustainable farming, recipes & healthy living insights."
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Food & Wellness Blog"
        bgImage="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Blogs" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest insights on nutrition, sustainable
            farming, cooking techniques, and everything related to healthy
            living.
          </p>
        </div>

        {/* Search and Trending */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, recipes, tips..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-5 w-5 text-green-700 mr-2" />
              <h3 className="font-bold text-gray-900">Trending Topics</h3>
            </div>
            <div className="space-y-2">
              {trendingTopics.map((topic, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full border-2 border-green-200 text-green-700 hover:bg-green-700 hover:text-white transition-all duration-200 font-semibold"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blogs Section */}
        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <>
            {/* Featured Post */}
            <BlogCard {...blogs[0]} featured={true} />

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
              {blogs.slice(1).map((post) => (
                <BlogCard key={post._id || post.id} {...post} />
              ))}
            </div>
          </>
        )}

        {/* Newsletter Signup */}
        <NewsLetterSignupSection />
      </div>
    </div>
  );
};

export default Blogs;
