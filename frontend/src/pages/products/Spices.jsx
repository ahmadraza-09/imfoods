import React from "react";
import ProductCard from "../../components/ProductCard";
import { Filter, Grid, List } from "lucide-react";
import Banner from "../../components/Banner";

const Spices = () => {
  const spices = [
    {
      name: "Premium Black Pepper",
      price: "$12.99",
      originalPrice: "$15.99",
      image:
        "https://images.pexels.com/photos/4198939/pexels-photo-4198939.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Premium whole black peppercorns from Malabar coast with intense aroma and bold flavor",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
    },
    {
      name: "Organic Turmeric Powder",
      price: "$8.99",
      image:
        "https://images.pexels.com/photos/4198448/pexels-photo-4198448.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Pure organic turmeric powder with high curcumin content for health and flavor",
      rating: 4.9,
      reviews: 89,
      badge: "Organic",
    },
    {
      name: "Green Cardamom Pods",
      price: "$24.99",
      image:
        "https://images.pexels.com/photos/5560063/pexels-photo-5560063.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Premium green cardamom pods from Guatemala with sweet, floral aroma",
      rating: 4.7,
      reviews: 67,
    },
    {
      name: "Whole Cumin Seeds",
      price: "$6.99",
      image:
        "https://images.pexels.com/photos/4198417/pexels-photo-4198417.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Aromatic cumin seeds perfect for tempering and spice blends",
      rating: 4.6,
      reviews: 156,
    },
    {
      name: "Ceylon Cinnamon Sticks",
      price: "$15.99",
      image:
        "https://images.pexels.com/photos/4198426/pexels-photo-4198426.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "True Ceylon cinnamon sticks with delicate, sweet flavor profile",
      rating: 4.8,
      reviews: 92,
      badge: "Premium",
    },
    {
      name: "Kashmiri Red Chili Powder",
      price: "$7.99",
      image:
        "https://images.pexels.com/photos/4198455/pexels-photo-4198455.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Mild heat Kashmiri chili powder with vibrant red color and smoky flavor",
      rating: 4.5,
      reviews: 203,
    },
    {
      name: "Star Anise Whole",
      price: "$18.99",
      image:
        "https://images.pexels.com/photos/4198441/pexels-photo-4198441.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Whole star anise with licorice-like flavor, perfect for Asian cuisine",
      rating: 4.4,
      reviews: 45,
    },
    {
      name: "Saffron Threads",
      price: "$89.99",
      image:
        "https://images.pexels.com/photos/4198442/pexels-photo-4198442.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Premium Kashmir saffron threads, the world's most precious spice",
      rating: 5.0,
      reviews: 28,
      badge: "Luxury",
    },
    {
      name: "Garam Masala Blend",
      price: "$9.99",
      image:
        "https://images.pexels.com/photos/4198443/pexels-photo-4198443.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Traditional garam masala blend with perfect balance of warming spices",
      rating: 4.7,
      reviews: 178,
      inStock: false,
    },
  ];

  const categories = [
    "All Spices",
    "Whole Spices",
    "Ground Spices",
    "Spice Blends",
    "Organic",
    "Premium",
  ];
  return (
    <div className="min-h-screen ">
      {/* Banner */}
      <Banner
        title="Premium Spices"
        bgImage="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&w=400"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Premium Spices" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our extensive collection of authentic spices sourced from
            the finest spice gardens around the world. Each spice is carefully
            selected, processed, and packaged to preserve its natural oils,
            aroma, and flavor intensity.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 bg-white p-6 rounded-2xl shadow-md">
          <div className="flex flex-wrap gap-3 mb-4 lg:mb-0">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-green-200 text-green-700 hover:bg-green-700 hover:text-white transition-all duration-200 font-medium text-sm"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button className="p-2 bg-green-700 text-white">
                <Grid className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-gray-50 transition-colors">
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {spices.map((spice, index) => (
            <ProductCard key={index} {...spice} />
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Our Spices Stand Out
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>
                    Direct sourcing from heritage spice gardens for maximum
                    freshness and authenticity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>
                    Zero artificial colors, preservatives, or flavor enhancers -
                    just pure spices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>
                    Traditional processing methods combined with modern
                    packaging to retain essential oils
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>
                    Comprehensive quality testing for purity, potency, and
                    microbiological safety
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>
                    Sustainable farming partnerships supporting local
                    communities worldwide
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Spice collection"
                className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Spice Origins Map */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sourced from the World's Best Spice Regions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our spices come from renowned spice-growing regions, each known
              for producing specific varieties with unique characteristics and
              superior quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">India</h3>
              <p className="text-gray-700">
                Turmeric, Cardamom, Black Pepper, Cumin
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Sri Lanka
              </h3>
              <p className="text-gray-700">Ceylon Cinnamon, Cloves, Nutmeg</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Guatemala
              </h3>
              <p className="text-gray-700">Green Cardamom, Allspice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spices;
