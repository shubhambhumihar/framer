/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import Card from "./Card";

const Pricing = () => {
  return (
    <>
      <div className="max-w-[1100px] flex justify-center   w-[100%] my-6 mx-auto ">
        <div className="flex flex-col items-center">
          <h5 className="bg-white w-[90px] border mb-2 text-center flex justify-center items-center py-2 rounded-xl text-purple-500 text-sm gap-2">
            {" "}
            <MdOutlineWavingHand className="text-yellow-600" />
            Pricing
          </h5>
          <h2 className="text-4xl font-bold text-[#121212]">
            Select your ideal <span className="text-[#ea580c]">Pricing </span>{" "}
            plan
          </h2>
          <h4 className="text-gray-600 font-bold text-md my-3">
            At Manage Wise, we believe in providing you with <br /> pricing
            plans that adapt to your unique needs.
          </h4>
        </div>
      </div>
      <div className="max-w-[1100px] flex flex-col gap-4 justify-center items-center   w-[100%] my-6 mx-auto ">
        <Card />
        <Card bg="black" wh="white" />
        <Card />
      </div>
    </>
  );
};

export default Pricing;
