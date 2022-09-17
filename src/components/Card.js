import React from "react";

const Card = ({
  price,
  stock,
  addCart,
  file_foto,
  name,
  is_available,
  detail,
}) => {
  return (
    <div className="w-32 sm:w-48 md:w-[290px] h-auto">
      <div onClick={detail}>
        <img className="rounded-lg w-full h-64" src={file_foto} alt={name} />
        <h2 className="font-semibold text-sm md:text-base lg:text-lg text-[#1B345F] pt-2">
          {name}
        </h2>
        <h3 className="font-medium text-xs md:text-sm lg:text-base text-[#1B345F] pb-2">
          IDR {price}
        </h3>
        <h3>Stock: {stock}</h3>
      </div>
      <button
        className="rounded-lg font-medium text-base mt-4 sm:w-48 md:w-[290px] h-12 bg-[#FEF3EB] text-[#F7731C]"
        onClick={addCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
