import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import axios from "axios";
import { toast } from "react-hot-toast";
import ProductCard from "../../components/ProductCard";
const API_URL = "https://api.imfoodss.com";
import CoffeeImg from "../../assets/category-img/coffee.jpeg";
import CoffeeBeans from "../../assets/products/coffee/coffee-beans.jpg";

const Coffee = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch only coffee products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_URL}/product/getallproducts?category=coffee`
      );

      const filtered = (res.data || [])
        .filter((p) => p.category?.toLowerCase() === "coffee")
        .map((p) => ({
          ...p,
          id: p._id || p.id,
        }));

      setCoffees(filtered);
    } catch (error) {
      toast.error("Failed to fetch coffee products.");
      console.error("Error fetching coffee products:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Correct hook for fetching
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Premium Coffee Beans | Single Origin, Espresso, Cold Brew</title>
        <meta
          name="description"
          content="Shop premium coffee beans including Ethiopian Single Origin, Colombian Medium Roast, French Roast, Espresso blends, Decaf, and Cold Brew. Freshly roasted for rich flavor and aroma."
        />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Premium Coffee"
        bgImage={CoffeeImg}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Coffee" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Coffee Beans Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Expertly roasted coffee beans from the world&apos;s finest
            coffee-growing regions. Each batch is carefully roasted to bring out
            the unique flavors and aromas.
          </p>
        </div>

        {/* Coffee Grid */}
        {loading ? (
          <p className="text-center text-gray-500">
            Loading coffee products...
          </p>
        ) : coffees.length === 0 ? (
          <p className="text-center text-gray-500">No coffee products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffees.map((coffee) => (
              <ProductCard key={coffee.id} {...coffee} />
            ))}
          </div>
        )}

        {/* Roasting Process */}
        <section className="mt-8 bg-amber-50 rounded-2xl p-8">
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
        </section>

        {/* Why Our Coffee Stands Out */}
        <div className="mt-10 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Our Coffee Stands Out
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-2xl">•</span>
                  <span>
                    Directly sourced from high-altitude coffee farms for
                    exceptional quality
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-2xl">•</span>
                  <span>
                    Freshly roasted in small batches to ensure maximum flavor
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-2xl">•</span>
                  <span>
                    Sustainable farming practices supporting local farmers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-2xl">•</span>
                  <span>
                    Wide variety: Single origin, blends, espresso & decaf
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-2xl">•</span>
                  <span>
                    Strict quality control and cupping tests before export
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src={CoffeeBeans}
                alt="Coffee beans collection"
                className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Coffee Origins Map */}
        <div className="mt-10 bg-white rounded-3xl p-6 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sourced from the World&apos;s Best Coffee Regions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our coffee comes from world-renowned regions, each celebrated for
              producing unique flavor profiles and rich aromatic beans.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ethiopia
              </h3>
              <p className="text-gray-700">
                Floral, fruity & wine-like single-origin coffee
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Colombia
              </h3>
              <p className="text-gray-700">
                Balanced flavor, smooth body & nutty aroma
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Brazil</h3>
              <p className="text-gray-700">
                Chocolatey notes, mild acidity & full-bodied taste
              </p>
            </div>
          </div>
        </div>

        {/* Benefits of Coffee */}
        <div className="mt-10 bg-gradient-to-r from-amber-50 to-white rounded-3xl p-6 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Health Benefits of Coffee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Coffee is more than just a morning ritual. It offers several
              health benefits when consumed in moderation.
            </p>
          </div>
          <ul className="space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
            <li>☕ Boosts energy and improves focus</li>
            <li>🧠 Enhances brain function and memory</li>
            <li>💪 Rich in antioxidants, protecting your body</li>
            <li>❤️ May lower the risk of heart disease</li>
            <li>⚡ Supports better physical performance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
