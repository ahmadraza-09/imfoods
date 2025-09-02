import React from "react";
import Banner from "../../components/Banner";

const Oil = () => {
  const oils = [
    {
      name: "Extra Virgin Olive Oil",
      price: "$22.99",
      image:
        "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Cold-pressed extra virgin olive oil",
    },
    {
      name: "Coconut Oil",
      price: "$14.99",
      image:
        "https://images.pexels.com/photos/2202654/pexels-photo-2202654.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Organic virgin coconut oil",
    },
    {
      name: "Avocado Oil",
      price: "$18.99",
      image:
        "https://images.pexels.com/photos/4198461/pexels-photo-4198461.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Premium cold-pressed avocado oil",
    },
    {
      name: "Sesame Oil",
      price: "$12.99",
      image:
        "https://images.pexels.com/photos/4198462/pexels-photo-4198462.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Pure sesame oil for cooking",
    },
    {
      name: "Sunflower Oil",
      price: "$9.99",
      image:
        "https://images.pexels.com/photos/4198463/pexels-photo-4198463.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Refined sunflower cooking oil",
    },
    {
      name: "Mustard Oil",
      price: "$11.99",
      image:
        "https://images.pexels.com/photos/4198464/pexels-photo-4198464.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Traditional mustard seed oil",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Banner */}
      <Banner
        title="Premium Cooking Oils"
        bgImage="https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Premium Cooking Oils" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            High-quality cooking oils for every culinary need. From
            heart-healthy olive oil to traditional mustard oil, we offer pure,
            unrefined oils for authentic flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {oils.map((oil, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={oil.image}
                  alt={oil.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {oil.name}
                </h3>
                <p className="text-gray-600 mb-4">{oil.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-700">
                    {oil.price}
                  </span>
                  <button className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg transition-colors duration-200 font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-orange-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pure & Unrefined
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our oils are cold-pressed and minimally processed to preserve
              their natural nutrients, authentic flavors, and health benefits.
              No artificial additives or preservatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oil;
