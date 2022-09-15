import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { HiShoppingCart } from "react-icons/hi";
import { IoExitOutline } from "react-icons/io5";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [tokenUser, removeCookie] = useCookies();

  const handleLogout = () => {
    navigate(`/`);
    removeCookie("tokenUser");
  };
  return (
    <>
      <div className="bg-inherit mt-3 shadow-[0_6px_20px_rgba(230,230,230,0.25)] sticky sm:flex justify-between py-5 sm:px-20 text-center sm:text-left">
        <h1 className="text-[#F7731C] font-semibold text-2xl">
          Alta<span className="text-[#1B345F]">pedia</span>
        </h1>
        <div className="sm:w-90 justify-center sm:flex mt-1 sm:text-left mx-6">
          <h2 className="font-medium text-lg text-[#1B345F]">
            <Link to="/home">Home</Link>
          </h2>
          <h2 className="font-medium mx-2 sm:mx-4 md:mx-14 text-lg text-[#1B345F]">
            <a
              href="https://api.whatsapp.com/send/?phone=6281230055223&text=Hallo+Alterra+Academy%2C+Saya+ingin+bertanya+terkait+siswa+anda&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              About
            </a>
          </h2>
          <h2 className="font-medium text-lg text-[#1B345F]">
          <a
              href="https://api.whatsapp.com/send/?phone=6281230055223&text=Hallo+Alterra+Academy%2C+Saya+ingin+bertanya+terkait+siswa+anda&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </h2>
        </div>
        <div className="text-base">
          <div className="flex justify-center sm:justify-left">
            <input
              type="search"
              placeholder="Cari barang..."
              className="border-y-2 border-l-2 w-44 border-[#D2DEF9] rounded-l-lg pl-2"
            />

            <button className="py-1 pr-2 border-y-2 border-r-2 border-[#D2DEF9] rounded-r-lg ">
              <GoSearch className="text-2xl text-[#F7731C]" />
            </button>

            <button>
              <Link to="/checkout">
                <HiShoppingCart className="text-3xl mx-4 text-[#F7731C]" />
              </Link>
            </button>

            <>
              <div className="dropdown inline-block relative">
                <button className="text-[#999999] font-semibold rounded inline-flex items-center">
                  <span className="mr-1"></span>
                  <svg
                    className="fill-current h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 rounded-lg border-[1px] border-[#CCCCCC] p-2 bg-white">
                  <li className="">
                    <Link
                      className="rounded-t bg-white border-b-[1px] border-[#DBE5FA] hover:bg-[#DBE5FA] py-2 px-4 block whitespace-no-wrap"
                      to="/updateprofile"
                    >
                      My Profile
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="bg-white border-b-[1px] border-[#DBE5FA] hover:bg-[#DBE5FA] py-2 px-4 block whitespace-no-wrap"
                      to="/myproduct"
                    >
                      My Product
                    </Link>
                  </li>
                  <li className="w-52">
                    <button
                      onClick={() => handleLogout()}
                      className="flex rounded-b bg-white  border-[#DBE5FA] hover:bg-[#DBE5FA] py-2 px-4 block whitespace-no-wrap"
                    >
                      <IoExitOutline className="text-xl mt-1 mr-2" />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>

            <button>
              {/* <Link to="/updateprofile"> */}

              {/* <button className="py-1 pr-2 border-y-2 border-r-2 border-[#D2DEF9] rounded-r-lg ">
            <GoSearch className="text-3xl text-[#F7731C]" />
          </button>

          <button>
            <Link to="/checkout">
              <HiShoppingCart className="text-3xl mx-4 text-[#F7731C]" />
            </Link>
          </button>

          <button>
            <Link to="/updateprofile"> */}

              <CgProfile className="text-[#999] text-4xl ml-2" />
              {/* </Link> */}
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Navbar;
