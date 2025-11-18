import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import toast from "react-hot-toast";
import BannerImg from "../../assets/hero-img/hero-img1.jpeg";
import Apple from "../../assets/products/fruits/apple.jpeg";
const API_URL = "https://api.imfoodss.com";

const FreshFruits = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch fruits products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_URL}/product/getallproducts?category=fruit`
      );

      const filtered = (res.data || [])
        .filter((p) => p.category?.toLowerCase() === "fruit")
        .map((p) => ({
          ...p,
          id: p._id || p.id,
        }));

      setFruits(filtered);
    } catch (error) {
      toast.error("Failed to fetch fruit products.");
      console.error("Error fetching fruit products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Fresh Organic Fruits | Apples, Bananas, Mangoes & More</title>
        <meta
          name="description"
          content="Buy fresh organic fruits online including apples, bananas, oranges, mangoes, grapes, and berries. Handpicked from local farms and delivered within 24 hours."
        />
        <meta
          name="keywords"
          content="fresh fruits, organic fruits, apples, bananas, oranges, mangoes, grapes, berries, farm fresh fruits, healthy fruits online"
        />
        <meta name="author" content="IM Foods" />
        <link
          rel="canonical"
          href="https://www.imfoodss.com/products/fresh-fruits"
        />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Fresh Fruits"
        bgImage={BannerImg}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Fresh Fruits" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fresh Organic Fruits Online
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Handpicked fresh fruits delivered daily from local farms. Packed
            with vitamins, minerals, and natural sweetness for a healthy
            lifestyle.
          </p>
        </div>

        {/* Fruits Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading fruits...</p>
        ) : fruits.length === 0 ? (
          <p className="text-center text-gray-500">No fruits available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fruits.map((fruit) => (
              <ProductCard key={fruit.id} {...fruit} />
            ))}
          </div>
        )}

        {/* Farm to Table Section */}
        <section className="mt-8 bg-orange-50 rounded-2xl p-8">
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
        </section>

        {/* Why Our Fruits Stand Out */}
        <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-3xl p-12 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Our Fruits Stand Out
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>Handpicked daily from trusted organic farms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>No artificial ripening agents or preservatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>Rich in natural flavor, aroma, and nutrients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>Strict quality checks for freshness and safety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>Supporting sustainable farming communities</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src={Apple}
                alt="Fresh fruits basket"
                className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Sourced from the World’s Best Fruit Regions */}
        <div className="mt-10 bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sourced from the World’s Best Fruit Regions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our fruits are sourced from renowned orchards and farms across the
              world, ensuring you get only the finest varieties bursting with
              flavor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">India</h3>
              <p className="text-gray-700">Mangoes, Bananas, Guavas</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Spain</h3>
              <p className="text-gray-700">Oranges, Grapes, Lemons</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                South America
              </h3>
              <p className="text-gray-700">Avocados, Papayas, Pineapples</p>
            </div>
          </div>
        </div>

        {/* Health Benefits Section */}
        <section className="mt-10 bg-gradient-to-r from-pink-50 to-yellow-50 rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Health Benefits of Fresh Fruits
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Regular consumption of fresh fruits boosts immunity, improves
              digestion, supports heart health, and provides essential vitamins
              and antioxidants for overall well-being.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700 text-lg">
              <li className="bg-white p-6 rounded-xl shadow-md">
                🍎 Rich in Fiber
              </li>
              <li className="bg-white p-6 rounded-xl shadow-md">
                🍊 Boosts Immunity
              </li>
              <li className="bg-white p-6 rounded-xl shadow-md">
                🍇 High in Antioxidants
              </li>
              <li className="bg-white p-6 rounded-xl shadow-md">
                🥭 Natural Energy Source
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FreshFruits;
