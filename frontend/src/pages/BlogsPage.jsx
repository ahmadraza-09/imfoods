import React from "react";
import BlogCard from "../components/BlogCard";
import NewsletterSignup from "../components/NewsletterSignup";
import { Search, TrendingUp } from "lucide-react";
import NewsLetterSignupSection from "../components/NewsLetterSignupSection";

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Complete Guide to Organic Spices and Their Health Benefits",
      excerpt:
        "Discover how organic spices can boost your immune system, reduce inflammation, and add incredible flavors to your meals. Learn about the science behind spice nutrition and how to incorporate them into your daily diet.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2025",
      image:
        "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Health & Nutrition",
      readTime: "8 min read",
    },
    {
      title: "Farm to Table: Our Sustainable Sourcing Journey",
      excerpt:
        "Take an inside look at our direct partnerships with farmers around the world and discover how we ensure the freshest, most sustainable produce reaches your table while supporting local communities.",
      author: "Michael Chen",
      date: "March 10, 2025",
      image:
        "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Sustainability",
      readTime: "12 min read",
    },
    {
      title: "Cooking with Ancient Grains: A Complete Beginner's Guide",
      excerpt:
        "Everything you need to know about incorporating nutrient-rich ancient grains like quinoa, amaranth, and millet into your daily diet. Includes easy recipes and nutritional benefits.",
      author: "Emily Rodriguez",
      date: "March 5, 2025",
      image:
        "https://images.pexels.com/photos/4198431/pexels-photo-4198431.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Recipes & Tips",
      readTime: "10 min read",
    },
    {
      title: "The Perfect Cup: Master Tea Brewing Techniques",
      excerpt:
        "Master the art of tea brewing with our comprehensive guide covering water temperature, steeping times, and brewing methods for different tea varieties from green to oolong.",
      author: "James Wilson",
      date: "February 28, 2025",
      image:
        "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Recipes & Tips",
      readTime: "6 min read",
    },
    {
      title: "Seasonal Eating: Your Complete Spring Produce Guide",
      excerpt:
        "Make the most of spring's bounty with our comprehensive guide to seasonal fruits and vegetables. Learn what's in season, how to select the best produce, and delicious ways to prepare them.",
      author: "Dr. Sarah Johnson",
      date: "February 22, 2025",
      image:
        "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Seasonal",
      readTime: "7 min read",
    },
    {
      title: "Sustainable Packaging: Our Comprehensive Green Initiative",
      excerpt:
        "Learn about our commitment to reducing environmental impact through innovative, biodegradable packaging solutions and our zero-waste goals for 2025.",
      author: "Michael Chen",
      date: "February 15, 2025",
      image:
        "https://images.pexels.com/photos/4198434/pexels-photo-4198434.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Sustainability",
      readTime: "9 min read",
    },
    {
      title: "Superfood Spotlight: The Power of Pulses",
      excerpt:
        "Explore the incredible nutritional benefits of pulses and legumes, plus creative recipes to make them a delicious part of your weekly meal planning.",
      author: "Dr. Lisa Park",
      date: "February 8, 2025",
      image:
        "https://images.pexels.com/photos/8844928/pexels-photo-8844928.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Health & Nutrition",
      readTime: "11 min read",
    },
    {
      title: "Coffee Connoisseur: Understanding Single Origin Beans",
      excerpt:
        "Dive deep into the world of single-origin coffee beans, learn about different processing methods, and discover how terroir affects flavor profiles.",
      author: "Roberto Martinez",
      date: "February 1, 2025",
      image:
        "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Coffee Culture",
      readTime: "13 min read",
    },
  ];

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

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Food & Wellness Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest insights on nutrition, sustainable
            farming, cooking techniques, seasonal eating, and everything related
            to healthy, natural living from our team of experts.
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

        {/* Featured Post */}
        <BlogCard {...blogPosts[0]} featured={true} />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {blogPosts.slice(1).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        {/* Newsletter Signup */}
        <NewsLetterSignupSection />
      </div>
    </div>
  );
};

export default Blogs;
