import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";

const Grains = () => {
  const grains = [
    {
      name: "Basmati Rice",
      price: "$8.99",
      image:
        "https://images.pexels.com/photos/1580654/pexels-photo-1580654.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Premium aged basmati rice",
    },
    {
      name: "Quinoa",
      price: "$12.99",
      image:
        "https://images.pexels.com/photos/4198431/pexels-photo-4198431.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Organic tri-color quinoa",
    },
    {
      name: "Brown Rice",
      price: "$6.99",
      image:
        "https://images.pexels.com/photos/1580658/pexels-photo-1580658.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Nutritious whole grain brown rice",
    },
    {
      name: "Oats",
      price: "$4.99",
      image:
        "https://images.pexels.com/photos/4198432/pexels-photo-4198432.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Steel-cut organic oats",
    },
    {
      name: "Barley",
      price: "$5.49",
      image:
        "https://images.pexels.com/photos/4198429/pexels-photo-4198429.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Pearl barley for soups and stews",
    },
    {
      name: "Millet",
      price: "$7.99",
      image:
        "https://images.pexels.com/photos/4198430/pexels-photo-4198430.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ancient grain millet",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Wholesome Grains | IMFoods Exporter India</title>
        <meta
          name="description"
          content="Explore IMFoods' premium selection of wholesome grains including basmati rice, quinoa, oats, barley, millet, and brown rice. Exported worldwide with quality assurance."
        />
        <meta
          name="keywords"
          content="IMFoods, grain exporter India, basmati rice export, quinoa exporter, brown rice India, wholesale oats, barley supplier, millet export, bulk grains, Indian grain exporters"
        />
        <link rel="canonical" href="https://www.imfoods.com/wholesome-grains" />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Wholesome Grains"
        bgImage="https://images.pexels.com/photos/4198431/pexels-photo-4198431.jpeg?auto=compress&cs=tinysrgb&w=400"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Wholesome Grains" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nutrient-rich whole grains that form the foundation of healthy
            meals. Our grains are carefully processed to retain their natural
            goodness and nutritional value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {grains.map((grain, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={grain.image}
                  alt={grain.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {grain.name}
                </h3>
                <p className="text-gray-600 mb-4">{grain.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-700">
                    {grain.price}
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
              Ancient Nutrition, Modern Quality
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our grains are sourced from regions known for their traditional
              farming methods and ideal growing conditions. We ensure minimal
              processing to preserve the natural nutrients and authentic
              flavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grains;
