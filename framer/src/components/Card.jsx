/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";

const Card = ({ bg, wh }) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="s2  rounded-2xl bg-purple-200 h-[450px] w-[450px] p-10"
    >
      <h5 className="bg-white w-[90px] border mb-2 text-center flex justify-center items-center py-2 rounded-xl text-purple-500 text-sm gap-2">
        {" "}
        <MdOutlineWavingHand className="text-yellow-600" />
        Free
      </h5>
      <h2 style={{ color: wh }} className="text-5xl font-semibold">
        $0 <span className="text-sm">/Month</span>
      </h2>

      <div className="flex items-center mt-10 gap-3">
        <span>
          <MdOutlineWavingHand className="text-yellow-600" />
        </span>
        <p className="text-gray-500 font-bold">Access to all basic features</p>
      </div>
      <div className="flex items-center my-3 gap-3">
        <span>
          <MdOutlineWavingHand className="text-yellow-600" />
        </span>
        <p className="text-gray-500 font-bold">Access to all basic features</p>
      </div>
      <div className="flex items-center my-3 gap-3">
        <span>
          <MdOutlineWavingHand className="text-yellow-600" />
        </span>
        <p className="text-gray-500 font-bold">Access to all basic features</p>
      </div>
      <div className="flex items-center my-3 gap-3">
        <span>
          <MdOutlineWavingHand className="text-yellow-600" />
        </span>
        <p className="text-gray-500 font-bold">Access to all basic features</p>
      </div>
      <div className="h-[20vh]  flex items-end">
        <button className="border px-[20px] py-[6px] bg-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Card;
