import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import HotelCard from "./HotelCard";
import Btn from "./Btn";
import data from "../data/hotels.data";

const Hotels = () => {


  return (
    <div className="px-2 md:max-cont space-y-6 md:space-y-8 flex flex-col mt-10 my-14 w-full h-screen mb-10">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-4">
          <h1 className="font-bold text-2xl md:text-4xl text-h1-color md:leading-relaxed">
            Get the best deal
          </h1>
          <p className="text-base text-gray-500 font-regular leading-relaxed">
            Find the best place to stay anywhere or near you
          </p>
        </div>
        <div className="hidden md:block">
          <Btn href="/listings">Explore More</Btn>
        </div>
      </div>

      <div className="">
        <Swiper
          spaceBetween={1}
          slidesPerView={1}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 3,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 3,
            },
            490: {
              slidesPerView: 1.1,
              spaceBetween: 3,
            },
            600: {
              slidesPerView: 1.5,
              spaceBetween: 3,
            },

            1000: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },

            1200: {
              slidesPerView: 3,
              spaceBetween: 60,
            },

            1400: {
              slidesPerView: 3.1,
            },
          }}
        >
          {data.map((data) => (
            
              data.hotels.map((hotel) => (

                <SwiperSlide key={hotel.id}>
                  <div className="m-5">
                    <HotelCard
                      img={hotel.img}
                      title={hotel.name}
                      destination={hotel.place}
                      bath={hotel.bath}
                      bed={hotel.bed}
                      sqm={hotel.sqm}
                      price={hotel.price}
                      id={hotel.id}
                    />
                    
                  </div>
                </SwiperSlide>
              ))
            
          ))}
        </Swiper>
      </div>

      <div className="md:hidden w-32 block self-center justify-self-center">
        <Btn href="/listings">Explore More</Btn>
      </div>
    </div>
  );
};

export default Hotels;
