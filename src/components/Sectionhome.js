import React from "react";

const Sectionhome = () => {
  return (
    <>
      <h1 className="sectionhome text-center font-bold text-4xl mb-3 mt-40 text-[#1B345F]">
        Out Products
      </h1>
      <h2 className="text-center text-2xl font-medium mb-10 text-[#1B345F]">
        This week's newest and best selling items
      </h2>
      <div className="flex justify-center">
        <div className="flex justify-center mb-16 flex flex-col sm:flex-row w-52 sm:w-auto">
          <button className="px-6 py-1.5 rounded-full border-2 text-sm font-regular text-[#1B345F] border-[#DBE5FA] hover:bg-[#F7731C] hover:text-white hover:border-[#F7731C] mb-2">
            All Category
          </button>
          <button className="px-6 py-1.5 rounded-full border-2 text-sm font-regular text-[#1B345F] border-[#DBE5FA] mx-2 hover:bg-[#F7731C] hover:text-white hover:border-[#F7731C] mb-2">
            Men Product
          </button>
          <button className="px-6 py-1.5 rounded-full border-2 text-sm font-regular text-[#1B345F] border-[#DBE5FA] mr-2 hover:bg-[#F7731C] hover:text-white hover:border-[#F7731C] mb-2">
            Women Product
          </button>
          <button className="px-6 py-1.5 rounded-full border-2 text-sm font-regular text-[#1B345F] border-[#DBE5FA] hover:bg-[#F7731C] hover:text-white hover:border-[#F7731C] mb-2">
            Accesories
          </button>
        </div>
      </div>
    </>
  );
};

export default Sectionhome;
