import React from "react";
import GrainAndCereal from "../assets/product-range/grains-and-cereal.jpg";
import Pulses from "../assets/product-range/pulses.jpg";
import Spices from "../assets/product-range/spices.jpg";
import Fruits from "../assets/product-range/fruits.jpg";
import Vegetables from "../assets/product-range/vegetables.jpg";
import Oilseeds from "../assets/product-range/oilseeds.jpg";
import Floriculture from "../assets/product-range/floriculture.jpg";
import Herbs from "../assets/product-range/herbs.jpg";

import leaf from "../assets/icons/leaf.png";

const ProductRange = () => {
  const products = [
    {
      title: "Grains and Cereal",
      img: GrainAndCereal,
      link: "grains-and-cereal/index.html",
    },
    {
      title: "Pulses",
      img: Pulses,
      link: "pulses/index.html",
    },
    {
      title: "Spices",
      img: Spices,
      link: "spices/index.html",
    },
    {
      title: "Fruits",
      img: Fruits,
      link: "fruits/index.html",
    },
    {
      title: "Vegetables",
      img: Vegetables,
      link: "vegetables/index.html",
    },
    {
      title: "Oilseeds",
      img: Oilseeds,
      link: "oilseeds/index.html",
    },
    {
      title: "Floriculture",
      img: Floriculture,
      link: "floriculture/index.html",
    },
    {
      title: "Herbs",
      img: Herbs,
      link: "herbs/index.html",
    },
  ];

  return (
    <section id="product-range" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <img src={leaf} alt="Product range" className="mx-auto mb-4 w-12" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Product Range
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <a href={product.link}>
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition"
                  />
                </div>
              </a>
              <div className="text-center p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  <a href={product.link}>{product.title}</a>
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <a href="product-range/index.html">
            <button className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
              View More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
