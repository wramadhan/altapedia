import React from "react";
import Images from "../images/productclothes.png";

const CardCheckout = () => {
  return (
    <div className="w-full pt-6 border-t border-[#DBE5FA] sm:flex">
      <div className="flex justify-center sm:justify-left">
        <img className="rounded-lg" src={Images} alt="Product" />
      </div>
      <div className="sm:ml-6 flex justify-between w-full">
        <div className="text-[#1B345F]">
          <h4 className="text-lg font-semibold">Black Basic Tee</h4>
          <h4 className="text-base">Rp.450.000</h4>
          <input className="border-2 w-14 h-7 mt-14 rounded-md" />
        </div>
        <div className="text-base text-right">
          <h4 className="text-[#1B345F]">Rp.900.000</h4>
          <button className="text-[#F7731C] mt-20">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CardCheckout;
