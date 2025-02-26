import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex max-md:flex-col max-md:gap-20 justify-around items-center my-10">
        <div className="flex flex-col gap-3 w-1/3 max-md:w-4/5">
          <h1 className="text-7xl text-black hover:italic">Hi, I'm Harshit</h1>
          <h2 className="text-5xl text-teal-800 hover:italic">
            A Web Developer
          </h2>
          <p className="text-black text-xl hover:italic">
            I always try to give my best to make a website and in best design
            possible. Welcome to my portfolio.
          </p>
          <button
            type="button"
            className="text-teal-800 font-bold border-4 border-teal-800 rounded-full text-xl bg-white w-fit px-8 py-1 hover:text-white hover:bg-teal-800 hover:ease-out hover:duration-300"
          >
            <Link to="/social">Contact Me</Link>
          </button>
        </div>
        <div className="flex flex-col items-center relative w-1/2 max-md:w-4/5">
          <img
            src="site1.jpg"
            alt="site"
            className="w-2/3 mb-48 mt-24 hover:shadow-2xl hover:shadow-teal-800 hover:-translate-2 hover:transition -z-20"
          />
          <img
            src="site2.jpg"
            alt="site"
            className="absolute h-2/3 bottom-0 right-0 hover:shadow-2xl hover:shadow-teal-800 hover:-translate-2 hover:transition -z-10"
          />
          <img
            src="site3.jpg"
            alt="site"
            className="absolute w-1/4 top-0 left-0 max-md:top-10 max-md:left-8 hover:shadow-2xl hover:shadow-teal-800 hover:-translate-2 hover:transition -z-10"
          />
          <img
            src="site4.jpg"
            alt="site"
            className="absolute h-1/4 w-2/3 left-10 max-md:left-0 max-md:bottom-12 bottom-6 hover:shadow-2xl hover:shadow-teal-800 hover:-translate-2 hover:transition -z-10"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <span className="material-symbols-outlined copyright-icon mx-2">
          copyright
        </span>
        <span className="text-4xl">By Moon</span>
        <span className="text-teal-800 text-4xl">Deity</span>
      </div>
    </>
  );
};

export default Home;
