import React from "react";
import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ name, location, rating, comment, avatar }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 relative">
      <Quote className="h-8 w-8 text-green-200 absolute top-4 right-4" />

      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed italic">
        &quot;{comment}&quot;
      </p>

      <div className="flex items-center">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
            avatar ? "" : "bg-green-100"
          }`}
        >
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <span className="text-green-700 font-semibold text-lg">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
