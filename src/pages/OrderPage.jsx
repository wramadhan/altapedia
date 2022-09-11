import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OrderPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F6F8FE] text-[#1B345F] md:mt-20 md:w-[700px] md:mx-auto  lg:mt-20 lg:w-[800px] lg:mx-auto xl:auto xl:w-[918px] ">
        <div className="mx-10 mt-10">
          <h1 className="font-semibold mb-6 pt-6 sm:text-2xl">Contact Information</h1>
          <form className="flex flex-col">
            <label className="mb-3 xl:text-lg">Email address</label>
            <input className="border border-[#D2DEF9] rounded-lg  pl-2 h-10 xl:w-[838px] xl:h-14" placeholder="Email address"></input>
          </form>
        </div>
        <div className="mx-10 mt-10">
          <h1 className="font-semibold mb-6 sm:text-2xl">Shipping Information</h1>
          <form className="flex flex-col xl:text-lg">
            <label className="mb-3">Full name</label>
            <input className="border border-[#D2DEF9] rounded-lg mb-6  pl-2 h-10  xl:w-[838px] xl:h-14" placeholder="Full name"></input>
            <label className="mb-3">Phone</label>
            <input className="border border-[#D2DEF9] rounded-lg  pl-2 h-10 xl:w-[838px] xl:h-14" placeholder="+6281392882293"></input>
            <label className="mb-3">City</label>
            <input className="border border-[#D2DEF9] rounded-lg mb-6  pl-2 h-10 xl:w-[838px] xl:h-14" placeholder="Kota Bogor"></input>
            <label className="mb-3">State / Province</label>
            <input className="border border-[#D2DEF9] rounded-lg mb-6  pl-2 h-10 xl:w-[838px] xl:h-14" placeholder="Jawa Barat"></input>
            <label className="mb-3">Zip Code</label>
            <input className="border border-[#D2DEF9] rounded-lg  pl-2 h-10 xl:w-[838px] xl:h-14" placeholder="40221"></input>
          </form>
        </div>
        <div className="mx-10 mt-10">
          <h1 className="font-semibold mb-6 sm:text-2xl">Payment</h1>
          <form className="xl:text-lg">
            <input type="radio"></input>
            <label className="mr-6 ml-1 font-medium">Credit Card</label>
            <input type="radio"></input>
            <label className="mr-6 ml-1 font-medium">Debit Card</label>
            <input type="radio"></input>
            <label className="mr-6 ml-1 font-medium">Cash on Delivery</label>
          </form>
        </div>
        <div className="mx-10 mt-10 xl:text-lg ">
          <h1 className="font-semibold mb-6 sm:text-2xl">Order Sumary</h1>
          <h2 className="mb-3 font-medium">Quantity : 3</h2>
          <h2 className="mb-3 font-medium">Subtotal : Rp.1.350.000</h2>
          <h2 className="mb-3 font-medium">Shipping : Free!</h2>
        </div>
        <div className="text-end pb-10 mb-20 xl:mb-36">
          <button className="bg-[#DBE5FA] font-medium text-[#1B345F] mr-6 px-8 py-3.5 rounded-lg m-3">Cancel Order</button>
          <button className="bg-[#F7731C] font-medium text-white mr-6 px-11 py-3.5 rounded-lg">Buy Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
