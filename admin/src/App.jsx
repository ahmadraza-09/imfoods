import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { storage } from "./utils/storage";
import "./App.css";

// Components
import Login from "./components/Auth/Login";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import DashboardOverview from "./components/Dashboard/DashboardOverview";
import ProductsManager from "./components/Products/ProductsManager";
import BlogManager from "./components/Blog/BlogManager";
import ContactManager from "./components/Contact/ContactManager";
import UsersManager from "./components/Users/UsersManager";

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Initialize storage data on app start
  useEffect(() => {
    storage.init();
  }, []);

  if (!isAuthenticated) {
    return <Login />;
  }

  const getPageTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Dashboard Overview";
      case "products":
        return "Products Management";
      case "blogs":
        return "Blog Management";
      case "contacts":
        return "Contact Queries";
      case "users":
        return "Users Management";
      default:
        return "Dashboard";
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "products":
        return <ProductsManager />;
      case "blogs":
        return <BlogManager />;
      case "contacts":
        return <ContactManager />;
      case "users":
        return <UsersManager />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          title={getPageTitle()}
        />

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
