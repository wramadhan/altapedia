import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Switchpage = ({ prevPage, nextPage, page }) => {
  return (
    <div className="flex justify-end mb-44 mt-16">
      <button
        onClick={prevPage}
        className="w-8 h-8  rounded bg-[#FEF3EB] place-content-center grid content-center"
      >
        <AiOutlineArrowLeft className="text-[#F7731C]" />
      </button>
      <input
        className="rounded w-10 font-medium text-center h-4 mt-2"
        placeholder="1"
        value={page}
      />
      <button
        onClick={nextPage}
        className="w-8 h-8 rounded bg-[#FEF3EB] place-content-center grid content-center"
      >
        <AiOutlineArrowRight className="text-[#F7731C]" />
      </button>
    </div>
  );
};

export default Switchpage;
