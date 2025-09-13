import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mukesh Patel",
      location: "Delhi, India",
      rating: 5,
      comment:
        "The quality of spices from Im Foods is unmatched. My dishes have never tasted better, and the freshness is incredible!",
    },
    {
      name: "Yash Gupta",
      location: "Bhopal, India",
      rating: 5,
      comment:
        "Fast delivery and amazing customer service. The organic vegetables are always fresh and last much longer than store-bought.",
    },
    {
      name: "Anita Sharma",
      location: "Mumbai, India",
      rating: 5,
      comment:
        "I love the variety of ancient grains available. Perfect for my healthy lifestyle and the packaging is eco-friendly too!",
    },
  ];
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust Im Foods for their
            daily nutritional needs and culinary adventures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
