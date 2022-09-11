import React from "react";
import CardCheckout from "../components/CardCheckout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl mt-20 mb-14 font-bold text-[#1B345F] text-center">Shopping Cart Detail</h1>
      <div className="px-64">
        <CardCheckout />
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
