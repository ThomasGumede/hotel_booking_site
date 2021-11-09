import React from "react";
import Layout from "../components/Layout";
import ExploreCard from "../components/ExploreCard";
import data from "../data/hotels.data";

const Locations = () => {


  return (
    <Layout>
      <div className="space-y-4 w-full h-full flex flex-col items-center justify-center px-2 md:max-cont my-15">
        <div className="text-center space-y-3 md:w-[750px]">
          <h1 className="font-bold text-xl md:text-3xl text-h1-color md:leading-relaxed">
            Perfect locations
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-regular md:leading-relaxed">
            Find the best, affordable hotels for your next vacation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {data.map((data) => (
            <div className="" key={data.id}>
              <ExploreCard
                img={data.imgLocation}
                title={data.location}
                para={data.description}
                id={data.id}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Locations;
