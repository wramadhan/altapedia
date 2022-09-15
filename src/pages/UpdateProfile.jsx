import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainProfile from "../components/MainProfile";
import InputEditProfile from "../components/InputEditProfile";
import DividerUpdateProfile from "../components/DividerUpdateProfile";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypepassword, setRetypePassword] = useState("");
  const [tokenUser, removeCookie] = useCookies();

  const handleDeleteAccount = () => {
    navigate(`/`);
    removeCookie("tokenUser");
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

  const handleUpdateProfile = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      name: username,
      email: email,
      password: password,
    });

    var config = {
      method: "put",
      url: "https://virtserver.swaggerhub.com/nawihusen/GroupProject/1.0.0/users",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <h1 className="px-4 sm:px-20 h-auto py-4 text-4xl text-[#1B345F] font-bold sm:pt-20 sm-10 sm:h-44 bg-[#DBE5FA] w-full">
        My Profile
      </h1>
      <div className="px-4 sm:px-20">
        <MainProfile />
        <DividerUpdateProfile />
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
        <br></br>
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
