import React from 'react'

import FooterCard from "./FooterCard";
import FooterItems from "./FooterItems";
import { BsArrowRightShort } from "react-icons/bs";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="space-y-4 m-12 relative bg-back-color">
      <div>
        <a href="/" className="logo">
          Exclusive BnB
        </a>
      </div>

      <hr />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:grid-cols-5">
        <div className="space-y-6">
          <h1 className="font-sans2 text-2xl text-gray-800">
            Join Our Newsletter
          </h1>
          <div className="flex flex-col space-y-4 md:space-y-0  lg:flex-row lg:items-center space-x-4">
            <input
            type="text"
              name="text"
              id=""
              placeholder="Enter your email"
              className="bg-transparent outline-none text-sm border-b-[2px] border-gray-400 px-2 w-[160px]"
            />
            <BsArrowRightShort
                         
              className="w-[30px] h-[30px] home rounded-full hover:animate-bounce"
            />
          </div>
          <div className="flex items-center space-x-3">
            <FaFacebook
                         
              className="w-[25px] h-[25px] text-h1-color cursor-pointer hover:animate-bounce"
            />
            <FaTwitter
                         
              className="w-[25px] h-[25px] text-h1-color cursor-pointer hover:animate-bounce"
            />
            <FaInstagram
                         
              className="w-[25px] h-[25px] text-h1-color cursor-pointer hover:animate-bounce"
            />
            <FaYoutube
                         
              className="w-[25px] h-[25px] text-h1-color cursor-pointer hover:animate-bounce"
            />
          </div>
        </div>

        <FooterCard title="Services">
          <FooterItems href="#home">Booking</FooterItems>
          <FooterItems href="#home">24/7 Services</FooterItems>
        </FooterCard>
        <FooterCard title="Quick Links">
          <FooterItems href="#home">Menu</FooterItems>
          <FooterItems href="#home">Listings</FooterItems>
          <FooterItems href="#home">Booking</FooterItems>
        </FooterCard>
        <FooterCard title="Help">
          <FooterItems href="#home">Contact</FooterItems>
          <FooterItems href="#home">Support</FooterItems>
          <FooterItems href="#home">FAQ</FooterItems>
        </FooterCard>
      </div>
    </div>
  );
};

export default Footer;
