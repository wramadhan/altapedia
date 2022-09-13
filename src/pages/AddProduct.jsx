import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../images/productclothes.png";

const AddProduct = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-44">
        <h1 className="text-center mx-auto font-bold text-4xl text-[#1B345F] mt-20 mb-14">ADD MY PRODUCT</h1>
        <div className="md:flex md:justify-around sm:mr-4 ">
          <div className=" mx-4">
            <h3 className="text-xl font-medium text-[#1B345F] mb-6">Product Title</h3>
            <input className="w-full h-10 sm:w-[522px] sm:h-14 border border-[#DBE5FA] rounded-lg"></input>
            <p className="text-xs text-[#CCCCCC] mb-8">when entering the product name, you have a maximum of 20 characters</p>

            <h3 className="text-xl font-medium text-[#1B345F] mb-6">Product Description</h3>
            <textarea className="w-full h-36  sm:w-[522px] sm:h-[242px] border border-[#DBE5FA] rounded-lg p-2" name="" id=""></textarea>

            <p className="text-xs text-[#CCCCCC] mb-8">Do not exceed 100 characters when entering a product description</p>

            <h3 className="text-xl  font-medium text-[#1B345F] mb-6">Price/pcs</h3>
            <input className="w-full h-10 sm:w-[522px] sm:h-14 border border-[#DBE5FA] rounded-lg pl-2" type="number" placeholder="Enter Price"></input>
            <p className="text-xs text-[#CCCCCC] mb-8">Set the minimum amount to buy for this product</p>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-medium text-[#1B345F] mb-6">Product Images</h3>
            <button type="file">
              <img className="md:w-[350px] w-[300px] mb-7 " src={Image} alt="product" />
            </button>
            <br />
            <button className="bg-[#FEF3EB] text-xl px-11 py-3 mr-6 rounded-lg mb-6">Cancel</button>
            <button className="bg-[#F7731C] text-xl px-14 py-3 rounded-lg">Save</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddProduct;
