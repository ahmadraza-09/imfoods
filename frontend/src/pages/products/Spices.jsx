import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
import Banner from "../../components/Banner";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "react-hot-toast";
import BannerImg from "../../assets/products/spices/spices.jpeg";
const API_URL = "https://api.imfoodss.com";

const Spices = () => {
  const [spices, setSpices] = useState([]);

  // ✅ Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/product/getallproducts?category=spice`
      );

      // ✅ Ensure only spice category comes in state
      const filtered = (res.data || [])
        .filter((p) => p.category?.toLowerCase() === "spice") // case-insensitive
        .map((p) => ({
          ...p,
          id: p._id || p.id,
        }));

      setSpices(filtered);
    } catch (error) {
      toast.error("Failed to fetch spice products.");
      console.error("Error fetching spice products:", error);
    }
  };

  useState(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen ">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Premium Spices | Authentic Indian & Global Spices</title>
        <meta
          name="description"
          content="Explore premium spices including turmeric, black pepper, cinnamon, cumin, cardamom, saffron, garam masala & more. Authentic, organic & globally sourced spices."
        />
        <meta
          name="keywords"
          content="spices, premium spices, black pepper, turmeric powder, cumin seeds, cinnamon sticks, cardamom pods, saffron, star anise, garam masala, organic spices, Indian spices, spice blends"
        />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Premium Spices"
        bgImage={BannerImg}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: "Premium Spices" },
        ]}
      />

      {/* Page Content (kept same) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our extensive collection of authentic spices sourced from
            the finest spice gardens around the world. Each spice is carefully
            selected, processed, and packaged to preserve its natural oils,
            aroma, and flavor intensity.
          </p>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {spices.map((spice, index) => (
            <ProductCard key={index} {...spice} />
          ))}
        </div>
        {/* Info Section */}{" "}
        <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-3xl p-12">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {" "}
            <div>
              {" "}
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {" "}
                Why Our Spices Stand Out{" "}
              </h2>{" "}
              <ul className="space-y-4 text-gray-700 text-lg">
                {" "}
                <li className="flex items-start">
                  {" "}
                  <span className="text-green-600 mr-3 text-2xl">•</span>{" "}
                  <span>
                    {" "}
                    Direct sourcing from heritage spice gardens for maximum
                    freshness and authenticity{" "}
                  </span>{" "}
                </li>{" "}
                <li className="flex items-start">
                  {" "}
                  <span className="text-green-600 mr-3 text-2xl">•</span>{" "}
                  <span>
                    {" "}
                    Zero artificial colors, preservatives, or flavor enhancers -
                    just pure spices{" "}
                  </span>{" "}
                </li>{" "}
                <li className="flex items-start">
                  {" "}
                  <span className="text-green-600 mr-3 text-2xl">•</span>{" "}
                  <span>
                    {" "}
                    Traditional processing methods combined with modern
                    packaging to retain essential oils{" "}
                  </span>{" "}
                </li>{" "}
                <li className="flex items-start">
                  {" "}
                  <span className="text-green-600 mr-3 text-2xl">•</span>{" "}
                  <span>
                    {" "}
                    Comprehensive quality testing for purity, potency, and
                    microbiological safety{" "}
                  </span>{" "}
                </li>{" "}
                <li className="flex items-start">
                  {" "}
                  <span className="text-green-600 mr-3 text-2xl">•</span>{" "}
                  <span>
                    {" "}
                    Sustainable farming partnerships supporting local
                    communities worldwide{" "}
                  </span>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <img
                src={BannerImg}
                alt="Spice collection"
                className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Spice Origins Map */}{" "}
        <div className="mt-10 bg-white rounded-3xl p-8 shadow-lg">
          {" "}
          <div className="text-center mb-12">
            {" "}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {" "}
              Sourced from the World&apos;s Best Spice Regions{" "}
            </h2>{" "}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {" "}
              Our spices come from renowned spice-growing regions, each known
              for producing specific varieties with unique characteristics and
              superior quality.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              {" "}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                India
              </h3>{" "}
              <p className="text-gray-700">
                {" "}
                Turmeric, Cardamom, Black Pepper, Cumin{" "}
              </p>{" "}
            </div>{" "}
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
              {" "}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {" "}
                Sri Lanka{" "}
              </h3>{" "}
              <p className="text-gray-700">
                Ceylon Cinnamon, Cloves, Nutmeg
              </p>{" "}
            </div>{" "}
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl">
              {" "}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {" "}
                Guatemala{" "}
              </h3>{" "}
              <p className="text-gray-700">Green Cardamom, Allspice</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Spices;
