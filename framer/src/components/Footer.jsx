/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-[90vw] h-[1px] bg-gray-300 mx-auto"></div>
      <div className="max-w-[1100px] flex  justify-between    w-[100%] my-6 mx-auto py-6 ">
        <div>
          <img
            className="w-[200px]"
            src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
            alt=""
          />
        </div>
        <ul>
          <li>Features</li>
          <li>FAQ</li>
          <li>Pricing</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div className="max-w-[1100px] flex  justify-between   w-[100%] my-6 mx-auto py-6 ">
        <h2 className="text-gray-600">© 2023 ManageWise, Inc.</h2>
        <h2 className="text-gray-600 ">Developed By Jyoti Kumari</h2>
      </div>
    </>
  );
};

export default Footer;
