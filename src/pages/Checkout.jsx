import React, { useState, useEffect } from "react";
import CardCheckout from "../components/CardCheckout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ordersummary from "../components/Ordersummary";

const Checkout = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getCartList();
  }, []);


  const getCartList = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      "product_id": 1
    });

    var config = {
      method: 'get',
      url: 'https://virtserver.swaggerhub.com/nawihusen/GroupProject/1.0.0/cart',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
        setTotalProducts(response.data.data.length)
        // setTotalPrice //salah
        //   (
        //     response.data.data.map((item, index) => {
        //       return (
        //         setTotalPrice(item.id)
        //       );
        //     })
        //   )
        // console.log(totalPrice);
      })
      .catch(function (error) {
        console.log(error);
      });

  };
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl mt-20 mb-14 font-bold text-[#1B345F] text-center">Shopping Cart Detail</h1>
      <div className="px-4 sm:px-20 lg:px-64">
        <CardCheckout />
        <Ordersummary totalProducts={totalProducts} totalPrice={totalPrice} />
      </div>
      <div className='mt-36'>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
