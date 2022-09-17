import React from "react";

const CardMyproduct = ({ Name, Price, Foto, klik, edit }) => {
  return (
    <div className="w-72 h-auto">
      <img className="w-72 rounded-lg mb-3.5" src={Foto} alt={Name} />
      <h1 className="font-semibold text-lg text-[#1B345F] mb-1.5">{Name}</h1>
      <h2 className="font-medium text-base text-[#1B345F] mb-3.5">
        IDR {Price}
      </h2>
      <div>
        <button
          className="bg-[#FFEBEB] text-[#FF3333] font-medium rounded-lg px-7 py-3 mr-6"
          onClick={klik}
        >
          Delete
        </button>
        <button
          className="bg-[#FEF3EB] text-[#F7731C] font-medium rounded-lg px-8 py-3"
          onClick={edit}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default CardMyproduct;
