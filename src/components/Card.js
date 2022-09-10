import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Card = () => {
  return (
    <div className="w-72 h-96">
      <img className="rounded-lg h-64 w-72" src="https://ncrsport.com/img/storage/large/FU7337-1.jpg" alt="placeholder" />
      <h2 className="font-semibold text-lg text-[#1B345F] pt-2">Sepatu Adidas</h2>
      <h3 className="font-semibold text-lg text-[#1B345F] pb-2">Rp.1.750.000</h3>
      <button className="rounded-lg font-medium text-lg w-72 h-12 bg-[#FEF3EB] text-[#F7731C]">Add to cart</button>
    </div>
  );
};

export default Card;
