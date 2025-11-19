import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "react-hot-toast";
import ProductCard from "../../components/ProductCard";
import BannerImg from "../../assets/products/tea/tea.jpeg";
const API_URL = "https://api.imfoodss.com";

const Tea = () => {
  const [teas, setTeas] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_URL}/product/getallproducts?category=tea`
      );

      const filtered = (res.data || [])
        .filter((p) => p.category?.toLowerCase() === "tea")
        .map((p) => ({
          ...p,
          id: p._id || p.id,
        }));

      setTeas(filtered);
    } catch (error) {
      toast.error("Failed to fetch tea products.");
      console.error("Error fetching tea products:", error);
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
        <link rel="canonical" href="https://www.imfoodss.com/products/tea" />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Premium Tea Collection"
        bgImage={BannerImg}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Premium Tea Collection" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our curated selection of premium teas from renowned tea
            gardens around the world. From energizing black teas to soothing
            herbal blends, find your perfect cup.
          </p>
        </div>

        {/* Tea Products Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading teas...</p>
        ) : teas.length === 0 ? (
          <p className="text-center text-gray-500">No teas found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teas.map((tea) => (
              <ProductCard key={tea.id} {...tea} />
            ))}
          </div>
        )}

        {/* Farm to Cup Section */}
        <section className="mt-8 bg-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Farm to Cup Freshness
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our teas are sourced directly from premium tea estates and
              delivered soon after processing, ensuring rich aroma, authentic
              taste, and maximum freshness.
            </p>
          </div>
        </section>

        {/* Health Benefits Section */}
        <section className="mt-8 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Health Benefits of Our Teas
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg max-w-3xl mx-auto">
            <li>🌱 Rich in antioxidants for overall wellness</li>
            <li>💧 Supports hydration and digestion</li>
            <li>🍵 Energizing or calming blends for every mood</li>
            <li>🍃 100% Organic and chemical-free</li>
            <li>🌍 Sustainably sourced from trusted estates</li>
          </ul>
        </section>

        {/* Why Choose Our Tea */}
        <section className="mt-8 bg-green-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose imFoods Tea?
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li>🌱 Organic and sustainably sourced</li>
                <li>🍃 Direct partnerships with premium tea estates</li>
                <li>🌍 Exported globally with strict quality assurance</li>
                <li>
                  💧 Rich aroma, authentic taste, and natural antioxidants
                </li>
                <li>🤝 Supporting local tea farming communities</li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src={BannerImg}
                alt="Premium Tea"
                className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Sourced Regions */}
        <section className="mt-8 bg-white rounded-3xl p-6 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sourced from Renowned Tea Regions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our teas are sourced from globally recognized tea-growing regions
              for exceptional quality, aroma, and taste.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">India</h3>
              <p className="text-gray-700">Assam, Darjeeling, Nilgiri</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">China</h3>
              <p className="text-gray-700">Green Tea, Oolong, White Tea</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Sri Lanka
              </h3>
              <p className="text-gray-700">Ceylon Black Tea</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tea;
