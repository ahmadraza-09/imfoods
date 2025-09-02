import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-green-50 to-green-100"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Get in <span className="text-green-700">Touch</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Have questions, feedback, or partnership ideas? We’d love to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-600">
              Fill out the form and our team will get back to you as soon as
              possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="text-green-700 w-6 h-6" />
                <span className="text-gray-700">Delhi, India</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-green-700 w-6 h-6" />
                <span className="text-gray-700">info@imfoods.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-green-700 w-6 h-6" />
                <span className="text-gray-700">+91 98765 43210</span>
              </div>
            </div>

            <div className="mt-6">
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

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-800 shadow-md transition transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
