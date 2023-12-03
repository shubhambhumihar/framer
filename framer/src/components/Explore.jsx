/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import Integrate from "./Integrate";
const Explore = () => {
  return (
    <div className=" w-full bg-[#27272A] text-white pt-16 px-16 ">
      <div className="w-[95%] my-0 mx-auto">
        <div className="">
          <h5 className="bg-white w-[120px] mb-2 text-center flex justify-center p-2 rounded-xl text-purple-500 text-sm items-center gap-2">
            {" "}
            <MdOutlineWavingHand className="text-yellow-600" />
            And More...
          </h5>
          <h2 className="text-white font-semibold text-4xl ">
            Explore an array of features that elevate your{" "}
            <span className="text-yellow-600">Productivity </span> to new
            heights
          </h2>
          <p className="w-[50%] py-3 text-xl font-semibold text-gray-500">
            Discover the tools that will revolutionize the way you manage and
            optimize your operations
          </p>
        </div>

        <div className="rounded-2xl s2 my-6  h-[50vh] flex flex-col justify-center items-center px-6 bg-[#171717]">
          <div className="w-[70px] rounded-2xl flex justify-center items-center my-2 bg-purple-600 text-white h-[70px]">
            <IoPhonePortraitOutline className="text-2xl" />
          </div>
          <h2 className="font-bold  text-2xl text-[#edd8d9]">
            Cross-Platform Compatibility
          </h2>
          <p className="text-center text-gray-500  font-bold">
            Enjoy the flexibility of cross-platform compatibility. Our product
            works seamlessly across desktop, web, and mobile devices, allowing
            you to work from your preferred device.
          </p>
        </div>

        <div className="rounded-2xl s2 my-6  h-[50vh] flex flex-col justify-center items-center px-6 bg-[#171717]">
          <div className="w-[70px] rounded-2xl flex justify-center items-center my-2 bg-purple-600 text-white h-[70px]">
            <FaBell className="text-2xl" />
          </div>
          <h2 className="font-bold  text-2xl text-[#edd8d9]">
            Stay Informed with Essential Notifications
          </h2>
          <p className="text-center text-gray-500  font-bold">
            Automate support from first customer contact to closing the ticket.
            Drastically improve time to resolution.Automate support from first
            customer contact to closing the ticket.
          </p>
        </div>

        <div className="rounded-2xl s2 my-6  h-[50vh] flex flex-col justify-center items-center px-6 bg-[#171717]">
          <div className="w-[70px] rounded-2xl flex justify-center items-center my-2 bg-purple-600 text-[#FFF1F2] h-[70px]">
            <FaFire className="text-2xl" />
          </div>
          <h2 className="font-bold  text-2xl text-[#edd8d9]">
            Secure Data Encryption at all times
          </h2>
          <p className="text-center text-gray-500  font-bold">
            Trust in our robust data encryption to keep your sensitive
            information safe and secure. Rest easy knowing your data is
            protected at all times.
          </p>
        </div>

        <Integrate />
      </div>
    </div>
  );
};

export default Explore;
