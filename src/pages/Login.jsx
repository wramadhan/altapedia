import React, { useState } from "react";
import Baner from "../images/baner.jpg";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [tokenUser, setTokenUser] = useCookies();
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    postLogin();
    // let savePass = window.confirm('Are you want to save your id and password?');
    // if (savePass === true) {
    //   alert('id and password saved')
    // }
  };

  const toLogin = (item) => {
    navigate(`/home`);
  };

  const postLogin = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://virtserver.swaggerhub.com/nawihusen/GroupProject/1.0.0/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data.data.token);
        toLogin();
        setTokenUser("tokenUser", response.data.data.token, { path: "/" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRegister = () => {
    navigate(`/register`);
  };
  return (
    <div className="sm:flex">
      <img
        className="w-[0vw] invisible sm:visible sm:w-1/2"
        src={Baner}
        alt="baner"
      />
      <div className="flex flex-col w-full p-4 sm:w-1/2 md:ml-5 lg:ml-16 md:ml-36 sm:pt-44 lg:pr-44">
        <h1 className="text-5xl font-semibold text-center sm:text-left text-[#1B345F] mb-3 ">
          Hello Again!
        </h1>
        <p className="text-xl text-[#1B345F] mb-9">
          Thank you for get back to Altapedia, lets acces our the best
          recommendations for you.
        </p>
        <h5 className="text-xl font-medium mb-6 ">Login to your account</h5>
        <form className="flex flex-col w-full">
          <label className="text-lg mb-3">Your email</label>
          <input
            className="w-full h-14 border-2 border-[#F0F4FD] rounded-md pl-3 mb-6"
            type="email"
            onChange={handleEmail}
            placeholder="Email adress"
          />

          <label className="text-lg mb-3">Password</label>
          <input
            className="w-full h-14 border-2 border-[#F0F4FD] rounded-md pl-3 mb-4"
            placeholder="Password"
            type="password"
            onChange={handlePassword}
          />

          <p className="text-lg text-[#F7731C] text-right mb-10">
            Reset Password
          </p>
        </form>

        <button
          className="text-lg font-medium text-white w-full bg-[#F7731C] h-14 rounded-md mt-5"
          onClick={() => handleLogin()}
        >
          Sign In
        </button>

        <button
            className="mt-5 text-lg font-medium text-[#1B345F] w-full bg-[#DBE5FA] h-14 rounded-md"
            onClick={() => handleRegister()}
          >
            Create New Account
          </button>
      </div>
    </div>
  );
};

export default Login;
