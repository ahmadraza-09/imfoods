import React from "react";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({
  title,
  excerpt,
  author,
  createdAt,
  image,
  category,
  featured = false,
}) => {
  const navigate = useNavigate();

  // Function to calculate read time
  const calculateReadTime = (text) => {
    if (!text) return "1 min read";
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Format the date
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "N/A";

  const readTime = calculateReadTime(excerpt);

  if (featured) {
    return (
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 group">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="aspect-[16/12] lg:aspect-[16/12] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                Featured
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                {category}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-200">
              {title}
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              {excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{readTime}</span>
                </div>
              </div>

              <button
                className="flex items-center text-green-700 hover:text-green-800 font-semibold transition-colors duration-200 group"
                onClick={() =>
                  navigate(
                    `/blogs/${encodeURIComponent(
                      title.replace(/\s+/g, "-").toLowerCase()
                    )}`
                  )
                }
              >
                Read Article
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      {/* Image */}
      <div className="aspect-[16/12] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center space-x-3 text-xs text-gray-500 mb-3">
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
            {category}
          </span>
          <span className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {formattedDate}
          </span>
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {readTime}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-200 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600 text-sm">{author}</span>
          </div>
          <button
            className="flex items-center text-green-700 hover:text-green-800 font-semibold transition-colors duration-200 group"
            onClick={() =>
              navigate(
                `/blogs/${encodeURIComponent(
                  title.replace(/\s+/g, "-").toLowerCase()
                )}`
              )
            }
          >
            Read More
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
