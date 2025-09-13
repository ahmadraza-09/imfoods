import React from "react";
import NewsletterSignup from "./NewsletterSignup";

const NewsLetterSignupSection = () => {
  return (
    <>
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
};

export default NewsLetterSignupSection;
