/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import Discover from "./Discover";

const Banner = () => {
  return (
    <>
      <div className=" w-full  flex justify-center items-center">
        <div className="flex flex-col items-center ">
          <div className="h-[50vh] flex flex-col items-center justify-end">
            <h5 className="bg-white p-2 rounded-xl text-purple-500 text-sm flex items-center gap-2">
              {" "}
              <MdOutlineWavingHand className="text-yellow-600" />
              WELCOME TO MANAGE WISE!
            </h5>
            <h1 className="text-[#121212] font-bold text-[4rem] px-[4rem] text-center">
              Empower your business with{" "}
              <span className="text-[#FB923C]">Strategic </span>
              insights
            </h1>
            <p className="text-[#57534E] w-[45%] text-center pt-3">
              Powerful management platform designed to streamline your business
              operations, boost productivity, and drive success
            </p>
          </div>

          <div className="flex gap-3 items-end  h-[27vh]">
            <button className="bg-purple-600 text-white px-[3rem] py-5 rounded-xl">
              Get Started
            </button>
            <button className=" px-[3rem] py-5 rounded-xl border font-bold">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#FFEDD5] my-3 ">
        <div className="w-[80%] s1 my-0 mx-auto flex justify-center py-10 ">
          <img
            className="w-[70%] s1"
            src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048"
            alt=""
          />
        </div>
      </div>
      <Discover />
    </>
  );
};

export default Banner;
