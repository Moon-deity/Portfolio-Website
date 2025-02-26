import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center h-20 shadow-sm">
      <div className="name font-bold hover:z-10 pr-8 text-6xl hover:underline hover:ease-in hover:duration-300">
        <Link to="/">
          <span className="text-black">Moon</span>
          <span className="text-teal-800">Deity</span>
        </Link>
      </div>
      <div className="links pl-8 flex justify-center items-center text-2xl">
        <Link
          to="/"
          className="cursor-pointer hover:text-white px-8 hover:py-12 hover:bg-teal-800 hover:z-10 hover:rounded-full hover:ease-out hover:duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="cursor-pointer hover:text-white px-8 hover:py-12 hover:bg-teal-800 hover:z-10 hover:rounded-full hover:ease-out hover:duration-300"
        >
          About
        </Link>
        <Link
          to="/social"
          className="cursor-pointer hover:text-white px-8 hover:py-12 hover:bg-teal-800 hover:z-10 hover:rounded-full hover:ease-out hover:duration-300"
        >
          Social
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
