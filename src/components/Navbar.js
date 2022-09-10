import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="bg-inherit mt-3 shadow-lg sticky sm:flex justify-between py-5 sm:px-20 text-center sm:text-left">
      <h1 className="text-[#F7731C] font-semibold text-2xl">
        Alta<span className="text-[#1B345F]">pedia</span>
      </h1>
      <div className="sm:w-80 justify-center sm:flex mt-1 sm:text-left mx-6">
        <h2 className="font-medium text-lg text-[#1B345F]">
          <Link to="/home">Home</Link>
        </h2>
        <h2 className="font-medium mx-2 sm:mx-4 md:mx-14 text-lg text-[#1B345F]">
          <Link to="#">About</Link>
        </h2>
        <h2 className="font-medium text-lg text-[#1B345F]">
          <Link to="#">Contact Us</Link>
        </h2>
      </div>
      <div className="text-xl">
        <div className="flex justify-center sm:justify-left">
          <input
            type="search"
            placeholder="Cari barang..."
            className="border-y-2 border-l-2 w-44 border-[#D2DEF9] rounded-l-lg pl-2"
          />

          <button className="py-1 pr-2 border-y-2 border-r-2 border-[#D2DEF9] rounded-r-lg ">
            <GoSearch className="text-3xl text-[#F7731C]" />
          </button>
          <button>
            <CgProfile className="text-[#999] text-4xl ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
