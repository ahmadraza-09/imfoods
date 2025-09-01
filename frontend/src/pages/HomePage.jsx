import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HeroSlider from "../components/hero-slider";
import PopularProducts from "../components/popular-products";
import WhyChooseUs from "../components/why-choose-us";
import ProductRange from "../components/product-range";
import YoutubeVideo from "../components/youtube-video";
import ClientSection from "../components/cleints-section";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <PopularProducts />
      <WhyChooseUs />
      <ProductRange />
      <YoutubeVideo />
      <ClientSection />
      <Footer />
    </>
  );
};

export default HomePage;
