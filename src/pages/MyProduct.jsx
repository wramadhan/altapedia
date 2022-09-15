import React from "react";
import CardMyproduct from "../components/CardMyproduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoIosAdd, IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const MyProduct = () => {
  const navigate = useNavigate();
  const toAddProductPage = () => {
    navigate('/addproduct')
  };
  const toHomePage = () => {
    navigate('/home')
  };
  return (
    <div>
      <Navbar />
      <div className="ml-4 sm:ml-20 mb-44">
        <h1 className="text-center mx-auto font-bold text-4xl text-[#1B345F] mt-20 mb-14">MY PRODUCT</h1>
        <div className="mb-8">
          <button onClick={() => toHomePage()} className="bg-[#FEF3EB] px-7 py-2 rounded-lg font-medium text-[#F7731C] text-center text-base flex">
            <IoIosArrowRoundBack className="text-2xl" />
            Back to Home
          </button>
        </div>
        <div className="mb-14">
          <button onClick={() => toAddProductPage()} className="text-center bg-[#F7731C] px-7 py-2 rounded-lg font-medium text-white text-base flex">
            <IoIosAdd className="text-2xl" />
            Add Product
          </button>
        </div>
        <CardMyproduct />
      </div>
      <Footer />
    </div>
  );
};

export default MyProduct;
