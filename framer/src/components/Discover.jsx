/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const Discover = () => {
  return (
    <div className="flex flex-col items-center w-full ">
      <div className="h-[50vh] flex flex-col items-center justify-end">
        <h5 className="bg-white p-2 rounded-xl text-purple-500 text-sm flex items-center gap-2">
          {" "}
          <MdOutlineWavingHand className="text-yellow-600" />
          PREMIER FEATURES
        </h5>
        <h1 className="text-[#121212] font-bold text-[2.4rem] px-[4rem] text-center">
          Discover our product's
          <span className="text-[#FB923C]">Capabilities </span>
        </h1>
        <p className="text-[#57534E] w-[75%] text-center pt-3 font-semibold">
          Don't settle for mediocrity - embrace the future of management with
          Manage Wise.
        </p>
      </div>
      <div className="w-[40%] px-10 bg-purple-100 font-bold h-[50vh] flex items-center justify-center">
        <h4 className="text-3xl">
          <div className="   rounded-3xl flex justify-center items-center bg-white w-[50px] h-[50px]">
            <FaStar className="text-yellow-700" />
          </div>
          Boost productivity and streamline workflow with us. Enjoy our
          intuitive interface and robust features.
        </h4>
      </div>
      <div className="flex flex-col items-center my-10  ">
        <div className="flex flex-col  rounded-2xl items-center border w-[60%]">
          <img
            className="w-[100%]"
            src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024"
            alt=""
          />
          <div className="py-6">
            <h3 className="text-gray-900 font-bold text-2xl">
              Smart Task Management
            </h3>
            <p className="text-sm text-gray-600 font-semibold">
              Say goodbye to chaos with our smart task management system
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-10 w-[50vw]  ">
        <div className="flex flex-col  rounded-2xl items-center border w-[100%] ">
          <img
            className=""
            src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512"
            alt=""
          />
          <div className="py-6">
            <h3 className="text-gray-900 font-bold text-2xl">
              Flexible Scheduling
            </h3>
            <p className="text-sm text-gray-600 font-semibold">
              Stay productive with our flexible scheduling system
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-10 w-[50vw]  ">
        <div className="flex flex-col  rounded-2xl items-center border w-[100%] ">
          <img
            className=""
            src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512"
            alt=""
          />
          <div className="py-6">
            <h3 className="text-gray-900 font-bold text-2xl">
              Easy Communications
            </h3>
            <p className="text-sm text-gray-600 font-semibold">
              Collaborate seamlessly with your team in real-time
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-10 w-[50vw]  ">
        <div className="flex flex-col  rounded-2xl items-center border w-[100%] ">
          <img
            className=""
            src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512"
            alt=""
          />
          <div className="py-6">
            <h3 className="text-gray-900 font-bold text-2xl">Analytics</h3>
            <p className="text-sm text-gray-600 font-semibold">
              Gain valuable insights with our advanced analytics feature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
