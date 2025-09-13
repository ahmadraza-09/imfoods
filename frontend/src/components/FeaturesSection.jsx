import React from "react";
import { Leaf, ShieldCheck, Truck, Star } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Sourced directly from organic farms for pure quality.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Guaranteed",
      description: "Every product goes through strict quality checks.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable worldwide shipping.",
    },
    {
      icon: Star,
      title: "Customer Trusted",
      description: "Thousands of happy customers across the globe.",
    },
  ];
  return (
    <section className="pt-15 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Im Foods?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re committed to bringing you the finest natural foods with
            uncompromising quality, sustainability, and exceptional customer
            service that sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 shadow-lg">
                <feature.icon className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
