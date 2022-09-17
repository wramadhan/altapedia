import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardCheckout from "../components/CardCheckout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ordersummary from "../components/Ordersummary";
import { useCookies } from "react-cookie";

const Checkout = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([])
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [listProducts, setListProducts] = useState([]);
  const [cookies, removeCookie] = useCookies();

  useEffect(() => {
    getCartList();
  }, []);

  const toCheckoutPage = (value) => {
    navigate("/orderpage");
  };

  const getCartList = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://35.162.202.237:80/cart',
      headers: {
        'Authorization': `Bearer ${cookies.tokenUser}`
      }
    };

    axios(config)
      .then(function (response) {
        setDatas(response.data.Data);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  const changeQuantity = (item) => {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('quantity', '3');

    var config = {
      method: 'put',
      url: `http://35.162.202.237:80/cart/${item.ID}`,
      headers: {
        'Authorization': `Bearer ${cookies.tokenUser}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  const handleDeleteProduct = (item) => {
    var axios = require('axios');

    var config = {
      method: 'delete',
      url: `http://35.162.202.237:80/cart/${item.ID}`,//2 itu id dari cart nya
      headers: {
        'Authorization': `Bearer ${cookies.tokenUser}`
      }
    };

    axios(config)
      .then(function (response) {
        getCartList();
        console.log(response.data);
      })
      .catch(function (error) {
        alert('gagal menghapus barang, disebabkan: ' + error)
        console.log(error);
      });

  };

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl mt-20 mb-14 font-bold text-[#1B345F] text-center">
        Shopping Cart Detail
      </h1>
      <div className="px-4 sm:px-20 lg:px-64">
        {datas ? datas.map((item, index) => {
          return (
            <div key={index}>
              <CardCheckout
                remove={() => handleDeleteProduct(item)}
                name={item.name}
                price={item.price}
                foto={item.foto}
              />
            </div>
          );
        }) : <></>}
        <button onClick={() => changeQuantity()}>change Qty product</button>
        <button onClick={() => handleDeleteProduct()}>delete product</button>
        <Ordersummary
          totalProducts={totalProducts}
          totalPrice={totalPrice}
          toCheckoutPage={(value) => toCheckoutPage(value)}
        />
      </div>
      <div className="mt-36">
        <Footer />
      </div>
    </div >
  );
};

export default Checkout;
