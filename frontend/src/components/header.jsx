import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/logo/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    { name: "Spices", path: "/products/spices" },
    { name: "Pulses", path: "/products/pulses" },
    { name: "Fresh Fruits", path: "/products/fresh-fruits" },
    { name: "Fresh Vegetables", path: "/products/fresh-vegetables" },
    { name: "Tea", path: "/products/tea" },
    { name: "Coffee", path: "/products/coffee" },
    { name: "Grains", path: "/products/grains" },
    { name: "Oil", path: "/products/oil" },
    { name: "Dairy Products", path: "/products/dairy-products" },
    { name: "Household Products", path: "/products/household-products" },
  ];

  return (
    <header className="w-full bg-transparent py-2 fixed top-0 z-50">
      <div className="max-w-[90%] mx-auto px-0 sm:px-6 lg:px-8 bg-white shadow-lg sticky top-0 z-50 rounded-lg">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            <img src={Logo} alt="logo" className="w-18" />
            <span className="text-2xl sm:font-bold font-extrabold text-green-700">
              IM FOODS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="relative text-gray-700 hover:text-green-700 font-medium transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="relative text-gray-700 hover:text-green-700 font-medium transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              About Us
            </Link>
            <div className="relative">
              <button
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-green-700 transition-colors duration-200 py-2"
              >
                <span className="font-medium">Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Products Dropdown */}
              <div
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                  isProductsOpen
                    ? "opacity-100 visible transform translate-y-0"
                    : "opacity-0 invisible transform -translate-y-2"
                }`}
              >
                <div className="py-2">
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-150"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/blogs"
              className="relative text-gray-700 hover:text-green-700 font-medium transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className="relative text-gray-700 hover:text-green-700 font-medium transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2 border-t border-gray-100">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-green-700 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-green-700 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-green-700 transition-colors duration-200"
              >
                <span className="font-medium">Products</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProductsOpen && (
                <div className="pl-6 space-y-1">
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block px-3 py-2 text-gray-600 hover:text-green-700 transition-colors duration-150"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/blogs"
              className="block px-3 py-2 text-gray-700 hover:text-green-700 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-green-700 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
