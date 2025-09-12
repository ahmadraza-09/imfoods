import React, { useState, useEffect } from "react";
import { Package, FileText, MessageSquare, Star } from "lucide-react";
import StatsCard from "./StatsCard";
import { storage } from "../../utils/storage";
import { toast } from "react-hot-toast";
import axios from "axios";

const DashboardOverview = () => {
  // const contacts = storage.getContacts();
  const users = storage.getUsers();

  const [products, setProducts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);

  // ✅ Fake growth percentage logic
  const calculateTrend = (current, previous) => {
    if (previous === 0) return { value: 100, isUp: true };
    const diff = ((current - previous) / previous) * 100;
    return { value: Math.abs(diff.toFixed(1)), isUp: diff >= 0 };
  };

  const newContacts = contacts.filter((c) => c.status === "new").length;
  const totalProducts = products.length;
  const inStockProducts = products.filter((p) => p.inStock).length;
  const avgRating =
    products.reduce((acc, p) => acc + (p.rating || 0), 0) / products.length ||
    0;

  // ✅ Fake last month numbers (replace with API if needed)
  const trends = {
    products: calculateTrend(totalProducts, 10),
    blogs: calculateTrend(blogs.length, 5),
    queries: calculateTrend(newContacts, 2),
    users: calculateTrend(users.length, 8),
  };

  // 📌 Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/product/getallproducts"
      );
      setProducts(res.data);
    } catch (error) {
      toast.error("Failed to fetch product listings.");
      console.error("Failed to fetch product listings.", error);
    }
  };

  // 📌 Fetch products
  const fetchContacts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/contact/getallcontacts"
      );
      setContacts(res.data);
    } catch (error) {
      toast.error("Failed to fetch contact listings.");
      console.error("Failed to fetch contact listings.", error);
    }
  };

  // 📌 Fetch blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/blog/getallblogs");
      setBlogs(res.data);
    } catch (error) {
      toast.error("Failed to fetch blog listings.");
      console.error("Failed to fetch blog listings.", error);
    }
  };

  // 📌 Fetch recent activities
  const fetchActivities = async () => {
    try {
      const res = await axios.get("http://localhost:8000/activity/");
      setRecentActivities(res.data.slice(0, 5)); // show latest 5
      // console.log(res.data);
    } catch (error) {
      toast.error("Failed to fetch recent activities.");
      console.error("Failed to fetch recent activities.", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchBlogs();
    fetchActivities();
    fetchContacts();
  }, []);

  return (
    <div className="space-y-8 p-6">
      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="Total Products"
          value={totalProducts}
          icon={Package}
          color="blue"
          trend={trends.products}
        />
        <StatsCard
          title="Blog Posts"
          value={blogs.length}
          icon={FileText}
          color="green"
          trend={trends.blogs}
        />
        <StatsCard
          title="New Queries"
          value={newContacts}
          icon={MessageSquare}
          color="yellow"
          trend={trends.queries}
        />
        {/* <StatsCard
          title="Total Users"
          value={users.length}
          icon={Users}
          color="purple"
          trend={trends.users}
        /> */}
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Stats */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Product Statistics
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">In Stock</span>
              <span className="font-semibold text-green-600">
                {inStockProducts}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Out of Stock</span>
              <span className="font-semibold text-red-600">
                {totalProducts - inStockProducts}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Rating</span>
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-current w-5 h-5" />
                <span className="font-semibold">{avgRating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Stats */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Contact Status
          </h3>
          <div className="space-y-4">
            {["new", "responded", "resolved"].map((status) => (
              <div key={status} className="flex justify-between items-center">
                <span className="capitalize text-gray-600">{status}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    status === "new"
                      ? "bg-blue-100 text-blue-600"
                      : status === "responded"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {contacts.filter((c) => c.status === status).length}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow overflow-y-auto max-h-[400px]">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivities.length === 0 ? (
              <p className="text-gray-500 text-sm">No recent activity</p>
            ) : (
              recentActivities.map((activity, index) => {
                const Icon =
                  activity.type === "product"
                    ? Package
                    : activity.type === "blog"
                    ? FileText
                    : MessageSquare;
                const color =
                  activity.type === "product"
                    ? "green"
                    : activity.type === "blog"
                    ? "purple"
                    : "blue";

                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div
                      className={`p-3 rounded-xl bg-${color}-50 text-${color}-600 flex-shrink-0`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-800 truncate">
                        {activity.message}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(activity.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
