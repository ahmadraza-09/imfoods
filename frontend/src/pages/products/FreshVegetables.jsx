import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import BannerImg from "../../assets/products/vegetables/vegetable.jpeg";
const API_URL = "https://api.imfoodss.com";

const FreshVegetables = () => {
  const [vegetables, setVegetables] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/product/getallproducts?category=vegetable`
      );

      const filtered = (res.data || [])
        .filter((p) => p.category?.toLowerCase() === "vegetable")
        .map((p) => ({
          ...p,
          id: p._id || p.id,
        }));

      setVegetables(filtered);
    } catch (error) {
      toast.error("Failed to fetch vegetable products.");
      console.error("Error fetching vegetable products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Fresh Vegetables | IMFoods Exporter India</title>
        <meta
          name="description"
          content="Discover IMFoods' premium fresh vegetables like tomatoes, spinach, bell peppers, carrots, broccoli, and onions. Sustainably grown and exported worldwide."
        />
        <meta
          name="keywords"
          content="IMFoods, fresh vegetables export, organic vegetables India, vegetable exporter India, wholesale vegetables, broccoli, tomatoes, spinach, carrots, onions, bell peppers, farm fresh vegetables"
        />
        <link
          rel="canonical"
          href="https://www.imfoodss.com/products/fresh-vegetables"
        />
      </Helmet>

      {/* Banner */}
      <Banner
        title={BannerImg}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Fresh Vegetables" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Garden-fresh vegetables harvested at peak ripeness. Our vegetables
            are grown using sustainable farming practices to ensure the best
            taste and nutritional value.
          </p>
        </div>

        {/* Vegetables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vegetables.map((vegetable) => (
            <ProductCard key={vegetable.id} {...vegetable} />
          ))}
        </div>

        {/* Farm to Table Section */}
        <section className="mt-8 bg-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Farm to Table Freshness
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              All our vegetables are sourced directly from certified organic
              farms and delivered to you shortly after harvest, ensuring maximum
              freshness, flavor, and nutritional value.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-8 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Benefits of Fresh Vegetables
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
            <li>🥦 Rich in vitamins and minerals essential for health</li>
            <li>🌱 High in fiber for better digestion and gut health</li>
            <li>💧 Naturally hydrating and low in calories</li>
            <li>🍃 Sustainably grown with minimal environmental impact</li>
            <li>🌍 Supports local farmers and communities</li>
          </ul>
        </section>

        {/* Why Choose Our Vegetables */}
        <section className="mt-8 bg-green-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose IMFoods Vegetables?
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li>
                  🌱 Direct sourcing from local farms for maximum freshness
                </li>
                <li>🍃 No artificial preservatives or chemicals</li>
                <li>💧 Carefully harvested to retain nutrients and flavor</li>
                <li>🌍 Globally exported with strict quality checks</li>
                <li>🤝 Supporting sustainable farming and local communities</li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src={BannerImg}
                alt="Fresh Vegetables"
                className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Sourced Regions */}
        <section className="mt-8 bg-white rounded-3xl p-6 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sourced from the World&apos;s Best Vegetable Regions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our vegetables come from regions renowned for producing the best
              quality varieties with exceptional taste and nutritional value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">India</h3>
              <p className="text-gray-700">
                Spinach, Tomatoes, Carrots, Bell Peppers
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Netherlands
              </h3>
              <p className="text-gray-700">Cabbage, Lettuce, Cauliflower</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">USA</h3>
              <p className="text-gray-700">Broccoli, Kale, Zucchini</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FreshVegetables;
