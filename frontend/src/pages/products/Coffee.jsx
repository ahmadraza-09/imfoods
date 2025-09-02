import React from "react";
import Banner from "../../components/Banner";

const Coffee = () => {
  const coffees = [
    {
      name: "Ethiopian Single Origin",
      price: "$18.99",
      image:
        "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Bright, fruity Ethiopian coffee beans",
    },
    {
      name: "Colombian Medium Roast",
      price: "$16.99",
      image:
        "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Smooth Colombian coffee with balanced flavor",
    },
    {
      name: "French Roast",
      price: "$15.99",
      image:
        "https://images.pexels.com/photos/1695953/pexels-photo-1695953.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Dark roasted coffee with bold flavor",
    },
    {
      name: "Espresso Blend",
      price: "$19.99",
      image:
        "https://images.pexels.com/photos/1695943/pexels-photo-1695943.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Perfect blend for espresso brewing",
    },
    {
      name: "Decaf Coffee",
      price: "$14.99",
      image:
        "https://images.pexels.com/photos/1695949/pexels-photo-1695949.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Premium decaffeinated coffee beans",
    },
    {
      name: "Cold Brew Blend",
      price: "$17.99",
      image:
        "https://images.pexels.com/photos/1695942/pexels-photo-1695942.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Specially selected for cold brewing",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Banner */}
      <Banner
        title="Premium Coffee"
        bgImage="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Coffee" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Expertly roasted coffee beans from the world's finest coffee-growing
            regions. Each batch is carefully roasted to bring out the unique
            flavors and aromas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffees.map((coffee, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {coffee.name}
                </h3>
                <p className="text-gray-600 mb-4">{coffee.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-700">
                    {coffee.price}
                  </span>
                  <button className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg transition-colors duration-200 font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-amber-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect Roasting Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our master roasters use traditional techniques combined with
              modern precision to create the perfect roast profile for each
              origin, ensuring optimal flavor development and aroma retention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
