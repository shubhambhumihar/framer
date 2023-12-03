/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <div className="h-[100vh] w-[100%] bg-[#FFEDD5]">
      <Navbar />
      <Banner />
      <Explore />
    </div>
  );
};

export default Home;
