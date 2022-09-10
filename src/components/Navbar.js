import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="bg-inherit mt-3 shadow-lg sticky flex justify-between py-5 px-20">
      <h1 className="text-[#F7731C] font-semibold text-2xl">
        Alta<span className="text-[#1B345F]">pedia</span>
      </h1>
      <div className="w-80 justify-between flex mt-1">
        <h2 className="font-medium text-lg text-[#1B345F]">
          <Link className=" " to="/home">
            Home
          </Link>
        </h2>
        <h2 className="font-medium text-lg text-[#1B345F]">
          <Link className=" " to="#">
            About
          </Link>
        </h2>
        <h2 className="font-medium text-lg text-[#1B345F]">
          <Link className="" to="#">
            Contact Us
          </Link>
        </h2>
      </div>
      <div className="text-xl">
        <div className="flex">
          <input type="search" placeholder="Cari barang..." className="border-y-2 border-l-2 border-[#D2DEF9] rounded-l-lg pl-2" />

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
