import React from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

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
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
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
            <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Interactive Map Would Go Here</p>
              </div>
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
