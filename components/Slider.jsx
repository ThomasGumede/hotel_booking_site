import React from 'react'
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Slider = ({children }) => {
    return (
      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          breakpoints={{
            300: {
              slidesPerView: 1.2,
              spaceBetween: 3,
            },
            400: {
              slidesPerView: 1.3,
              spaceBetween: 3,
            },
            490: {
              slidesPerView: 1.7,
              spaceBetween: 3,
            },
            600: {
              slidesPerView: 2.5,
              spaceBetween: 3,
            },

            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            1200: {
              slidesPerView: 4,
              spaceBetween: 60,
            },

            1400: {
              slidesPerView: 4.1,
            },
            1640: {
              slidesPerView: 4.3,
            },
          }}
        >
          {children}
        </Swiper>
      </div>
    );
}

export default Slider
