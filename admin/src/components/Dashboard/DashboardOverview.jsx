import React from "react";
import { Package, FileText, MessageSquare, Users, Star } from "lucide-react";
import StatsCard from "./StatsCard";
import { storage } from "../../utils/storage";

const DashboardOverview = () => {
  const products = storage.getProducts();
  const blogs = storage.getBlogs();
  const contacts = storage.getContacts();
  const users = storage.getUsers();

  const newContacts = contacts.filter((c) => c.status === "new").length;
  const totalProducts = products.length;
  const inStockProducts = products.filter((p) => p.inStock).length;
  const avgRating =
    products.reduce((acc, p) => acc + p.rating, 0) / products.length || 0;

  const recentActivities = [
    {
      type: "contact",
      message: "New contact query from John Smith",
      time: "2 hours ago",
      icon: MessageSquare,
      color: "blue",
    },
    {
      type: "product",
      message: 'Product "Premium Basmati Rice" updated',
      time: "4 hours ago",
      icon: Package,
      color: "green",
    },
    {
      type: "blog",
      message: "New blog post published",
      time: "1 day ago",
      icon: FileText,
      color: "purple",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Products"
          value={totalProducts}
          icon={Package}
          color="blue"
          trend={{ value: 12, isUp: true }}
        />
        <StatsCard
          title="Blog Posts"
          value={blogs.length}
          icon={FileText}
          color="green"
          trend={{ value: 8, isUp: true }}
        />
        <StatsCard
          title="New Queries"
          value={newContacts}
          icon={MessageSquare}
          color="yellow"
          trend={{ value: 3, isUp: false }}
        />
        <StatsCard
          title="Total Users"
          value={users.length}
          icon={Users}
          color="purple"
          trend={{ value: 15, isUp: true }}
        />
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
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
              <div className="flex items-center space-x-1">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="font-semibold">{avgRating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Contact Status
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">New</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                {contacts.filter((c) => c.status === "new").length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Responded</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium">
                {contacts.filter((c) => c.status === "responded").length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Resolved</span>
              <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                {contacts.filter((c) => c.status === "resolved").length}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full bg-${activity.color}-50`}>
                    <Icon className={`h-4 w-4 text-${activity.color}-600`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 truncate">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
