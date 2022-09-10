import React from "react";
import CardCheckout from "../components/CardCheckout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <h1>Shopping Cart Detail</h1>
      <CardCheckout />
      <Footer />
    </div>
  );
};

export default Checkout;
