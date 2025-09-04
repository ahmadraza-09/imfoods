import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";

const Tea = () => {
  const teas = [
    {
      name: "Earl Grey Tea",
      price: "$12.99",
      image:
        "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Classic bergamot-flavored black tea",
    },
    {
      name: "Green Tea",
      price: "$15.99",
      image:
        "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Premium organic green tea leaves",
    },
    {
      name: "Chamomile Tea",
      price: "$10.99",
      image:
        "https://images.pexels.com/photos/1638278/pexels-photo-1638278.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Soothing chamomile herbal tea",
    },
    {
      name: "Masala Chai",
      price: "$13.99",
      image:
        "https://images.pexels.com/photos/1638281/pexels-photo-1638281.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Traditional Indian spiced tea",
    },
    {
      name: "White Tea",
      price: "$18.99",
      image:
        "https://images.pexels.com/photos/1638274/pexels-photo-1638274.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Delicate white tea with subtle flavor",
    },
    {
      name: "Oolong Tea",
      price: "$16.99",
      image:
        "https://images.pexels.com/photos/1638276/pexels-photo-1638276.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Semi-fermented oolong tea",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Helmet for SEO */}
      <Helmet>
        <title>
          Premium Tea Exporter in India | Organic Tea Collection | imFoods
        </title>
        <meta
          name="description"
          content="Discover imFoods' premium tea collection including Green Tea, Earl Grey, Chamomile, Masala Chai, and Oolong. Exporting organic teas globally with rich aroma & authentic taste."
        />
        <meta
          name="keywords"
          content="Tea exporter India, Organic Green Tea export, Masala Chai exporter, Black Tea India, Oolong Tea supplier, White Tea export, Herbal Tea exporter, imFoods Tea collection"
        />
        <link rel="canonical" href="https://www.imfoods.com/products/tea" />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Premium Tea Collection"
        bgImage="https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=400"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Premium Tea Collection" },
        ]}
      />

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our curated selection of premium teas from renowned tea
            gardens around the world. From energizing black teas to soothing
            herbal blends, find your perfect cup.
          </p>
        </div>

        {/* Tea Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teas.map((tea, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tea.name}
                </h3>
                <p className="text-gray-600 mb-4">{tea.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-700">
                    {tea.price}
                  </span>
                  <button className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg transition-colors duration-200 font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Section: Tea Brewing Tips */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tea Brewing Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Water Temperature
                </h3>
                <p className="text-gray-700">
                  Use 175-185°F for green teas, 200-212°F for black teas
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Steeping Time
                </h3>
                <p className="text-gray-700">
                  2-3 minutes for green tea, 3-5 minutes for black tea
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tea Quantity
                </h3>
                <p className="text-gray-700">
                  Use 1 teaspoon of loose tea per cup of water
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Extra Section: Why Our Tea? */}
        <div className="mt-16 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Choose imFoods Tea?
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
            <li>🌱 100% Organic and sustainably sourced</li>
            <li>🍃 Direct partnerships with premium tea estates</li>
            <li>🌍 Exported globally with strict quality checks</li>
            <li>💧 Rich in antioxidants, natural aroma, and authentic taste</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tea;
