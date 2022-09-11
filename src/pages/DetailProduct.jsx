import React from "react";
import Navbar from "../components/Navbar";
import Image from "../images/imageproduk.jpg";
import Footer from "../components/Footer";

const DetailProduct = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:flex">
        <div>
          <img className="w-auto mt-8 m-auto mt-4 sm:w-9/12 md:mt-10 md:mb-10 md:w-11/12 lg:w-[542px] lg:ml-20 lg:mt-20 lg:mb-32 " src={Image} />
        </div>
        <div className="w-auto mt-8 ml-3 mb-4 sm:w-9/12 md:mt-10 md:mb-10 lg:mt-20 lg:ml-40 lg:w-[578px]">
          <h1 className="text-4xl md:text-2xl md: lg:text-5xl font-semibold text-[#1B345F] mb-3.5">Black Basic Tee</h1>
          <h4 className="md:text-lg lg:text-2xl font-medium text-[#1B345F] mb-8">Rp.450.000</h4>
          <button className="pl-8 pr-8 bg-[#FEF3EB] text-[#F7731C] md:pl-16 md:pr-16 lg:pl-24 lg:pr-24 pt-3 pb-3 rounded-lg mb-8">Add to cart</button>
          <h5 className="md:text-lg lg:text-2xl text-[#1B345F] font-medium mb-3.5">Product Descriptions</h5>
          <p className=" md:text-lg lg:text-2xl text-[#1B345F] ">
            The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own
            look.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProduct;
