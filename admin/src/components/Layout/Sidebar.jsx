import React from "react";
import {
  LayoutDashboard,
  Package,
  FileText,
  MessageSquare,
  LogOut,
  Users,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const Sidebar = ({ activeTab, onTabChange, isOpen, onClose }) => {
  const { logout } = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "products", label: "Products", icon: Package },
    { id: "blogs", label: "Blog Posts", icon: FileText },
    { id: "contacts", label: "Contact Queries", icon: MessageSquare },
    { id: "users", label: "Users", icon: Users },
  ];

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
    fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-xl
    flex flex-col justify-between transition-transform duration-300 ease-in-out
    lg:translate-x-0 lg:static
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b shadow-sm">
            <h1 className="text-xl font-bold text-gray-800 tracking-wide">
              Admin Panel
            </h1>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* User info */}
          <div className="p-6 border-b bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center shadow">
                <span className="text-white font-bold text-lg">
                  {user?.name?.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">{user?.name}</p>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-3">
            <ul>
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        onTabChange(item.id);
                        onClose();
                      }}
                      className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                  ${
                    activeTab === item.id
                      ? "bg-green-700 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100 hover:shadow-sm"
                  }
                `}
                    >
                      <Icon
                        size={20}
                        className={
                          activeTab === item.id ? "text-white" : "text-gray-600"
                        }
                      />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 hover:shadow-sm transition-all duration-200"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
