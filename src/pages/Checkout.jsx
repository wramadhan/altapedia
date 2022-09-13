import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardCheckout from "../components/CardCheckout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ordersummary from "../components/Ordersummary";

const Checkout = () => {
  const navigate = useNavigate();
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    getCartList();
  }, []);

  const toCheckoutPage = (value) => {
    navigate('/orderpage')
  };

  const getCartList = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://virtserver.swaggerhub.com/nawihusen/GroupProject/1.0.0/cart',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setTotalProducts(response.data.data.length);
        response.data.data.map((item) => {
          return (setTotalPrice(totalPrice + item.price));
        })
        setListProducts(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDeleteProduct = (item) => {
    var axios = require('axios');

    var config = {
      method: 'delete',
      url: 'https://virtserver.swaggerhub.com/nawihusen/GroupProject/1.0.0/cart/' + item.id,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl mt-20 mb-14 font-bold text-[#1B345F] text-center">Shopping Cart Detail</h1>
      <div className="px-4 sm:px-20 lg:px-64">
        {listProducts.map((item, index) => {
          return (
            <div key={index}>
              <CardCheckout remove={() => handleDeleteProduct(item)} name={item.name} price={item.price} foto={item.foto} />
            </div>
          );
        })}
        <Ordersummary totalProducts={totalProducts} totalPrice={totalPrice} toCheckoutPage={(value) => toCheckoutPage(value)} />
      </div>
      <div className='mt-36'>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
