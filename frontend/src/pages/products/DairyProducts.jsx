import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import axios from "axios";
import { toast } from "react-hot-toast";
import ProductCard from "../../components/ProductCard";
import Dairy from "../../assets/category-img/dairy.avif";
const API_URL = "https://api.imfoodss.com";

const DairyProducts = () => {
  const [dairyProducts, setDairyProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch only dairy products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_URL}/product/getallproducts?category=dairy`
      );

      const filtered = (res.data || [])
        .filter((p) => p.category?.toLowerCase() === "dairy")
        .map((p) => ({
          ...p,
          id: p._id || p.id,
        }));

      setDairyProducts(filtered);
    } catch (error) {
      toast.error("Failed to fetch dairy products.");
      console.error("Error fetching dairy products:", error);
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
        <title>Fresh Dairy Products | Milk, Cheese, Yogurt & Butter</title>
        <meta
          name="description"
          content="Shop fresh dairy products including milk, cheese, yogurt, butter, and cream. Sourced from trusted farms to ensure quality and freshness."
        />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Fresh Dairy Products"
        bgImage={Dairy}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Dairy Products" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Dairy Products Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our dairy products are sourced from trusted farms, ensuring
            freshness, high quality, and rich taste for every household.
          </p>
        </div>

        {/* Dairy Products Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading dairy products...</p>
        ) : dairyProducts.length === 0 ? (
          <p className="text-center text-gray-500">No dairy products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dairyProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}

        {/* Production Process */}
        <section className="mt-8 bg-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Dairy Production Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From milking to packaging, we follow strict hygiene and quality
              protocols to ensure that every product reaching your home is fresh
              and wholesome.
            </p>
          </div>
        </section>

        {/* Why Our Dairy Products Stand Out */}
        <div className="mt-10 bg-gradient-to-r from-blue-50 to-white rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our Dairy Products
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">•</span>
                  <span>Fresh milk from trusted farms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">•</span>
                  <span>High-quality cheese, butter, and yogurt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">•</span>
                  <span>Produced with strict hygiene standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">•</span>
                  <span>Rich in nutrients and great taste</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src={Dairy}
                alt="Dairy products"
                className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Dairy Types */}
        <div className="mt-10 bg-white rounded-3xl p-6 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explore Our Dairy Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from a variety of dairy products to meet your daily needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Milk</h3>
              <p className="text-gray-700">
                Fresh and pasteurized milk for everyday use
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cheese</h3>
              <p className="text-gray-700">
                Variety of cheese including cheddar, mozzarella, and more
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Yogurt & Butter
              </h3>
              <p className="text-gray-700">
                Creamy yogurt and butter made with fresh milk
              </p>
            </div>
          </div>
        </div>

        {/* Health Benefits */}
        <div className="mt-10 bg-gradient-to-r from-blue-50 to-white rounded-3xl p-6 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Health Benefits of Dairy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dairy products provide essential nutrients like calcium, protein,
              and vitamins.
            </p>
          </div>
          <ul className="space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
            <li>🥛 Supports strong bones and teeth</li>
            <li>💪 Helps build and repair muscles</li>
            <li>🧠 Good for brain and nervous system</li>
            <li>❤️ Promotes heart health when consumed moderately</li>
            <li>⚡ Provides energy for daily activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DairyProducts;
