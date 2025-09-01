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

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CategoryShowcase />
      <TestimonialsSection />
      <CommitmentSection />
      <NewsLetterSignupSection />
    </>
  );
};

export default HomePage;
