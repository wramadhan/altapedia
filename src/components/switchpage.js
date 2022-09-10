import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Switchpage = ({ prevPage, nextPage, page }) => {
  return (
    <div className="flex justify-end mb-44 mt-16">
      <button onClick={prevPage} className="w-4 rounded  h-4 bg-[#FEF3EB]">
        <AiOutlineArrowLeft className="text-[#F7731C]" />
      </button>
      <input
        className="rounded w-10 font-medium text-center h-4"
        placeholder="1"
        value={page}
      />
      <button onClick={nextPage} className="w-4 rounded h-4 bg-[#FEF3EB]">
        <AiOutlineArrowRight className="text-[#F7731C]" />
      </button>
    </div>
  );
};

export default Switchpage;
