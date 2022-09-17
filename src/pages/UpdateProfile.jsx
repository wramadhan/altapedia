import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainProfile from "../components/MainProfile";
import InputEditProfile from "../components/InputEditProfile";
import DividerUpdateProfile from "../components/DividerUpdateProfile";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState();
  const [cookies, removeCookie] = useCookies();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [foto, setFoto] = useState("");
  const [retypepassword, setRetypePassword] = useState("");

  const toLogin = () => {
    navigate(`/`);
    removeCookie("tokenUser");
  };

  const handleDeleteAccount = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${cookies.tokenUser}`);

    var raw = "";

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://35.162.202.237:80/profile", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        toLogin();
      })
      .catch(error => console.log('error', error));
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRetypePassword = (event) => {
    setRetypePassword(event.target.value);
  };
  const handleFoto = (event) => {
    setFoto(event.target.value);
  };


  useEffect(() => {
    getProfile();
  }, []);


  const getProfile = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://35.162.202.237:80/profile',
      headers: {
        'Authorization': `Bearer ${cookies.tokenUser}`
      }
    };

    axios(config)
      .then((response) => {
        console.log(response.data.Data);
        setDatas(response.data.Data);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const handleUpdateProfile = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${cookies.tokenUser}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("foto", foto);

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://35.162.202.237:80/profile", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        getProfile();
      })
      .catch(error => console.log('error', error));
  };

  return (
    <>
      <Navbar />
      <h1 className="px-4 sm:px-20 h-auto py-4 text-4xl text-[#1B345F] font-bold sm:pt-20 sm-10 sm:h-44 bg-[#DBE5FA] w-full">
        My Profile
      </h1>
      <div className="px-4 sm:px-20">
        <MainProfile edit={(event) => handleFoto(event)} foto={datas.Foto} name={datas.Name} username={datas.Username} email={datas.Email} />
        <DividerUpdateProfile />
        <InputEditProfile
          name="Name"
          type="text"
          placeholder="Edit name"
          instruction="Input your full name here whithout space and uppercase"
          change={handleName}
        /><br />
        <InputEditProfile
          name="Username"
          type="text"
          placeholder="Edit username"
          instruction="Use lowercase and uppercase letters or combine with numbers with no
          spaces."
          change={handleUsername}
        />
        <DividerUpdateProfile />
        <InputEditProfile
          name="Email"
          type="email"
          placeholder="Edit email"
          change={handleEmail}
        />
        <DividerUpdateProfile />
        <InputEditProfile
          name="Password"
          type="password"
          placeholder="New password"
          change={handlePassword}
        />
        <br />
        <InputEditProfile
          name="Retype Password"
          type="password"
          placeholder="New password"
          change={handleRetypePassword}
        />
        <DividerUpdateProfile />
        <div className="mb-30 sm:mb-44 sm:flex sm:justify-between flex-col sm:flex-row">
          <button
            onClick={() => handleUpdateProfile()}
            className="bg-[#F7731C] text-white rounded-lg py-3 w-52 text-base font-medium mb-44 mr-40 sm:mr-0"
          >
            Save Changes
          </button>
          <button
            onClick={() => handleDeleteAccount()}
            className="bg-[#FFEBEB] text-[#FF3333] rounded-lg py-3 w-52 text-base font-medium mb-44"
          >
            Delete Account
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateProfile;
