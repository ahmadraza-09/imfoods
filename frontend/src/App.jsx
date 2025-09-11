import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/BlogsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";

// Product Pages
import Spices from "./pages/products/Spices";
import Pulses from "./pages/products/Pulses";
import FreshFruits from "./pages/products/FreshFruits";
import FreshVegetables from "./pages/products/FreshVegetables";
import Tea from "./pages/products/Tea";
import Coffee from "./pages/products/Coffee";
import Grains from "./pages/products/Grains";
import Oil from "./pages/products/Oil";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/ScrollToTop";
import CategoryShowcase from "./components/CategoryShowcase";
import HouseholdProducts from "./pages/products/HouseholdProducts";
import DairyProducts from "./pages/products/DairyProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<CategoryShowcase />} />
          <Route path="/blogs/:title" element={<BlogDetailsPage />} />
          <Route path="/products/spices" element={<Spices />} />
          <Route path="/products/pulses" element={<Pulses />} />
          <Route path="/products/fresh-fruits" element={<FreshFruits />} />
          <Route
            path="/products/fresh-vegetables"
            element={<FreshVegetables />}
          />
          <Route path="/products/tea" element={<Tea />} />
          <Route path="/products/coffee" element={<Coffee />} />
          <Route path="/products/grains" element={<Grains />} />
          <Route path="/products/oil" element={<Oil />} />
          <Route path="/products/dairy-products" element={<DairyProducts />} />
          <Route
            path="/products/household-products"
            element={<HouseholdProducts />}
          />
        </Routes>
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#fff",
              color: "#000",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              iconTheme: {
                primary: "green",
                secondary: "white",
              },
            },
          }}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
