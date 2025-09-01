import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/BlogsPage";

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

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact" element={<ContactUs />} />
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
