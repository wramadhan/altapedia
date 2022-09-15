import React from "react";
import Image from "../images/jumbo-img.png";

const Jumbotron = ({ scroll }) => {
  return (
    <div className="sm:px-20 pt-20 sm:flex justify-between">
      <div>
        <h1 className="text-[#F7731C] font-bold text-3xl mb-5 md:text-4xl text-center sm:text-left sm:pt-20">
          Everyone’s<span> </span>
          <span className="sm:hidden text-[#1B345F] font-bold text-3xl mb-5  text-center">
            Collections <span className="text-[#F7731C]">and</span> Style
          </span>
        </h1>
        <h1 className="invisible sm:visible sm:text-[#1B345F] font-bold text-3xl mb-5 md:text-4xl text-center sm:text-left">
          Collections <span className="sm:text-[#F7731C]">and</span> Style
        </h1>
        <p className="sm:mt-6 text-[#1B345F] font-medium text-md sm:text-lg text-center sm:text-left">
          A collection of clothes with contemporary styles{" "}
          <br className="visible sm:invisible" />
          and trends that make you look even cooler
        </p>
        <div>
          <button
            onClick={scroll}
            className="my-4 sm:my-12 bg-[#F7731C] text-white font-semibold px-1 sm:py-3 sm:px-10 rounded-full sm:rounded-lg text-base"
          >
            Explore More
          </button>
        </div>
      </div>
      <div>
        <div className="mt-4 mr-12 flex justify-center">
          <img
            className=" w-1/2 sm:w-56 md:w-80 lg:w-96"
            src={Image}
            alt="horse"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
