import React from "react";
import { useNavigate } from "react-router-dom";
import CommitmentSectionImg from "../assets/commitment-section-img.jpeg";

const CommitmentSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Commitment to
              <span className="block text-green-700">Excellence</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              For over two decades, we&apos;ve been dedicated to sourcing the
              finest natural foods from trusted farmers and growers who share
              our commitment to sustainable agriculture and ethical practices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">
                  20+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Partner Farms</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <a
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl transition-all duration-200"
              >
                Learn More About Us
              </a>
              <a
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold rounded-xl transition-all duration-200"
                onClick={() => navigate("/contact")}
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={CommitmentSectionImg}
              alt="Fresh vegetables"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-yellow-400 p-4 sm:p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  100%
                </div>
                <div className="text-gray-700 font-medium">Organic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
