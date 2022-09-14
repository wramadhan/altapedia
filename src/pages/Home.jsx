import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Sectionhome from "../components/Sectionhome";
import Switchpage from "../components/switchpage";
import { withRouter } from "../withRouter";

const Home = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const addCart = (item) => {
    var axios = require("axios");
    var data = JSON.stringify({
      product_id: item.id,
    });

    var config = {
      method: "post",
      url: "https://virtserver.swaggerhub.com/nawihusen/GroupProject/1.0.0/cart",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://virtserver.swaggerhub.com/nawihusen/GroupProject/1.0.0/product",
      headers: {},
    };

    axios(config)
      .then((response) => {
        setDatas(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
    getData(page);
  };

  const nextPage = () => {
    setPage(page + 1);
    getData(page);
  };

  const scroll = () => {
    const section = document.querySelector(".sectionhome");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDetailPage = (item) => {
    navigate(`/detail/${item.id}`, {
      state: {
        name: item.name,
        file_foto: item.file_foto,
        price: item.price,
        is_available: item.is_available,
      },
    });
  };

  return (
    <>
      <Navbar />
      <Jumbotron scroll={(value) => scroll(value)} />
      <Sectionhome />
      <div className="px-20">
        <div className="grid grid-cols-4">
          {datas.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  detail={() => handleDetailPage(item)}
                  name={item.name}
                  file_foto={item.file_foto}
                  price={item.price}
                  is_available={item.is_available}
                  id={() => addCart(item.id)}
                />
              </div>
            );
          })}
        </div>
        <Switchpage
          nextPage={(page) => nextPage(page)}
          prevPage={(page) => prevPage(page)}
          page={page}
        />
      </div>
      <Footer />
    </>
  );
};

export default withRouter(Home);
