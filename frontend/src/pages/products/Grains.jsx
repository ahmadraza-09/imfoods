import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "../../components/ProductCard";
import BannerImg from "../../assets/products/grains-and-cereal/rice.png";
const API_URL = "https://api.imfoodss.com";

const Grains = () => {
  const [grains, setGrains] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/product/getallproducts?category=grain`
      );

      const filtered = (res.data || [])
        .filter((p) => p.category?.toLowerCase() === "grain")
        .map((p) => ({
          ...p,
          id: p._id || p.id,
        }));

      setGrains(filtered);
    } catch (error) {
      toast.error("Failed to fetch grain products.");
      console.error("Error fetching grain products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
        <link rel="canonical" href="https://www.imfoodss.com/products/grains" />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Wholesome Grains"
        bgImage={BannerImg}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Wholesome Grains" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nutrient-rich whole grains that form the foundation of healthy
            meals. Our grains are carefully processed to retain their natural
            goodness and nutritional value.
          </p>
        </div>

        {/* Grains Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {grains.map((grain) => (
            <ProductCard key={grain.id} {...grain} />
          ))}
        </div>

        {/* Farm to Table Section */}
        <section className="mt-8 bg-yellow-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Farm to Table Freshness
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              All our grains are sourced directly from certified farms and
              delivered to you shortly after harvest, ensuring maximum freshness
              and nutritional value.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-8 bg-white shadow-lg rounded-2xl p-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Benefits of Wholesome Grains
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
            <li>🌾 Rich in fiber and essential nutrients</li>
            <li>💪 Supports heart health and digestion</li>
            <li>🌱 Naturally gluten-free options available</li>
            <li>🍃 Sustainably grown for a healthier planet</li>
            <li>🤝 Supports local and traditional farming communities</li>
          </ul>
        </section>

        {/* Why Choose Our Grains */}
        <section className="mt-8 bg-yellow-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose IMFoods Grains?
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li>🌾 Sourced from regions with ideal growing conditions</li>
                <li>🍃 Minimal processing to retain nutrients</li>
                <li>💧 Carefully harvested for maximum freshness</li>
                <li>🌍 Quality checked and exported worldwide</li>
                <li>🤝 Supporting sustainable farming and communities</li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src={BannerImg}
                alt="Wholesome Grains"
                className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Sourced Regions */}
        <section className="mt-8 bg-white rounded-3xl p-6 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sourced from the World&apos;s Best Grain Regions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our grains are sourced from regions renowned for their fertile
              soils and traditional farming methods that yield premium quality
              grains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">India</h3>
              <p className="text-gray-700">Basmati Rice, Millet, Barley</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">USA</h3>
              <p className="text-gray-700">Quinoa, Oats</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Europe</h3>
              <p className="text-gray-700">Brown Rice, Specialty Grains</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Grains;
