import React from "react";
import Image from "../images/productclothes.png";

const Cardhistory = () => {
  return (
    <div className="w-72 mb-14 h-full rounded-lg ">
      <img src={Image} alt="Product" className="w-72 h-64 mb-3.5 " />
      <h4 className="text-lg font-semibold text-[#1B345F] mb-1.5">Black Basic Tee</h4>
      <h5 className="text-base font-medium text-[#1B345F] mb-1.5">Rp.450.000</h5>
      <h5 className="text-base font-medium text-[#1B345F] mb-1.5">Quantity: 2</h5>
      <h5 className="text-base font-semibold text-[#7BE495]">Succes</h5>
    </div>
  );
};

export default Cardhistory;
