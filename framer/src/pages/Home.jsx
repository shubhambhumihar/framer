/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Explore from "../components/Explore";
import Faq from "../components/Faq";
import Pricing from "../components/Pricing";
import Reveiws from "../components/Reveiws";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="h-[100vh] w-[100%] bg-[#FFEDD5]">
      <Navbar />
      <Banner />
      <Explore />
      <Faq />
      <Pricing />
      <Reveiws />
      <Footer />
    </div>
  );
};

export default Home;
