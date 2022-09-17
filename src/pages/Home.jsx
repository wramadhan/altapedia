import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Sectionhome from "../components/Sectionhome";
import Switchpage from "../components/switchpage";
import { withRouter } from "../withRouter";
import { useCookies } from "react-cookie";


const Home = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [cookies, removeCookie] = useCookies();
  const [category, setCategory] = useState(2);

  useEffect(() => {
    getData();
  }, [page, category]);

  const addCart = (item) => {
    var axios = require('axios');

    var config = {
      method: 'post',
      url: `http://35.162.202.237:80/cart/${item.ID}`,
      headers: {
        'Authorization': `Bearer ${cookies.tokenUser}`
      }
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  const getData = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: `http://35.162.202.237:80/product${category}?page=${page}`,
      headers: {
        'Authorization': `Bearer ${cookies.tokenUser}`
      }
    };

    axios(config)
      .then(function (response) {
        setDatas(response.data.Data);
        console.log(response.data.Data);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  const changeCategory = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  }

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
        Name: item.Name,
        Foto: item.Foto,
        Price: item.Price,
      },
    });
  };

  return (
    <>
      <Navbar />
      <Jumbotron scroll={(value) => scroll(value)} />
      <Sectionhome change={(value) => changeCategory(value)} />
      <div className="px-20">
        <div className="grid grid-cols-4 gap-4">
          {datas ? datas.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  addCart={() => addCart(item)}
                  detail={() => handleDetailPage(item)}
                  name={item.Name}
                  file_foto={item.Foto}
                  price={item.Price}
                  stock={item.Quantity}
                />
              </div>
            );
          }) : <></>}
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
