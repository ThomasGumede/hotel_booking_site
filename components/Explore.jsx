import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import ExploreCard from "./ExploreCard";

import Slider from './Slider'

import Btn from "./Btn";
import data from "../data/hotels.data"

const Explore = () => {


    return (
      <div className="px-2 md:max-cont space-y-6 md:space-y-8 flex flex-col my-14 w-full h-full">
        <div className="flex w-full items-center justify-between">
          <div className="space-y-4">
            <h1 className="font-bold text-2xl md:text-4xl text-h1-color md:leading-relaxed">
              Explore Neaby
            </h1>
            <p className="text-base text-gray-500 font-regular leading-relaxed">
              Find the best place to stay anywhere or near you
            </p>
          </div>
          <div className="hidden md:block">
            <Btn href="/">Explore More</Btn>
          </div>
        </div>
        <Slider>
          {data.map((data) => (
            <SwiperSlide key={data.id}>
              <ExploreCard
                img={data.imgLocation}
                title={data.location}
                para={data.description}
                id={data.id}
              />
            </SwiperSlide>
          ))}
        </Slider>
        <div className="md:hidden w-32 block self-center justify-self-center">
          <Btn href="/locations">Explore More</Btn>
        </div>
      </div>
    );
}

export default Explore
