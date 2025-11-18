import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import BlogCard from "../components/BlogCard";
import { Search } from "lucide-react";
import NewsLetterSignupSection from "../components/NewsLetterSignupSection";
import Banner from "../components/Banner";
import axios from "axios";
import { toast } from "react-hot-toast";
import ScrollToTop from "../components/ScrollToTop";
import BgImage from "../assets/contact-section-img.jpeg";

const API_URL = "https://api.imfoodss.com";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Spice",
    "Oil",
    "Tea",
    "Fruit",
    "Coffee",
    "Vegetable",
    "Grain",
    "Pulse",
    "Dairy",
  ];

  // Fetch blogs from API
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/blog/getallblogs`);
      setBlogs(res.data || []);
    } catch (error) {
      toast.error("Failed to fetch blogs.");
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filtering logic
  const filteredBlogs = blogs.filter((blog) => {
    const title = blog.title?.toLowerCase() || "";
    const description = blog.description?.toLowerCase() || "";
    const content = blog.content?.toLowerCase() || "";
    const category = blog.category?.toLowerCase() || "";

    const matchesSearch =
      title.includes(searchQuery.toLowerCase()) ||
      description.includes(searchQuery.toLowerCase()) ||
      content.includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || category === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen">
        {/* Helmet for SEO */}
        <Helmet>
          <title>
            Food & Wellness Blog | Healthy Recipes, Tips & Nutrition
          </title>
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
          bgImage={BgImage}
          breadcrumbs={[{ label: "Home", path: "/" }, { label: "Blogs" }]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest insights on nutrition, sustainable
              farming, cooking techniques, and everything related to healthy
              living.
            </p>
          </div>

          {/* Search */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, recipes, tips..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-200 font-semibold ${
                  selectedCategory === category
                    ? "bg-green-700 text-white border-green-700"
                    : "border-green-200 text-green-700 hover:bg-green-700 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blogs Section */}
          {loading ? (
            <p className="text-center text-gray-500">Loading blogs...</p>
          ) : filteredBlogs.length === 0 ? (
            <p className="text-center text-gray-500">No blogs found.</p>
          ) : (
            <>
              {/* Featured Post (only if more than 0 blogs) */}
              {filteredBlogs.length > 0 && (
                <BlogCard {...filteredBlogs[0]} featured={true} />
              )}

              {/* Blog Grid */}
              {filteredBlogs.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                  {filteredBlogs.slice(1).map((post) => (
                    <BlogCard key={post._id || post.id} {...post} />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Newsletter Signup */}
          <NewsLetterSignupSection />
        </div>
      </div>
    </>
  );
};

export default Blogs;
