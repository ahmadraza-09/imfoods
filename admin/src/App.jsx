import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./components/Auth/Login";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import DashboardOverview from "./components/Dashboard/DashboardOverview";
import ProductsManager from "./components/Products/ProductsManager";
import BlogManager from "./components/Blog/BlogManager";
import ContactManager from "./components/Contact/ContactManager";
import UsersManager from "./components/Users/UsersManager";

const PrivateLayout = () => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
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
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          title={getPageTitle()}
        />
        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PrivateLayout />} />
          {/* optional explicit route for dashboard */}
          <Route path="/dashboard" element={<PrivateLayout />} />
        </Routes>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 5000,
            style: { background: "#fff", color: "#000" },
            success: {
              duration: 3000,
              iconTheme: { primary: "green", secondary: "white" },
            },
          }}
        />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
