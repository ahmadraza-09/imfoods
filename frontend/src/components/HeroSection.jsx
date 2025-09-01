import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Play, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center flex-col sm:flex-row lg:justify-start space-x-2 mb-6">
              <div className="flex items-center ">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-green-200 font-medium">
                Trusted by 50,000+ customers
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Fresh & Natural
              <span className="block text-yellow-400">Foods</span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-green-100">
              Discover premium quality spices, fresh produce, and organic
              ingredients sourced directly from trusted farms across the globe
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/products/spices"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-xl text-lg"
              >
                <ShoppingCart className="mr-3 h-6 w-6" />
                Shop Now
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-xl transition-all duration-200 border border-white/30 text-lg">
                <Play className="mr-3 h-6 w-6" />
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh produce collection"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-yellow-400/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
