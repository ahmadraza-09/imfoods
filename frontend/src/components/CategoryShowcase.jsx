import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CategoryShowcase = () => {
  const categories = [
    {
      name: "Spices",
      path: "/products/spices",
      image:
        "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Authentic spices from around the world",
    },
    {
      name: "Pulses",
      path: "/products/pulses",
      image:
        "https://images.pexels.com/photos/4224259/pexels-photo-4224259.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Protein-rich lentils and legumes",
    },
    {
      name: "Fresh Fruits",
      path: "/products/fresh-fruits",
      image:
        "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Farm-fresh seasonal fruits",
    },
    {
      name: "Fresh Vegetables",
      path: "/products/fresh-vegetables",
      image:
        "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Garden-fresh organic vegetables",
    },
    {
      name: "Tea",
      path: "/products/tea",
      image:
        "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Premium tea blends and varieties",
    },
    {
      name: "Coffee",
      path: "/products/coffee",
      image:
        "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expertly roasted coffee beans",
    },
    {
      name: "Grains",
      path: "/products/grains",
      image:
        "https://images.pexels.com/photos/1192037/pexels-photo-1192037.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Wholesome ancient and modern grains",
    },
    {
      name: "Oil",
      path: "/products/oil",
      image:
        "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Pure, cold-pressed cooking oils",
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
