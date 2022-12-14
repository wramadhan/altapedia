import React from "react";
import Navbar from "../components/Navbar";
import Cardhistory from "../components/Cardhistory";
import Footer from "../components/Footer";

const OrderHistory = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold text-[#1B345F] mb-3">
          Order history
        </h1>
        <h2 className="text-lg text-[#1B345F] mb-16">
          Check the status of recent orders and dicover similiar products
        </h2>
      </div>
      <div className="ml-20">
        <Cardhistory />
      </div>
      <Footer />
    </div>
  );
};

export default OrderHistory;
