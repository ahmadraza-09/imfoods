import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ title, breadcrumbs, bgImage }) => {
  return (
    <div
      className="w-full h-[300px] md:h-[300px] bg-cover bg-center relative flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for glassmorphism effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative text-center text-white z-10">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-2">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav className="flex justify-center text-sm md:text-base space-x-2">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center space-x-2">
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="hover:underline hover:text-gray-200"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-300">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="mx-1">{">"}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Banner;
