import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={Logo} alt="Logo" className="w-14" />
              <span className="text-2xl font-bold">IM FOODS</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for fresh, natural, and premium quality food
              products sourced from the finest farms worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">
                  <Instagram />
                </span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">
                  <Facebook />
                </span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">
                  <Twitter />
                </span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">
                  <Linkedin />
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  onClick={() => navigate("/")}
                  className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/about")}
                  className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/products")}
                  className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/blogs")}
                  className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                >
                  Blogs
                </a>
              </li>

              <li>
                <a
                  onClick={() => navigate("/contact")}
                  className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xl font-bold mb-6">Product Categories</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/products/spices"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Pulses
                </a>
              </li>
              <li>
                <a
                  href="/products/spices"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Spices
                </a>
              </li>
              <li>
                <a
                  href="/products/fresh-fruits"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Fresh Fruits
                </a>
              </li>
              <li>
                <a
                  href="/products/fresh-vegetables"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Fresh Vegetables
                </a>
              </li>
              <li>
                <a
                  href="/products/tea"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Tea
                </a>
              </li>
              <li>
                <a
                  href="/products/grains"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Grains
                </a>
              </li>
              <li>
                <a
                  href="/products/grains"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Coffee
                </a>
              </li>
              <li>
                <a
                  href="/products/grains"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Oil
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="text-gray-400 space-y-4">
              <div>
                <p className="font-medium text-white mb-1">Email</p>
                <a
                  href="mailto:contact@imfoodss.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  contact@imfoodss.com
                </a>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Phone</p>
                <a
                  href="tel:+919667866491"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  +919667866491
                </a>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Address</p>
                <p>Delhi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 IM Foods. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Shipping Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
