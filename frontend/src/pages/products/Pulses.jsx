import React from "react";

const Pulses = () => {
  const pulses = [
    {
      name: "Red Kidney Beans",
      price: "$4.99",
      image:
        "https://images.pexels.com/photos/8844928/pexels-photo-8844928.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "High protein red kidney beans",
    },
    {
      name: "Black Lentils",
      price: "$3.99",
      image:
        "https://images.pexels.com/photos/33190/grains-legumes-raw-lentils.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Premium black lentils (urad dal)",
    },
    {
      name: "Chickpeas",
      price: "$5.99",
      image:
        "https://images.pexels.com/photos/4198445/pexels-photo-4198445.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Organic chickpeas (garbanzo beans)",
    },
    {
      name: "Yellow Split Peas",
      price: "$4.49",
      image:
        "https://images.pexels.com/photos/4198428/pexels-photo-4198428.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Split yellow peas for soups",
    },
    {
      name: "Moong Dal",
      price: "$6.99",
      image:
        "https://images.pexels.com/photos/4198440/pexels-photo-4198440.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Split green gram lentils",
    },
    {
      name: "Masoor Dal",
      price: "$5.49",
      image:
        "https://images.pexels.com/photos/4198433/pexels-photo-4198433.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Red lentils (masoor dal)",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Pulses & Lentils
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Rich in protein and essential nutrients, our pulses are carefully
            selected for their quality, freshness, and nutritional value.
            Perfect for healthy, delicious meals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pulses.map((pulse, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={pulse.image}
                  alt={pulse.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {pulse.name}
                </h3>
                <p className="text-gray-600 mb-4">{pulse.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-700">
                    {pulse.price}
                  </span>
                  <button className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg transition-colors duration-200 font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-yellow-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nutritional Powerhouse
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Pulses are an excellent source of plant-based protein, fiber, and
              essential vitamins. They're perfect for vegetarian diets and
              contribute to a healthy, balanced lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pulses;
