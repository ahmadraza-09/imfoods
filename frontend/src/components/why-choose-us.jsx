import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Get Buyers for Your Food Products",
      text: "No matter the type of food or spice you plan on exporting, we will ensure that you get genuine buyers for your products who meet your expectations.",
    },
    {
      number: "02",
      title: "Best quality food trading services",
      text: "Our stringent policies make sure that food handling and trading is in accordance with international quality standards.",
    },
    {
      number: "03",
      title: "Global Presence",
      text: "Even if you are planning to export across multiple continents, we’ve got you covered. Our global presence will allow your products to be exported to various countries.",
    },
    {
      number: "04",
      title: "Market Analysis & Up-to-date Market Information",
      text: "Our thorough and regular analysis and research let us update our database with up-to-date information on the market and allows us to stay on top of every update.",
    },
    {
      number: "05",
      title: "Reliable & Trusted Services",
      text: "Trust is a pillar of our services. Our transparent and reliable operations ensure that you feel at ease with our services.",
    },
    {
      number: "06",
      title: "Save your time & cost for searching markets",
      text: "Understanding and researching the market by yourself can be expensive and time-consuming. But with Pisum, we will do that for you instead.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            WHY CHOOSE US ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-6 items-start bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex-shrink-0">
                <h3 className="text-3xl font-bold text-red-600">
                  {reason.number}
                </h3>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {reason.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
