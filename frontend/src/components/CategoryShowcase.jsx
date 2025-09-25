import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Spices from "../assets/category-img/spices.jpeg";
import Pulses from "../assets/category-img/pulses.jpeg";
import Fruits from "../assets/category-img/fruits.jpeg";
import Oil from "../assets/category-img/oil.jpg";
import Vegetables from "../assets/category-img/vegetables.jpeg";
import Grains from "../assets/category-img/grains.jpeg";
import Tea from "../assets/category-img/tea.jpeg";
import Coffee from "../assets/category-img/coffee.jpeg";
import Household from "../assets/category-img/household.jpg";
import Dairy from "../assets/category-img/dairy.avif";

const CategoryShowcase = () => {
  const categories = [
    {
      name: "Spices",
      path: "/products/spices",
      image: Spices,
      description: "Authentic spices from around the world",
    },
    {
      name: "Pulses",
      path: "/products/pulses",
      image: Pulses,
      description: "Protein-rich lentils and legumes",
    },
    {
      name: "Fresh Fruits",
      path: "/products/fresh-fruits",
      image: Fruits,
      description: "Farm-fresh seasonal fruits",
    },
    {
      name: "Fresh Vegetables",
      path: "/products/fresh-vegetables",
      image: Vegetables,
      description: "Garden-fresh organic vegetables",
    },
    {
      name: "Tea",
      path: "/products/tea",
      image: Tea,
      description: "Premium tea blends and varieties",
    },
    {
      name: "Coffee",
      path: "/products/coffee",
      image: Coffee,
      description: "Expertly roasted coffee beans",
    },
    {
      name: "Grains",
      path: "/products/grains",
      image: Grains,
      description: "Wholesome ancient and modern grains",
    },
    {
      name: "Oil",
      path: "/products/oil",
      image: Oil,
      description: "Pure, cold-pressed cooking oils",
    },
    {
      name: "Dairy",
      path: "/products/dairy-products",
      image: Dairy,
      description: "Milk, Fresh Curd, Fresh Paneer",
    },
    {
      name: "Household",
      path: "/products/household-products",
      image: Household,
      description: "Pure, Detergent Powder, Appliances",
    },
  ];
  return (
    <section className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Premium Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From aromatic spices to fresh produce, discover our carefully
            curated selection of premium food products, each category featuring
            the finest quality ingredients sourced from trusted suppliers
            worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-200 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center text-green-700 font-medium group-hover:text-green-800 transition-colors duration-200">
                  <span>Explore Collection</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
