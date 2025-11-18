import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ProductCard from "../../components/ProductCard";
import BannerImg from "../../assets/category-img/oil.jpg";
const API_URL = "https://api.imfoodss.com";

const Oil = () => {
  const [oils, setOils] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/product/getallproducts?category=oil`
      );

      const filtered = (res.data || [])
        .filter((p) => p.category?.toLowerCase() === "oil")
        .map((p) => ({
          ...p,
          id: p._id || p.id,
        }));

      setOils(filtered);
    } catch (error) {
      toast.error("Failed to fetch Oil products.");
      console.error("Error fetching Oil products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Premium Cooking Oils | IMFoods Exporter India</title>
        <meta
          name="description"
          content="Discover IMFoods' premium selection of cooking oils including olive oil, coconut oil, avocado oil, sesame oil, sunflower oil, and mustard oil. Pure, cold-pressed, and exported globally."
        />
        <meta
          name="keywords"
          content="IMFoods, oil exporter India, olive oil export, coconut oil supplier, avocado oil India, sesame oil exporter, sunflower oil wholesale, mustard oil supplier, cooking oil export"
        />
        <link rel="canonical" href="https://www.imfoodss.com/products/oil" />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Premium Cooking Oils"
        bgImage={BannerImg}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Premium Cooking Oils" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            High-quality cooking oils for every culinary need. From
            heart-healthy olive oil to traditional mustard oil, we offer pure,
            unrefined oils for authentic flavors.
          </p>
        </div>

        {/* Oils Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {oils.map((oil) => (
            <ProductCard key={oil.id} {...oil} />
          ))}
        </div>

        {/* Farm to Table Section */}
        <section className="mt-8 bg-orange-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Farm to Table Freshness
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our oils are sourced directly from certified farms and delivered
              to you shortly after pressing, ensuring maximum freshness, flavor,
              and health benefits.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-8 bg-white shadow-lg rounded-2xl p-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Benefits of Our Oils
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
            <li>🌿 Cold-pressed to retain natural nutrients</li>
            <li>💪 Supports heart and overall health</li>
            <li>🍳 Perfect for cooking, baking, and dressings</li>
            <li>🌱 Pure, unrefined, and chemical-free</li>
            <li>🤝 Sustainably sourced from trusted farmers</li>
          </ul>
        </section>

        {/* Why Choose Our Oils */}
        <section className="mt-8 bg-orange-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose IMFoods Oils?
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li>
                  🌿 Sourced from regions with ideal climates for each oil type
                </li>
                <li>💧 Cold-pressed for maximum nutrients</li>
                <li>🍃 No additives, preservatives, or chemicals</li>
                <li>🌍 Quality checked and exported globally</li>
                <li>🤝 Supporting sustainable farming communities</li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src={BannerImg}
                alt="Premium Oils"
                className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Sourced Regions */}
        <section className="mt-8 bg-white rounded-3xl p-6 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sourced from the World&apos;s Finest Oil Regions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our oils come from regions renowned for high-quality and authentic
              oil production, ensuring superior taste and nutrition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Mediterranean
              </h3>
              <p className="text-gray-700">Olive Oil, Sunflower Oil</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">India</h3>
              <p className="text-gray-700">
                Mustard Oil, Coconut Oil, Sesame Oil
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                South America
              </h3>
              <p className="text-gray-700">Avocado Oil, Specialty Oils</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Oil;
