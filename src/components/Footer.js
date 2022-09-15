import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#1B345F] w-full pt-2 sm:pt-14 pb-5 h-auto">
      <div className="flex justify-center">
        <div className="w-full flex flex-col text-center sm:justify-between sm:flex-row sm:text-left sm:w-4/5 sm:mr-32">
          <div className="grid content-center mb-8 sm:mb-0">
            <Link to="/home">
              <h1 className="text-[#F7731C] font-semibold text-3xl mb-2">
                Alta<span className="text-[#F0F4FD]">pedia</span>
              </h1>
            </Link>
            <h2 className="text-[#F0F4FD] font-sm text-xs">
              Making the the fashion better
            </h2>
            <h2 className="text-[#F0F4FD] font-medium text-xs">than before.</h2>
          </div>
          <div className="display-none flex justify-between basis-2/4">
            <div className="text-[#F0F4FD]">
              <h2 className="mb-4 text-lg font-semibold">Shop</h2>
              <h3 className="text-sm font-regular">Clothes man</h3>
              <h3 className="my-2 text-sm font-regular">Boy clothes</h3>
              <h3 className="text-sm font-regular">Girls clothes</h3>
            </div>
            <div className="text-[#F0F4FD]">
              <h2 className="mb-4 text-lg font-semibold">Altapedia</h2>
              <h3 className="text-sm font-regular">
                <a
                  href="https://academy.alterra.id/tech-talent-solutions/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Customer Service</button>
                </a>
              </h3>
              <h3 className="my-2 text-sm font-regular">
                <a
                  href="https://api.whatsapp.com/send/?phone=6281230055223&text=Hallo+Alterra+Academy%2C+Saya+ingin+bertanya+terkait+siswa+anda&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Contact Us</button>
                </a>
              </h3>
              <h3 className="text-sm font-regular">
                <a
                  href="https://academy.alterra.id/faq/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>FAQs</button>
                </a>
              </h3>
            </div>
            <div className="text-[#F0F4FD]">
              <h2 className="mb-4 text-lg font-semibold">Social Media</h2>
              <h3 className="my-2 text-sm font-regular">
                <a
                  href="https://www.instagram.com/alterra.academy/?hl=id"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Instagram</button>
                </a>
              </h3>
              <h3 className="my-2 text-sm font-regular">
                <a
                  href="https://www.facebook.com/alterra.academy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Facebook</button>
                </a>
              </h3>
              <h3 className="my-2 text-sm font-regular">
                <a
                  href="https://www.youtube.com/channel/UCb8nzs2qCUy7jJolKdI8Y8g"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>YouTube</button>
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pt-20">
        <hr className="w-11/12 text-white bg-white" />
      </div>
      <div className="text-white flex justify-center mt-5 text-sm">
        <AiOutlineCopyrightCircle className="text-white mt-1 mx-1" />
        <p>2022 Altapedia. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
