/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between px-10 py-3 items-center">
      <div>
        <img
          className="w-[60px]"
          src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
          alt=""
        />
      </div>
      <div className="flex gap-5 items-center">
        <ul className="flex gap-8">
          <li>
            <a href="">Features</a>
          </li>

          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Testimmonials</a>
          </li>
        </ul>

        <button>Buy Template</button>
      </div>
    </div>
  );
};

export default Navbar;
