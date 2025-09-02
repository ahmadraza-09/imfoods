import React from "react";
import Banner from "../../components/Banner";

const FreshFruits = () => {
  const fruits = [
    {
      name: "Organic Apples",
      price: "$3.99/lb",
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Crisp, sweet organic apples",
    },
    {
      name: "Fresh Bananas",
      price: "$2.49/lb",
      image:
        "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Perfectly ripe bananas",
    },
    {
      name: "Juicy Oranges",
      price: "$4.99/lb",
      image:
        "https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Sweet, juicy naval oranges",
    },
    {
      name: "Fresh Mangoes",
      price: "$6.99/lb",
      image:
        "https://images.pexels.com/photos/918018/pexels-photo-918018.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Tropical ripe mangoes",
    },
    {
      name: "Sweet Grapes",
      price: "$5.49/lb",
      image:
        "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Seedless sweet grapes",
    },
    {
      name: "Fresh Berries",
      price: "$8.99/box",
      image:
        "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Mixed berry selection",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Banner */}
      <Banner
        title=" Fresh Fruits"
        bgImage="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: " Fresh Fruits" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Handpicked fresh fruits delivered daily from local farms. Packed
            with vitamins, minerals, and natural sweetness for a healthy
            lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fruits.map((fruit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {fruit.name}
                </h3>
                <p className="text-gray-600 mb-4">{fruit.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-700">
                    {fruit.price}
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
              Farm to Table Freshness
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              All our fruits are sourced directly from certified organic farms
              and delivered to you within 24 hours of harvest, ensuring maximum
              freshness and nutritional value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshFruits;
