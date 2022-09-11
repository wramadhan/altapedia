import React from "react";
import Images from "../images/productclothes.png";

const CardCheckout = () => {
  return (
    <div className="w-full pt-6 border-t border-[#DBE5FA] flex ">
      <div>
        <img className="rounded-lg" src={Images} alt="Product" />
      </div>
      <div className="flex ml-6">
        <div className="text-[#1B345F]">
          <h4 className="text-lg font-semibold">Black Basic Tee</h4>
          <h4 className="text-base mb-14">Rp.450.000</h4>
          <input className="border-2 w-14 h-7 rounded-md  "></input>
        </div>
        <div className="text-base ml-[502px]">
          <h4 className="text-[#1B345F] mb-20">Rp.900.000</h4>
          <button className="text-[#F7731C] text-end">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CardCheckout;
