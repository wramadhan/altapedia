import React from "react";
import Images from "../images/productclothes.png";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const CardCheckout = ({ name, price, foto, remove }) => {
  return (
    <div className="w-full pt-6 border-t border-[#DBE5FA] sm:flex">
      <div className="flex justify-center sm:justify-left">
        <img className="rounded-lg" src={Images} alt="Product" />
      </div>
      <div className="sm:ml-6 flex justify-between w-full">
        <div className="text-[#1B345F]">
          <h4 className="text-lg font-semibold">{name}</h4>
          <h4 className="text-base font-medium">Rp {price}</h4>
          <div className="flex mt-14">
            <button>
              <AiFillMinusCircle className="mr-3.5 rounded-full bg-[#F7731C] text-2xl text-[#FEF3EB] mt-1" />
            </button>
            <p className="text-lg font-medium w-auto text-center">1</p>
            <button>
              <AiFillPlusCircle className="text-[#F7731C] text-2xl mt-1 ml-3.5" />
            </button>
          </div>
        </div>
        <div className="text-base text-right">
          <h4 className="text-[#1B345F]">Rp 900.000</h4>
          <button className="text-[#F7731C] mt-20" onClick={remove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCheckout;
