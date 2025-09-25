import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import CategoryShowcase from "../components/CategoryShowcase";
import TestimonialsSection from "../components/TestimonialsSection";
import CommitmentSection from "../components/CommitmentSection ";
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import ContactUsSection from "../components/ContactUsSection";

const HomePage = () => {
  return (
    <>
      {/* Helmet SEO Meta Tags */}
      <Helmet>
        <title>Food Products Exporter in India | IMFoods</title>
        <meta
          name="description"
          content="IMFoods is a leading food products exporter in India. We export spices, fruits, vegetables, pulses, grains, tea, coffee, and oils worldwide with assured quality and timely delivery."
        />
        <meta
          name="keywords"
          content="IMFoods, food export India, Indian food exporters, organic food export, spices export, fruits export, vegetables export, pulses export, rice export, grains export, tea exporter, coffee exporter, edible oils exporter"
        />
        <link rel="canonical" href="https://imfoodss.com/" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="IMFoods | Food Products Exporter in India"
        />
        <meta
          property="og:description"
          content="Exporting premium quality Indian spices, fruits, vegetables, grains, pulses, oils, tea & coffee worldwide."
        />
        <meta
          property="og:image"
          content="https://imfoods.com/images/og-image.jpg"
        />
        <meta property="og:url" content="https://imfoodss.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IMFoods | Food Products Exporter in India"
        />
        <meta
          name="twitter:description"
          content="Trusted Indian exporter of spices, fruits, vegetables, pulses, grains, oils, tea & coffee worldwide."
        />
        <meta
          name="twitter:image"
          content="https://imfoodss.com/images/og-image.jpg"
        />
      </Helmet>

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <CategoryShowcase />
      <FeaturesSection />
      <BlogSection />
      <CommitmentSection />
      <TestimonialsSection />
      <StatsSection />
      {/* <NewsLetterSignupSection /> */}
      <ContactUsSection />
    </>
  );
};

export default HomePage;
