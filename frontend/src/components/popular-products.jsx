import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import images into your assets folder
import coffee from "../assets/products/beverages/coffee-beans.png";
import tea from "../assets/products/beverages/tea.png";
import rice from "../assets/products/grains-and-cereal/rice.png";
import coconut from "../assets/products/fruits/coconut.png";
import cumin from "../assets/products/spices/cumin.png";
import turmeric from "../assets/products/spices/turmeric.png";
import potato from "../assets/products/vegetables/potato.png";
import onion from "../assets/products/vegetables/onion.png";
import leafIcon from "../assets/icons/leaf.png";

const PopularProducts = () => {
  const products = [
    { name: "Coffee", image: coffee, link: "beverages/coffee.html" },
    { name: "Tea", image: tea, link: "beverages/tea.html" },
    { name: "Rice", image: rice, link: "grains-and-cereal/rice.html" },
    { name: "Coconut", image: coconut, link: "fruits/coconut.html" },
    { name: "Cumin", image: cumin, link: "spices/cumin-seeds.html" },
    { name: "Turmeric", image: turmeric, link: "spices/turmeric.html" },
    { name: "Potato", image: potato, link: "vegetables/potato.html" },
    { name: "Onion", image: onion, link: "vegetables/onion.html" },
  ];

  return (
    <>
      {/* Intro Section */}
      <section className="pb-20 px-8">
        <div className="container mx-auto text-center">
          <div className="mb-10">
            <img src={leafIcon} alt="leaf-heading" className="mx-auto" />
            <h2 className="text-2xl md:text-3xl font-bold mt-4">
              Pisum - Global Food Importers & Exporters
            </h2>
          </div>
          <p className="text-gray-700 text-justify max-w-4xl mx-auto">
            “As the ‘land of spices’, India exports tons of various kinds of
            food. In fact, food export from India is a major source of revenue.
            To help your products reach to even the farthest corners of the
            world, Pisum Foods offers you various types of food export as well
            as spices export from India. Being among the leading food export
            companies in India, we ensure our services conform to international
            quality standards.”
          </p>
        </div>
      </section>

      {/* Product Slider Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <img src={leafIcon} alt="leaf-heading" className="mx-auto" />
            <h2 className="text-2xl md:text-3xl font-bold mt-4">
              Popular Products
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <a href={product.link}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-center">
                    <h4 className="font-medium text-lg">
                      <a href={product.link} className="hover:text-red-600">
                        {product.name}
                      </a>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
