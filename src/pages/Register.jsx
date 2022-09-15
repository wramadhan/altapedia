import React, { useState } from "react";
import Baner from "../images/baner.jpg";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toLogin = () => {
    handleRegist();
    alert('Register successfully');
  };

  const handleRegist = () => {
    navigate(`/`);
  }

  const handleRegister = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      "username": name,
      "email": email,
      "password": password
    });

    var config = {
      method: 'post',
      url: 'http://35.162.202.237:80/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        toLogin();
      })
      .catch(function (error) {
        console.log(error);
      });

  };
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };


  return (
    <div className="sm:flex">
      <img className="w-[0vw] invisible sm:visible sm:w-1/2" src={Baner} alt="baner" />
      <div className="flex flex-col w-full p-4 sm:w-1/2 md:ml-5 lg:ml-16 md:ml-36 sm:pt-44 lg:pr-44">
        <h1 className="text-5xl font-semibold text-center sm:text-left text-[#1B345F] mb-3">Register</h1>
        <p className="text-xl text-[#1B345F] mb-9">Let’s get you all set up so you can verify your account and explore.</p>
        <h5 className="text-xl font-medium mb-6 ">Manage your account here</h5>
        <div className="flex flex-col w-full">
          <>
            <label className="text-lg mb-3">Username</label>
            <input type='text' className="w-full h-14 border-2 border-[#F0F4FD] rounded-md pl-3 mb-6" placeholder="Username" onChange={handleName} />

            <label className="text-lg mb-3">Your Email</label>
            <input type='email' className="w-full h-14 border-2 border-[#F0F4FD] rounded-md pl-3 mb-4" placeholder="Your Email" onChange={handleEmail} />

            <label className="text-lg mb-3">Password</label>
            <input type='password' className="w-full h-14 border-2 border-[#F0F4FD] rounded-md pl-3 mb-10" placeholder="Password" onChange={handlePassword} />
          </>
          <button className="text-lg font-medium text-white w-full bg-[#F7731C] h-14 rounded-md mb-5" onClick={() => handleRegister()}>Create Account</button>

          <button className="text-lg font-medium text-[#1B345F] w-full bg-[#DBE5FA] h-14 rounded-md mb-5" onClick={() => toLogin()}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
