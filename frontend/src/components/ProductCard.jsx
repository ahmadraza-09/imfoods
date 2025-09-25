import React from "react";
import { ShoppingCart, Heart } from "lucide-react";

const ProductCard = ({ name, image, description, badge, inStock = true }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group relative">
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {badge}
          </span>
        </div>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white">
        <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
      </button>

      {/* Image */}
      <div className="aspect-w-16 aspect-h-12 overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-200">
          {name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {/* Price */}
        {/* <div className="flex items-center justify-between">
          <button
            disabled={!inStock}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              inStock
                ? "bg-green-700 hover:bg-green-800 text-white transform hover:scale-105"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {inStock ? "Order Now" : "Out of Stock"}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
