import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "react-hot-toast";
import ProductCard from "../../components/ProductCard";
import BannerImg from "../../assets/category-img/pulses.jpeg";
const API_URL = "https://api.imfoodss.com";

const Pulses = () => {
  const [pulses, setPulses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_URL}/product/getallproducts?category=pulse`
      );

      const filtered = (res.data || [])
        .filter((p) => p.category?.toLowerCase() === "pulse")
        .map((p) => ({
          ...p,
          id: p._id || p.id,
        }));

      setPulses(filtered);
    } catch (error) {
      toast.error("Failed to fetch pulses products.");
      console.error("Error fetching pulses products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Premium Pulses & Lentils | Healthy Plant Protein</title>
        <meta
          name="description"
          content="Buy premium pulses & lentils like kidney beans, chickpeas, moong dal, masoor dal, black lentils, and split peas. Rich in protein and fiber, perfect for healthy meals."
        />
        <meta
          name="keywords"
          content="pulses, lentils, kidney beans, chickpeas, moong dal, masoor dal, black lentils, split peas, vegetarian protein, organic pulses, healthy legumes"
        />
        <link rel="canonical" href="https://www.imfoodss.com/products/pulses" />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Premium Pulses & Lentils"
        bgImage={BannerImg}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Premium Pulses & Lentils" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Rich in protein and essential nutrients, our pulses are carefully
            selected for quality, freshness, and nutritional value. Perfect for
            healthy, delicious meals.
          </p>
        </div>

        {/* Pulses Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading pulses...</p>
        ) : pulses.length === 0 ? (
          <p className="text-center text-gray-500">No pulses found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pulses.map((pulse) => (
              <ProductCard key={pulse.id} {...pulse} />
            ))}
          </div>
        )}

        {/* Farm to Table Section */}
        <section className="mt-16 bg-yellow-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Farm to Table Freshness
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our pulses are sourced directly from trusted farms and delivered
              shortly after harvesting, ensuring maximum freshness, flavor, and
              nutritional value.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-6 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Health Benefits of Our Pulses
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
            <li>🌱 Rich in plant-based protein and fiber</li>
            <li>💪 Supports heart and digestive health</li>
            <li>🥗 Perfect for vegetarian and vegan diets</li>
            <li>🍃 Natural and chemical-free</li>
            <li>🌍 Sustainably sourced from local farmers</li>
          </ul>
        </section>

        {/* Why Choose Our Pulses */}
        <section className="mt-8 bg-yellow-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose IMFoods Pulses?
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li>🌱 Selected from high-quality farms</li>
                <li>💧 Cleaned and minimally processed to retain nutrients</li>
                <li>🍃 No additives, preservatives, or chemicals</li>
                <li>🌍 Exported globally with quality assurance</li>
                <li>🤝 Supporting sustainable farming communities</li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src={BannerImg}
                alt="Premium Pulses"
                className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Sourced Regions */}
        <section className="mt-8 bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sourced from the Finest Regions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pulses are sourced from regions renowned for high-quality
              legumes, ensuring superior taste, nutrition, and freshness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">India</h3>
              <p className="text-gray-700">Moong Dal, Masoor Dal, Chickpeas</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Middle East
              </h3>
              <p className="text-gray-700">Kidney Beans, Lentils</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Africa</h3>
              <p className="text-gray-700">Black-eyed Peas, Split Peas</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pulses;
