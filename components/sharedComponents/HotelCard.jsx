import React from "react";
import { BiBed, BiBath } from "react-icons/bi";
import Link from "next/link";

const HotelCard = ({ img, title, destination, sqm, bed, bath, price, shadow, id }) => {
  return (
    <div
      className={`space-y-4 p-3 sm:w-[350px] md:w-[390px] lg:w-[400px] ${shadow} bg-white rounded-xl`}
    >
      <img
        src={img}
        alt=""
        className="w-full h-[200px]  md:h-[250px] rounded-xl shadow-xl"
      />
      <div className="block space-y-4">
        <h1 className="font-bold text-xl md:text-3xl text-h1-color md:leading-relaxed">
          {title}
        </h1>
        <p className="text-lg text-gray-500 font-regular leading-relaxed">
          {destination}
        </p>
        <div className="flex items-center w-full justify-between">
          <p className="text-sm flex items-center text-gray-500 font-regular leading-relaxed">
            <BiBed className="mr-3 text-lg" />
            {sqm} sqm
          </p>
          <p className="text-sm flex items-center text-gray-500 font-regular leading-relaxed">
            <BiBed className="mr-3 text-lg" /> {bed} bedrooms
          </p>
          <p className="text-sm flex items-center text-gray-500 font-regular leading-relaxed">
            <BiBath className="mr-3 text-lg" />
            {bath} bathroom
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="font-bold text-xl md:text-2xl text-btn-color md:leading-relaxed">
            R{price}{" "}
            <span className="text-gray-500 text-lg md:text-xl">/ night</span>
          </h1>
          <div className="rounded-xl w-28 hover:shadow-2xl text-center border-2 border-solid border-btn-color hover:border-white bg-btn-color py-2 px-3 group hover:bg-white transition-all duration-3000">
            <Link href={`/details/${encodeURIComponent(id)}`}>
              <a className="text-white text-sm font-regular group-hover:text-btn-color">
                View room
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
