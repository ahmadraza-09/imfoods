import React from "react";
import Banner from "../../components/Banner";

const FreshVegetables = () => {
  const vegetables = [
    {
      name: "Organic Tomatoes",
      price: "$3.49/lb",
      image:
        "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Vine-ripened organic tomatoes",
    },
    {
      name: "Fresh Spinach",
      price: "$2.99/bunch",
      image:
        "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Crisp, fresh spinach leaves",
    },
    {
      name: "Bell Peppers",
      price: "$4.99/lb",
      image:
        "https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Colorful mixed bell peppers",
    },
    {
      name: "Fresh Carrots",
      price: "$2.49/lb",
      image:
        "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Sweet, crunchy carrots",
    },
    {
      name: "Broccoli",
      price: "$3.99/head",
      image:
        "https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Fresh green broccoli",
    },
    {
      name: "Red Onions",
      price: "$1.99/lb",
      image:
        "https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Fresh red onions",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Banner */}
      <Banner
        title="Fresh Vegetables"
        bgImage="https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg?auto=compress&cs=tinysrgb&w=400"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Fresh Vegetables" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Garden-fresh vegetables harvested at peak ripeness. Our vegetables
            are grown using sustainable farming practices to ensure the best
            taste and nutritional value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vegetables.map((vegetable, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={vegetable.image}
                  alt={vegetable.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {vegetable.name}
                </h3>
                <p className="text-gray-600 mb-4">{vegetable.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-700">
                    {vegetable.price}
                  </span>
                  <button className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg transition-colors duration-200 font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sustainably Grown
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our vegetables are grown using eco-friendly farming methods that
              preserve soil health and biodiversity. We work closely with local
              farmers who share our commitment to sustainable agriculture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshVegetables;
