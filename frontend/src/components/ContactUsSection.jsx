import React from "react";
import { useNavigate } from "react-router-dom";
import { SquareArrowRight } from "lucide-react";
import ContactSectionImg from "../assets/contact-section-img.jpeg";

const ContactUsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 bg-gradient-to-br from-yellow-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Connecting India’s <span className="text-green-700">Harvests</span>{" "}
            to the World
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At <span className="font-semibold">IMFoods Pvt. Ltd.</span>, we
            export the richness of India’s natural harvests — including spices,
            pulses, grains, tea, coffee, fresh fruits, and vegetables — to
            global markets.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Backed by ethical sourcing, rigorous quality checks, and a trusted
            supply chain network, we deliver freshness and consistency to
            wholesalers, distributors, and food manufacturers worldwide.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex cursor-pointer items-center px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-xl text-lg"
          >
            <SquareArrowRight className="mr-3 h-6 w-6" />
            Contact Us
          </button>
        </div>

        {/* Right Side Food Image */}
        <div className="w-full h-[350px] md:h-[450px]">
          <img
            src={ContactSectionImg}
            alt="Delicious food"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
