import React, { useState, useEffect, useRef } from "react";
import { Menu, Bell, Search, X } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
const API_URL = "https://api.razawebs.com";

const Header = ({ onMenuClick, title }) => {
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem("notificationsRead");
    return saved ? JSON.parse(saved) : [];
  });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const fetchNotifications = async () => {
    try {
      const res = await axios.get(`${API_URL}/contact/getallcontacts`);
      const newQueries = res.data
        .filter((q) => q.status === "new")
        .map((q) => {
          const readStorage = notifications.find((n) => n._id === q._id)?.read;
          return { ...q, read: readStorage || false };
        })
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setNotifications(newQueries);
    } catch (err) {
      toast.error("Failed to fetch notifications");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setNotifications((prev) => {
        const updated = prev.map((n) => ({ ...n, read: true }));
        localStorage.setItem("notificationsRead", JSON.stringify(updated));
        return updated;
      });
    }
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const created = new Date(dateString);
    const secondsAgo = Math.floor((now - created) / 1000);
    if (secondsAgo < 60) return "just now";
    if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} minute's ago`;
    if (secondsAgo < 86400)
      return `${Math.floor(secondsAgo / 3600)} hour's ago`;
    if (secondsAgo < 172800) return "1 day ago";
    if (secondsAgo < 604800)
      return `${Math.floor(secondsAgo / 86400)} day's ago`;
    if (secondsAgo < 1209600) return "1 week ago";
    if (secondsAgo < 2419200)
      return `${Math.floor(secondsAgo / 604800)} week's ago`;
    if (secondsAgo < 4838400) return "1 month ago";
    return `${Math.floor(secondsAgo / 2592000)} month's ago`;
  };

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 px-2 sm:px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between relative">
        {/* Left */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-all duration-200 shadow-sm"
          >
            <Menu size={22} className="text-gray-700" />
          </button>
          <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
            {title}
          </h2>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center relative flex-none">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 md:w-80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
            />
          </div>

          {/* Notification Bell */}
          <button
            className="relative p-2 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-sm"
            onClick={handleToggle}
          >
            <Bell size={22} className="text-gray-700" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full ring-1 ring-white animate-pulse"></span>
            )}
          </button>
        </div>

        {/* Notification Dropdown: Move OUTSIDE the flex */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-6 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
          >
            <div className="p-4 border-b font-semibold text-gray-800 flex justify-between items-center">
              <span>Notifications ({unreadCount})</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X />
              </button>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {notifications.length === 0 ? (
                <p className="p-4 text-gray-500 text-sm text-center">
                  No new queries
                </p>
              ) : (
                notifications.map((n) => (
                  <div
                    key={n._id}
                    className={`p-4 border-b cursor-pointer transition-colors duration-200 hover:bg-gray-50 flex justify-between items-start space-x-3 ${
                      !n.read ? "bg-blue-50" : "bg-white"
                    }`}
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{n.name}</p>
                      <p className="text-sm text-gray-500 truncate">
                        {n.email}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {formatTimeAgo(n.createdAt)}
                      </p>
                    </div>
                    {!n.read && (
                      <span className="h-2.5 w-2.5 bg-blue-500 rounded-full mt-1"></span>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
