import React from "react";
import Baner from "../images/baner.jpg";

const Login = () => {
  return (
    <div className="flex">
      <div>
        <img className="h-full" src={Baner} alt="baner" />
      </div>
      <div className="flex flex-col sm:ml-36 sm:mt-44 sm:pr-44">
        <h1 className="text-5xl font-semibold text-[#1B345F] mb-3 ">Hello Again!</h1>
        <p className="text-xl text-[#1B345F] mb-9">Thank you for get back to Altapedia, lets acces our the best recommendations for you.</p>
        <h5 className="text-xl font-medium mb-6 ">Login to your account</h5>
        <div className="flex flex-col w-[468px]">
          <label className="text-lg mb-3">Your email</label>
          <input className="w-full h-14 border-2 border-[#F0F4FD] rounded-md pl-3 mb-6" placeholder="Email adress"></input>

          <label className="text-lg mb-3">Password</label>
          <input className="w-full h-14 border-2 border-[#F0F4FD] rounded-md pl-3 mb-4" placeholder="Password"></input>

          <p className="text-lg text-[#F7731C] text-right mb-10">Reset Pasword</p>
          <button className="text-lg font-medium text-white w-[468px] bg-[#F7731C] h-14 rounded-md mb-5">Sign In</button>

          <button className="text-lg font-medium text-[#1B345F] w-[468px] bg-[#DBE5FA] h-14 rounded-md ">Create New Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
