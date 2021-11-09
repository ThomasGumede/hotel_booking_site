import React, { useState } from "react";
import Layout from "../../components/Layout";
import data from "../../data/all_hotels.data";
import { BiBed, BiBath } from "react-icons/bi";

const HotelDetailsScreen = ({ id }) => {
  // Get the hotel using the id from the data file
  const hotel = data.filter((data) => data.id === id);

  

  const [formData, setFormData] = useState({
    check_in: "2021-11-05",
    check_out: "2021-11-05",
    number_of_people: 0,
    email: "",
    full_name: "",
  });

  const { check_in, check_out, number_of_people, email, full_name } = formData; //values from date states

  const datecalc = (d = check_in, d2 = check_out) => {
    // This function calculates number of days that the visitor(s) will stay

    // generate date using date() javascripts object
    let date1 = new Date(d);
    let date2 = new Date(d2);

    //calculate time difference
    var time_difference = date2.getTime() - date1.getTime();

    //calculate days difference by dividing total milliseconds in a day
    var days_difference = time_difference / (1000 * 60 * 60 * 24);

    return days_difference;
  };

  // this javascript function changes the values(dates for check_in and check_out, number_of_people, ) when user enters the dates
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // submitting form
  const formSubmit = (e) => {
    alert(
      "You have successfully submitted your booking information, please check your emails for payment process"
    );
  };

  return (
    <Layout>
      <div className="px-2 md:max-cont mt-20 my-15 flex flex-col md:flex-row justify-center space-x-4 items-center">
        {hotel.map((data) => (
          
          <div
            key={data.id}
            className="space-y-4 md:space-y-0 md:w-[950px] bg-white shadow-xl rounded-xl h-full flex flex-col md:flex-row justify-center space-x-4 items-center"
          >
            
            <div className="relative group">
              <img
                src={data.otherImg}
                alt=""
                className="md:w-[450px] md:h-[600px] rounded-xl"
              />
              <div className="absolute opacity-0 group-hover:opacity-100 -bottom-full w-full group-hover:bottom-0 text-start bg-glass space-y-4 p-4 backdrop-blur-xl rounded-t-md  transition duration-500">
                <h4 className="font-sans text-h1-color text-xl font-semibold">
                  {data.name}
                </h4>
                <hr />
                <div className="flex items-center justify-between w-full mb-3 space-x-3">
                  <p className="text-base font-semibold text-white">Price </p>
                  <p className="text-base font-semibold text-white">
                    {data.price} <span className="text-gray-500 text-lg md:text-xl">
                    / night
                  </span>
                  </p>
                </div>
                <hr />
                <div className="flex items-center justify-between w-full mb-3 space-x-3">
                  <p className="text-base font-semibold text-white">Discount </p>
                  <p className="text-base font-semibold text-white">
                    {data.discount}%
                  </p>
                </div>
                <hr />
                <div className="flex items-center w-full justify-between mb-2">
                  <p className="text-base font-semibold flex items-center text-white font-regular leading-relaxed">
                    <BiBed className="mr-3 text-lg" />
                    {data.sqm} sqm
                  </p>
                  <p className="text-base font-semibold flex items-center text-white font-regular leading-relaxed">
                    <BiBed className="mr-3 text-lg" /> {data.bed} bedrooms
                  </p>
                  <p className="text-base font-semibold flex items-center text-white font-regular leading-relaxed">
                    <BiBath className="mr-3 text-lg" />
                    {data.bath} bathroom
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 block p-3 md:w-[500px] md:h-[600px]">
              <div className="font-bold text-h1-color text-2xl">
                <h1>Booking info</h1>
              </div>

              <form
                action="/listings"
                method="post"
                className="space-y-5"
                onSubmit={(e) => formSubmit(e)}
              >
                <input
                  className="focus:border-btn-color focus:outline-none focus:bg-white w-full border-b border-solid h-9  border-gray-500 text-sm text-btn-color"
                  type="text"
                  id="name"
                  placeholder="Full name(s)"
                  name="full_name"
                  value={full_name}
                  onChange={(e) => onChange(e)}
                  required
                />
                <input
                  className="focus:border-btn-color focus:outline-none focus:bg-white w-full border-b border-solid h-9 border-gray-500 text-sm text-btn-color"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
                <input
                  type="tel"
                  name="telphone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="focus:border-btn-color focus:outline-none focus:bg-white w-full border-b border-solid h-9 border-gray-500 text-sm text-btn-color"
                />
                <input
                  className="focus:border-btn-color focus:outline-none focus:bg-white w-full border-b border-solid h-9 border-gray-500 text-sm text-btn-color"
                  type="number"
                  id="number"
                  placeholder="Enter number of visitor"
                  name="number_of_people"
                  value={number_of_people}
                  onChange={(e) => onChange(e)}
                  required
                />

                <div className="flex items-center justify-between w-full">
                  <div className="w-full md:w-[200px]  h-24 flex flex-col  items-start justify-center px-3 space-y-2">
                    <label
                      className="text-base text-h1-color font-medium"
                      htmlFor="date-start"
                    >
                      Check-in{" "}
                      <span className="text-sm text-gray-500 font-regular">
                        (mm/dd/yyy)
                      </span>
                    </label>
                    <input
                      className="focus:border-btn-color focus:outline-none focus:bg-white w-full border-b border-solid h-9 border-gray-500 text-sm text-btn-color"
                      type="date"
                      name="Check-in"
                      id="date-start"
                      min={check_in}
                      name="check_in"
                      value={check_in}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="w-full md:w-[200px]  h-24 flex flex-col  items-start justify-center px-3 space-y-2">
                    <label
                      className="text-base text-h1-color font-medium"
                      htmlFor="Check-out"
                    >
                      Check-out{" "}
                      <span className="text-sm text-gray-500 font-regular">
                        (mm/dd/yyy)
                      </span>
                    </label>
                    <input
                      className="focus:border-btn-color focus:outline-none focus:bg-white w-full border-b border-solid h-9 border-gray-500 text-sm text-btn-color"
                      type="date"
                      name="Check-out"
                      id="Check-out"
                      min={check_in}
                      name="check_out"
                      value={check_out}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-3 w-full block">
                  <div className="flex items-center justify-between w-full mb-3 space-x-3">
                    <p className="text-base font-semibold text-h1-color">Days :</p>
                    <p className="text-base font-semibold text-btn-color">
                      {datecalc(check_in, check_out)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-full mb-3 space-x-3">
                    <p className="text-base font-semibold text-h1-color">
                      Number of visitors :
                    </p>
                    <p className="text-base font-semibold text-btn-color">
                      {number_of_people}
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-full mb-3 space-x-3">
                    <p className="text-base font-semibold text-h1-color">
                      Discount({`${data.discount}%`}) :
                    </p>
                    <p className="text-base font-semibold text-btn-color">
                      R
                      {datecalc(check_in, check_out) *
                        data.price *
                        (data.discount / 100)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-full mb-3 space-x-3">
                    <p className="text-base font-semibold text-h1-color">
                      Total price :
                    </p>
                    <p className="text-base font-semibold text-btn-color">
                      R
                      {datecalc(check_in, check_out) * data.price -
                        datecalc(check_in, check_out) *
                          data.price *
                          (data.discount / 100)}
                    </p>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  placeholder="Submit"
                  className="rounded-xl mb-3 hover:shadow-2xl text-center border-2 border-solid border-btn-color hover:border-white bg-btn-color py-2 px-3 hover:bg-white transition-all duration-3000 w-full text-white text-sm md:text-base font-regular hover:text-btn-color"
                />
              </form>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

HotelDetailsScreen.getInitialProps = ({ query: { id } }) => {
  return { id };
};

export default HotelDetailsScreen;
