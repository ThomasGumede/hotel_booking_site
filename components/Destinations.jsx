import React from 'react'
import Btn from "./SharedComponents/Btn";
import HotelCard from "./SharedComponents/HotelCard";

const Destinations = () => {
    return (
      <div className="px-2 md:max-cont mb-28 my-14 space-y-9 flex flex-col md:flex-row items-center w-full h-full justify-center md:space-x-9">
        <div className="relative  md:w-[500px] p-5">
          <HotelCard
            img="/img/imgs1.jpg"
            title="Umngeni Hotel"
            destination="Empangeni, Umhlathuze"
            bed="3"
            bath="1"
            sqm="50.4"
            price="R120"
            shadow="shadow-myxl"
            href='12'
          />
          <div className="absolute -bottom-20 left-56 space-y-4 p-3 hidden sm:block sm:w-[290px] shadow-myxl bg-white rounded-xl">
            <img
              src="/img/h16.jpg"
              alt=""
              className="w-full h-[150px] rounded-xl shadow-xl"
            />
            <div className="block space-y-3">
              <h1 className="font-bold text-xl text-h1-color md:leading-relaxed">
                View Hotels
              </h1>
              <p className="text-base text-btn-color font-regular leading-relaxed">
                76, 000 <span className="text-gray-500">Hotels</span>
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5 md:w-[490px]">
          <h1 className="font-bold text-2xl md:text-4xl text-h1-color md:leading-relaxed">
            Popular Destinations
          </h1>
          <p className="text-base text-gray-500 font-regular leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem praesentium facilis totam cupiditate aliquam
            doloremque quos debitis ea cum. Ullam.
          </p>
          <div className="w-32">
            <Btn href="/listings">Discover</Btn>
          </div>
        </div>
      </div>
    );
}

export default Destinations
