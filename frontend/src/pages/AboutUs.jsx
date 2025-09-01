import React from "react";
import { Users, Award, Leaf, Heart } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly farming and packaging practices",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Rigorous quality standards for every product we offer",
    },
    {
      icon: Users,
      title: "Community",
      description: "Supporting local farmers and communities",
    },
    {
      icon: Heart,
      title: "Health",
      description: "Promoting healthy living through natural foods",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Im Foods
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over two decades, Im Foods has been your trusted partner in
            bringing the finest natural foods from farm to your table. We
            believe in the power of pure, wholesome nutrition.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded in 2003, Im Foods began as a small family business with a
              simple mission: to provide access to the highest quality natural
              foods. What started as a local venture has grown into a trusted
              name in premium food products.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We work directly with farmers and growers who share our commitment
              to sustainable agriculture and ethical practices. This direct
              relationship ensures that our customers receive the freshest, most
              flavorful products while supporting farming communities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we serve thousands of families who trust us for their daily
              nutritional needs, and we continue to expand our offerings while
              maintaining our core values of quality, sustainability, and
              community support.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Fresh produce"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Our passionate team of food experts, nutritionists, and quality
              specialists work tirelessly to ensure that every product meets our
              high standards for excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Sarah Johnson
                </h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Michael Chen
                </h3>
                <p className="text-gray-600">Head of Quality Assurance</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Emily Rodriguez
                </h3>
                <p className="text-gray-600">Lead Nutritionist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
