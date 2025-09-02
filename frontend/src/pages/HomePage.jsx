import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import CategoryShowcase from "../components/CategoryShowcase";
import TestimonialsSection from "../components/TestimonialsSection";
import CommitmentSection from "../components/CommitmentSection ";
import NewsLetterSignupSection from "../components/NewsLetterSignupSection";
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import ContactUsSection from "../components/ContactUsSection";

const HomePage = () => {
  return (
    <>
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
