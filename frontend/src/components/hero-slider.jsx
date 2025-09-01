import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slider1 from "../assets/banner/slider-1.jpg";
import slider2 from "../assets/banner/slider-2.jpg";
import slider3 from "../assets/banner/slider-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSlider = () => {
  return (
    <section className="slider-area mb-24">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-[500px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-[500px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slider1})` }}
          >
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold">
                Global Quality Food Exporter From India
              </h1>
              <h3 className="mt-4 text-lg md:text-2xl">
                We export food including raw vegetables, fruits, spices & many
                more
              </h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-[500px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slider2})` }}
          >
            {/* Empty or future content */}
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-[500px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slider3})` }}
          >
            {/* Empty or future content */}
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
