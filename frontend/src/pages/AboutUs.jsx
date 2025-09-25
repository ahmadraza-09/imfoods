import React from "react";
import { Users, Award, Leaf, Heart } from "lucide-react";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet";
import AboutSectionImg from "../assets/about-section-img.jpeg";

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

  const pageUrl = "https://imfoodss.com/about";

  return (
    <div className="min-h-screen ">
      {/* SEO Helmet */}
      <Helmet>
        <title>About IMFoods | Leading Food Exporter from India</title>
        <meta
          name="description"
          content="Learn more about IMFoods Pvt. Ltd., a global exporter of high-quality Indian food products including spices, fruits, vegetables, pulses, oils, tea, and coffee. Discover our story, values, and mission."
        />
        <meta
          name="keywords"
          content="About IMFoods, food export company India, Indian food exporters, organic food supplier, wholesale food distribution, Indian spices, fruits export, vegetables export, pulses export, global food trade"
        />
        <meta
          property="og:title"
          content="About IMFoods | Leading Food Exporter from India"
        />
        <meta
          property="og:description"
          content="IMFoods Pvt. Ltd. brings the richness of India's natural harvests to global kitchens. Learn about our story, values, and mission."
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      {/* Banner */}
      <Banner
        title="About Im Foods"
        bgImage={AboutSectionImg}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
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
              IMFoods Pvt. Ltd. is a global export company committed to
              delivering the finest quality raw food products from India to the
              world. With deep roots in agriculture and a passion for purity, we
              specialize in sourcing and exporting a diverse range of natural
              food commodities including spices, pulses, edible oils, fresh
              fruits, vegetables, tea, coffee, and grains.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At IMFoods, we take pride in our rigorous quality standards,
              ethical sourcing, and strong supply chain network. Whether
              you&apos;re a wholesaler, distributor, or food manufacturer, we
              offer customized export solutions tailored to your needs —
              ensuring freshness, consistency, and timely delivery every time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Driven by trust, transparency, and long-term partnerships, our
              mission is to bring the richness of India’s natural harvests to
              kitchens and markets across the globe.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Let IMFoods be your trusted partner in global food trade —
              wherever you are in the world.
            </p>
          </div>
          <div>
            <img
              src={AboutSectionImg}
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
        {/* <div className="bg-green-50 rounded-2xl p-8">
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
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
