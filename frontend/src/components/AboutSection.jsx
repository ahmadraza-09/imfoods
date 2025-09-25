import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronRight } from "lucide-react";
import AboutSectionImg from "../assets/about-section-img.jpeg";

const AboutSection = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Im Foods
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over two decades, Im Foods has been your trusted partner in
            bringing the finest natural foods from farm to your table. We
            believe in the power of pure, wholesome nutrition.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              IMFoods Pvt. Ltd. is a global export company committed to
              delivering the finest quality raw food products from India to the
              world. With deep roots in agriculture and a passion for purity, we
              specialize in sourcing and exporting a diverse range of natural
              food commodities including spices, pulses, edible oils, fresh
              fruits, vegetables, tea, coffee, and grains.
            </p>

            <Link
              to="/about"
              className="inline-flex mt-8 items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-xl text-lg"
            >
              <CircleChevronRight className="mr-3 h-6 w-6" />
              View More
            </Link>
          </div>
          <div>
            <img
              src={AboutSectionImg}
              alt="Fresh produce"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
