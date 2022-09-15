import React from "react";

const Ordersummary = ({ totalProducts, totalPrice, toCheckoutPage }) => {
  return (
    <div className="w-full pt-6 border-t border-[#DBE5FA] mt-6">
      <h2 className="text-[#1B345F] mt-10 font-semibold text-lg">
        Order Summary
      </h2>
      <p className="font-medium text-[#1B345F] mt-4 text-lg">
        Quantity: {totalProducts}
      </p>
      <p className="font-medium text-[#1B345F] mt-4 text-lg">
        Shipping: <span className="text-[#F7731C]">Free!</span>
      </p>
      <p className="text-[#1B345F] mt-4 text-lg font-medium">
        Subtotal: Rp {totalPrice}
      </p>
      <button
        onClick={toCheckoutPage}
        className="bg-[#F7731C] rounded-lg mt-14 text-white font-base text-lg w-full py-3.5"
      >
        Checkout Order
      </button>
    </div>
  );
};

export default Ordersummary;
