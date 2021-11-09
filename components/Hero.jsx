import React from "react";
import Button from "./Button";
import Btn from "./Btn";

const Hero = () => {
  return (
    <div className="px-2 md:max-cont my-14 relative mb-16 flex flex-col md:flex-row w-full h-full items-center justify-between">
      <div className="space-y-6 md:w-[600px]">
        <div className="space-y-5 text-left mb-6">
          <h1 className="font-bold text-3xl md:text-5xl text-h1-color md:leading-relaxed">
            Find Deals on hotels, resort and much more...
          </h1>
          <p className="text-base text-gray-500 font-regular leading-relaxed">
            We've got you covered with amazing deals at thousands upon thousands
            of top hotels in cities & countries worldwide.
          </p>

          <div className="flex md:hidden items-center w-full space-x-7">
            <Button href="/listings">Search</Button>
            <Btn href="/not_available">Sign up</Btn>
          </div>
        </div>
        <form
          action=""
          method="post"
          className="absolute hidden md:flex flex-col md:flex-row items-center justify-between z-40 bg-white h-20 rounded-xl shadow-2xl p-3"
        >
          <div className="w-[250px]  h-full flex flex-col  items-start justify-center px-3 space-y-2">
            <label
              className="text-lg text-h1-color font-medium"
              htmlFor="location"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="e.g KwaZulu-Natal"
              className="focus:border-none focus:outline-none w-full h-full border-none text-sm text-gray-500"
            />
          </div>

          <div className="h-full rounded-lg w-[1px] bg-h1-color"></div>

          <div className="w-[250px] h-full flex  flex-col items-start justify-center px-3 space-y-2">
            <label className="text-lg text-h1-color font-medium" htmlFor="date">
              Date
            </label>
            <input
              type="text"
              name="date"
              id="date"
              placeholder="Check in(dd/mm/yyyy)"
              className="outline-none w-full h-full border-none text-sm text-gray-500 focus:border-none"
            />
          </div>
          <div className="h-full w-[1px] rounded-lg bg-h1-color"></div>

          <div className="w-[250px] h-full flex  flex-col items-start justify-center px-3 space-y-2">
            <label
              className="text-lg text-h1-color font-medium"
              htmlFor="travelers"
            >
              Travelers
            </label>
            <input
              type="text"
              name="travelers"
              id="travelers"
              placeholder="1 Adult, 2 Children"
              className="outline-none w-full h-full border-none text-sm text-gray-500 focus:border-none"
            />
          </div>

          <Button href="/listings">Search</Button>
          <div></div>
        </form>
      </div>
      <div className="relative grid grid-cols-2 gap-4">
        <img
          src="img/img4.jpg"
          alt=""
          className="md:w-[200px] md:h-[250px] rounded-xl"
        />
        <img
          src="img/h10.jpg"
          alt=""
          className="md:w-[200px] md:h-[180px] rounded-xl md:row-span-2"
        />
        <img
          src="img/imgs1.jpg"
          alt=""
          className="md:w-[420px] md:h-[250px] rounded-xl col-start-1 col-end-3"
        />
      </div>
    </div>
  );
};

export default Hero;
