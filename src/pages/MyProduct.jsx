import React, { useState, useEffect } from "react";
import CardMyproduct from "../components/CardMyproduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoIosAdd, IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const MyProduct = () => {
  const [datas, setDatas] = useState([])
  const [cookies, removeCookie] = useCookies();
  const navigate = useNavigate();

  const toAddProductPage = () => {
    navigate("/addproduct");
  };
  const toEditProduct = (item) => {
    navigate(`/myproduct/${item.ID}`);
  };
  useEffect(() => {
    getMyProduct();
  }, []);

  const getMyProduct = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${cookies.tokenUser}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://35.162.202.237:80/profile/product?page=1", requestOptions)
      .then(response => response.text())
      .then(result => setDatas(JSON.parse(result).Data))
      .catch(error => console.log('error', error));
  };

  const deleteProduct = (item) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${cookies.tokenUser}`);

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`http://35.162.202.237:80/product/${item.ID}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        getMyProduct();
      })
      .catch(error => console.log('error', error));
  };
  const toHomePage = () => {
    navigate("/home");
  };
  return (
    <div>
      <Navbar />
      <div className="ml-4 sm:ml-20 mb-44">
        <h1 className="text-center mx-auto font-bold text-4xl text-[#1B345F] mt-20 mb-14">
          My Product Info
        </h1>
        <div className="mb-8">
          <button
            onClick={() => toHomePage()}
            className="bg-[#FEF3EB] px-7 py-2 rounded-lg font-medium text-[#F7731C] text-center text-base flex"
          >
            <IoIosArrowRoundBack className="text-2xl" />
            Back to Home
          </button>
        </div>
        <div className="mb-14">
          <button
            onClick={() => toAddProductPage()}
            className="text-center bg-[#F7731C] px-7 py-2 rounded-lg font-medium text-white text-base flex"
          >
            <IoIosAdd className="text-2xl" />
            Add Product
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {datas ? datas.map((item, index) => {
            return (
              <div key={index}>
                <CardMyproduct
                  Name={item.Name} Price={item.Price} Foto={item.Foto}
                  klik={() => deleteProduct(item)}
                  edit={() => toEditProduct(item)}
                />
              </div>
            );
          }) : <></>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProduct;
