import React from "react";
import Navbar from "../components/Navbar";
import Image from "../images/imageproduk.jpg";
import Footer from "../components/Footer";

const DetailProduct = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div>
          <img className="mt-20 mb-36 ml-20 w-[542px] h-[640px]" src={Image} />
        </div>
        <div className="w-[578px] ml-20 mt-36">
          <h1 className="text-5xl font-semibold text-[#1B345F] mb-3.5">Black Basic Tee</h1>
          <h4 className="text-2xl font-medium text-[#1B345F] mb-8">Rp.450.000</h4>
          <button className="bg-[#FEF3EB] text-[#F7731C] pl-24 pr-24 pt-3 pb-3 rounded-lg mb-8">Add to cart</button>
          <h5 className="text-[#1B345F] text-xl font-medium mb-3.5">Product Descriptions</h5>
          <p className="text-[#1B345F] text-xl ">
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
