import React from "react";
import { Star } from "lucide-react";
import client8 from "../assets/our-clients/box8.png";
import leaf from "../assets/icons/leaf.png";

const ClientSection = () => {
  return (
    <>
      <div className="bg-gray-50">
        {/* Testimonials Section */}
        <section
          className="relative py-20 bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/img/banner/testimonial2.jpg')" }}
          id="top-space"
        >
          <div className="text-center mb-12">
            <img src={leaf} alt="icon" className="mx-auto w-12 h-12" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              What Our Clients Say!
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-black/70 p-8 rounded-2xl shadow-lg">
            <img
              src="/img/testimonial/CYDA_Logo.png"
              alt="CYDA Logo"
              className="mx-auto h-16 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
              A Great Big Thank You
            </h3>
            <p className="mb-3">
              We take the opportunity to convey our gratitude for swiftly
              supplying us with prompt and efficient delivery of the Kits at the
              time of crisis.
            </p>
            <p className="mb-3">
              We really admire the dedication and teamwork in making us get our
              order in time. We shall highly recommend your esteemed
              organization and look forward to developing good relations.
            </p>
            <p className="mb-4">Thanks once again for the entire team!</p>

            <div className="text-sm italic">
              Centre For Youth Development & Activities (CYDA), Pune
            </div>

            <div className="flex justify-center mt-4 text-yellow-400">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>

            <div className="mt-6">
              <img
                src="/img/certificates/test.png"
                alt="Certificate"
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Why Indian Market Section */}
        <section className="py-20 bg-white">
          <div className="text-center mb-12">
            <img src={leaf} alt="icon" className="mx-auto w-12 h-12" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Why the Indian Market is Best?
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6">
            {[
              {
                title: "Agriculture Base",
                desc: "India’s agriculture workforce makes it one of the leading exporters worldwide.",
              },
              {
                title: "Affordable Rates",
                desc: "Cheap labour and raw materials allow production at great affordable rates.",
              },
              {
                title: "Best Quality Food Products",
                desc: "All products go through quality assurance tests and certifications.",
              },
              {
                title: "Variety of Spices and Tastes",
                desc: "Known as the land of spices, India boasts a huge variety of flavors.",
              },
              {
                title: "Diversity of India and Indian Culture",
                desc: "Each region brings unique blends and flavors unmatched globally.",
              },
              {
                title: "Technology and Innovation",
                desc: "India’s tech advancements make international trade easier.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-2 text-green-600">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 bg-gray-100">
          <div className="text-center mb-12">
            <img src={leaf} alt="icon" className="mx-auto w-12 h-12" />
            <h2 className="text-3xl md:text-4xl font-bold">Our Clients</h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
            <img
              src={client8}
              alt="Client 1"
              className="mx-auto h-20 object-contain"
            />
            <img
              src={client8}
              alt="Client 2"
              className="mx-auto h-20 object-contain"
            />
            <img
              src={client8}
              alt="Client 3"
              className="mx-auto h-20 object-contain"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ClientSection;
