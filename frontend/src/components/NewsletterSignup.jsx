import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10">
        <Mail className="h-12 w-12 mx-auto mb-4 text-green-200" />
        <h2 className="text-3xl font-bold mb-4">
          Stay Fresh with Our Newsletter
        </h2>
        <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
          Get weekly updates on new products, seasonal recipes, health tips, and
          exclusive offers delivered to your inbox.
        </p>

        {isSubscribed ? (
          <div className="flex items-center justify-center space-x-2 text-green-200">
            <CheckCircle className="h-6 w-6" />
            <span className="text-lg font-medium">
              Thank you for subscribing!
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 bg-white border-0 focus:ring-4 focus:ring-green-300/50 text-lg"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-lg"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
