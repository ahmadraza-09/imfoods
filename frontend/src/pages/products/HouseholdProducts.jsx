import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import axios from "axios";
import { toast } from "react-hot-toast";
import ProductCard from "../../components/ProductCard";
import Household from "../../assets/products/household-products/household.jpg";
const API_URL = "https://api.imfoodss.com";

const HouseholdProducts = () => {
  const [householdProducts, setHouseholdProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch only household products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_URL}/product/getallproducts?category=household`
      );

      const filtered = (res.data || [])
        .filter((p) => p.category?.toLowerCase() === "household")
        .map((p) => ({
          ...p,
          id: p._id || p.id,
        }));

      setHouseholdProducts(filtered);
    } catch (error) {
      toast.error("Failed to fetch household products.");
      console.error("Error fetching household products:", error);
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
        <title>Household Products | Cleaning, Kitchen, Laundry & More</title>
        <meta
          name="description"
          content="Shop premium household products including cleaning supplies, kitchen essentials, laundry detergents, and daily necessities. Quality products for every home."
        />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Household Products"
        bgImage={Household}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Household Products" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Household Essentials Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover a wide range of household products that make daily chores
            easier and keep your home clean, organized, and safe.
          </p>
        </div>

        {/* Household Products Grid */}
        {loading ? (
          <p className="text-center text-gray-500">
            Loading household products...
          </p>
        ) : householdProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            No household products found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {householdProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}

        {/* Production / Quality Process */}
        <section className="mt-16 bg-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quality & Safety Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our household products are tested for safety and effectiveness,
              ensuring high-quality performance for every home.
            </p>
          </div>
        </section>

        {/* Why Our Household Products Stand Out */}
        <div className="mt-10 bg-gradient-to-r from-green-50 to-white rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our Household Products
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>Safe and eco-friendly ingredients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>Durable, reliable, and long-lasting products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>Easy to use and effective for daily tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">•</span>
                  <span>Trusted by thousands of households</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src={Household}
                alt="Household products"
                className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="mt-10 bg-white rounded-3xl p-6 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explore Household Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from cleaning, kitchen, laundry, and other essential
              products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cleaning
              </h3>
              <p className="text-gray-700">
                Effective cleaning supplies for every corner of your home
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white to-green-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Kitchen</h3>
              <p className="text-gray-700">
                Essentials like cookware, utensils, and storage solutions
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Laundry</h3>
              <p className="text-gray-700">
                Laundry detergents, fabric softeners, and other laundry
                essentials
              </p>
            </div>
          </div>
        </div>

        {/* Health / Benefits */}
        <div className="mt-10 bg-gradient-to-r from-green-50 to-white rounded-3xl p-6 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits of Our Household Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed to make your home cleaner, safer, and more comfortable.
            </p>
          </div>
          <ul className="space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
            <li>🧹 Cleaner and organized home environment</li>
            <li>🌿 Safe ingredients for family and pets</li>
            <li>💪 Durable products that last longer</li>
            <li>⚡ Saves time and effort in daily chores</li>
            <li>🏠 Overall improvement in home hygiene</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HouseholdProducts;
