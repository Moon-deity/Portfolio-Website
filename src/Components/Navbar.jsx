import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [MenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!MenuVisible);
  };

  return (
    <div className="flex justify-around items-center h-20 shadow-sm">
      <div className="name font-bold hover:z-10 pr-8 text-6xl hover:underline hover:ease-in hover:duration-300">
        <Link to="/">
          <span className="text-black">Moon</span>
          <span className="text-teal-800">Deity</span>
        </Link>
      </div>
      <div>
        <button type="button" className="md:hidden" onClick={toggleMenu}>
          {MenuVisible ? (
            <span className="menu-bar material-symbols-outlined">close</span>
          ) : (
            <span className="menu-bar material-symbols-outlined">menu</span>
          )}
        </button>
        {MenuVisible && (
          <div className="absolute flex justify-end top-20 w-screen right-0 bottom-0 backdrop-blur-sm">
            <div className="flex flex-col gap-10 items-center w-60 bg-white pt-10">
              <Link
                to="/"
                className="text-5xl text-teal-800 flex justify-center gap-2"
                onClick={toggleMenu}
              >
                <span className="material-symbols-outlined nav-icons">
                  home
                </span>
                Home
              </Link>
              <Link
                to="/about"
                className="text-5xl text-teal-800 flex justify-center gap-2"
                onClick={toggleMenu}
              >
                <span className="material-symbols-outlined nav-icons">
                  info
                </span>
                About
              </Link>
              <Link
                to="/social"
                className="text-5xl text-teal-800 flex justify-center gap-2"
                onClick={toggleMenu}
              >
                <span className="material-symbols-outlined nav-icons">
                  link
                </span>
                Social
              </Link>
            </div>
          </div>
        )}
        <div className="max-md:hidden links pl-8 flex justify-center items-center text-2xl">
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
    </div>
  );
};

export default Navbar;
