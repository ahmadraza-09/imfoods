import React from "react";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import Banner from "../components/Banner";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      info: "123 Fresh Market Street, Farm City, FC 12345",
    },
    { icon: Phone, title: "Phone", info: "+1 (555) 123-4567" },
    { icon: Mail, title: "Email", info: "info@imfoods.com" },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Helmet SEO Meta Tags */}
      <Helmet>
        <title>
          Contact IMFoods | Global Food Products Exporter from India
        </title>
        <meta
          name="description"
          content="Get in touch with IMFoods Pvt. Ltd. for inquiries about exporting Indian spices, fruits, vegetables, pulses, grains, oils, tea & coffee worldwide. Contact us today for B2B partnerships and bulk food exports."
        />
        <meta
          name="keywords"
          content="Contact IMFoods, food export contact India, Indian food exporters inquiries, bulk food orders, B2B food trade, wholesale food supply India, organic food export contact, spices exporter India, fruits exporter India, vegetables exporter India, pulses grains exporter India"
        />
        <link rel="canonical" href="https://imfoods.com/contact" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Contact IMFoods | Global Food Exporter from India"
        />
        <meta
          property="og:description"
          content="Reach IMFoods for bulk food exports and global trade partnerships. Exporting spices, fruits, vegetables, pulses, grains, tea, coffee & oils worldwide."
        />
        <meta
          property="og:image"
          content="https://imfoods.com/images/contact-og.jpg"
        />
        <meta property="og:url" content="https://imfoods.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact IMFoods | Global Food Exporter from India"
        />
        <meta
          name="twitter:description"
          content="Looking to import Indian food products? Contact IMFoods for quality exports of spices, vegetables, fruits, grains, pulses, oils, tea & coffee."
        />
        <meta
          name="twitter:image"
          content="https://imfoods.com/images/contact-og.jpg"
        />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Contact Us"
        bgImage="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact" }]}
      />

      {/* Rest of your content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Get in touch with our team for any
            questions, feedback, or support you might need.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <contact.icon className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-600 text-sm">{contact.info}</p>
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-green-700 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Send us a message
              </h2>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gray-200 h-46 rounded-2xl flex items-center justify-center">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321555.8161586449!2d76.76354931726667!3d28.64428744177972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e1!3m2!1sen!2sin!4v1756838140232!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>

            {/* Additional Info */}
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Visit Our Store
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Come visit our flagship store to experience our products
                firsthand. Our knowledgeable staff is always ready to help you
                find the perfect ingredients for your needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 text-green-700 mr-3" />
                  <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 text-green-700 mr-3" />
                  <span>Saturday: 9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 text-green-700 mr-3" />
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Do you offer organic products?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Yes, we have a wide selection of certified organic products
                    across all categories.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    What are your delivery areas?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We deliver to most metropolitan areas. Contact us to check
                    if we deliver to your location.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Do you offer bulk discounts?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Yes, we offer special pricing for bulk orders. Please
                    contact our sales team for details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
