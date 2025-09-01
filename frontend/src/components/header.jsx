import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="h-14 w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a onClick={() => navigate("/")} title="Pisum logo">
            <img src={logo} alt="Pisum Logo" className="h-16 w-auto" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 font-medium">
          <a
            onClick={() => navigate("/")}
            className="text-red-600 hover:text-red-800 cursor-pointer"
          >
            Home
          </a>
          <a
            href="about-us/index.html"
            className="hover:text-red-600 cursor-pointer"
          >
            About Us
          </a>

          <div className="group relative">
            <button className="hover:text-red-600 flex items-center cursor-pointer">
              Products
              <ChevronDown size={16} className="ml-1" />
            </button>
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              {[
                "Grains and Cereal",
                "Pulses",
                "Spices",
                "Fruits",
                "Vegetables",
                "Oilseeds",
                "Floriculture",
                "Herbs",
                "Dry Fruits",
                "Beverages",
                "Dehydrated Products",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")}/index.html`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="certificates/index.html" className="hover:text-red-600">
            Certificates
          </a>
          <a href="blog/index.html" className="hover:text-red-600">
            Blogs
          </a>
          <a href="contact-us/index.html" className="hover:text-red-600">
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="px-4 pt-4 pb-6 space-y-4 font-medium">
            <a href="index.html" className="block hover:text-red-600">
              Home
            </a>
            <a href="about-us/index.html" className="block hover:text-red-600">
              About Us
            </a>

            <details>
              <summary className="cursor-pointer hover:text-red-600">
                Products
              </summary>
              <ul className="pl-4 mt-2 space-y-2">
                {[].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/index.html`}
                      className="block hover:text-red-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </details>

            <a
              href="certificates/index.html"
              className="block hover:text-red-600"
            >
              Certificates
            </a>
            <a href="blog/index.html" className="block hover:text-red-600">
              Blogs
            </a>
            <a
              href="contact-us/index.html"
              className="block hover:text-red-600"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
