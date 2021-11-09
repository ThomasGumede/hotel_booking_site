import React from 'react'
import data from "../../data/hotels.data";
import Layout from "../../components/Layout";
import HotelCard from "../../components/HotelCard";

const hotels_filter_by_location = ({ id }) => {

      const location_data = data.filter((data) => data.id === id);

    return (
      <Layout>
        <div className="space-y-4 w-full h-full flex flex-col items-center justify-center px-2 md:max-cont mt-20 my-15">
          <div className="text-center space-y-3 md:w-[750px]">
            <h1 className="font-bold text-xl md:text-3xl text-h1-color md:leading-relaxed">
              Checkout all this Hotels located in{" "}
              <span className="text-btn-color">
                {location_data.map((data) => data.location)}
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-500 font-regular md:leading-relaxed">
              Find the best, affordable hotels for your next vacation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {location_data.map((data) =>
              data.hotels.map((hotel) => (
                <div className="" key={hotel.id}>
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
              ))
            )}
          </div>
        </div>
      </Layout>
    );
}

hotels_filter_by_location.getInitialProps = ({ query: { id } }) => {
  return { id };
};

export default hotels_filter_by_location
