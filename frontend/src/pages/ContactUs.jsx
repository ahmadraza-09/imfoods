import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import Banner from "../components/Banner";
import axios from "axios";
import { toast } from "react-hot-toast";
import BannerBg from "../assets/contact-section-img.jpeg";

const API_URL = "https://api.imfoodss.com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formError, setFormError] = useState("");

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      info: "Delhi",
    },
    { icon: Phone, title: "Phone", info: "+919667866491" },
    { icon: Mail, title: "Email", info: "contact@imfoodss.com" },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { name, phone, email, subject } = formData;

    if (!name || !phone || !email || !subject) {
      setFormError("Please fill all required fields");
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/contact/addcontact`, formData);

      if (res.data.status === 200) {
        toast.success("Message Sent Successfully");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setFormError("");
      } else {
        setFormError(res.data.message || "Something went wrong");
      }
    } catch (error) {
      setFormError("Contact request failed. Please try again later.");
      toast.error("Contact request failed. Please try again later.");
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Helmet SEO Meta Tags */}
      <Helmet>
        <title>
          Contact IMFoods | Global Food Products Exporter from India
        </title>
        <meta
          name="description"
          content="Get in touch with IMFoods Pvt. Ltd. for inquiries about exporting Indian spices, fruits, vegetables, pulses, grains, oils, tea & coffee worldwide."
        />
        <link rel="canonical" href="https://imfoodss.com/contact" />
      </Helmet>

      {/* Banner */}
      <Banner
        title="Contact Us"
        bgImage={BannerBg}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact" }]}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to hear from you! Get in touch with our team for any
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
            {formError && <p className="text-red-600 text-sm">{formError}</p>}
            <form className="space-y-6" onSubmit={submitHandler}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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

          {/* Map */}
          <div className="space-y-8">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321555.8161586449!2d76.76354931726667!3d28.64428744177972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e1!3m2!1sen!2sin!4v1756838140232!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
