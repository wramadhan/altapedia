import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../images/productclothes.png";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const AddProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [foto, setFoto] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [categoryid, setCategoryid] = useState(2);
  const [cookies, removeCookie] = useCookies();

  const handleAddProduct = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${cookies.tokenUser}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("description", description);
    formdata.append("categoryid", categoryid);
    formdata.append("quantity", quantity);
    formdata.append("foto", foto);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://35.162.202.237:80/product", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        toMyProduct();
      })
      .catch(error => console.log('error', error));
  };

  const toMyProduct = () => {
    navigate("/myproduct");
  };

  const addName = (event) => {
    setName(event.target.value);
  };
  const addPrice = (event) => {
    setPrice(event.target.value);
  };
  const addFoto = (event) => {
    setFoto(event.target.value);
  };
  const addDescription = (event) => {
    setDescription(event.target.value);
  };
  const addCategoryID = (event) => {
    setCategoryid(event.target.value);
  };
  const addQuantity = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="mb-44">
        <h1 className="text-center mx-auto font-bold text-4xl text-[#1B345F] mt-20 mb-14">
          Add My Product
        </h1>
        <div className="md:flex md:justify-around sm:mr-4 ">
          <div className=" mx-4">
            <h3 className="text-xl font-medium text-[#1B345F] mb-6">
              Product Title
            </h3>
            <input
              className="w-full h-10 sm:w-[522px] sm:h-14 border border-[#DBE5FA] rounded-lg"
              onChange={addName}
            />
            <p className="text-xs text-[#CCCCCC] mb-8">
              when entering the product name, you have a maximum of 20
              characters
            </p>

            <h3 className="text-xl font-medium text-[#1B345F] mb-6">
              Product Description
            </h3>
            <textarea
              className="w-full h-36  sm:w-[522px] sm:h-[242px] border border-[#DBE5FA] rounded-lg p-2"
              onChange={addDescription}
              name=""
              id=""
            ></textarea>

            <p className="text-xs text-[#CCCCCC] mb-8">
              Do not exceed 100 characters when entering a product description
            </p>

            <h3 className="text-xl  font-medium text-[#1B345F] mb-6">
              Price/pcs
            </h3>
            <input
              className="w-full h-10 sm:w-[522px] sm:h-14 border border-[#DBE5FA] rounded-lg pl-2"
              type="number"
              placeholder="Enter Price"
              onChange={addPrice}
            />
            <p className="text-xs text-[#CCCCCC] mb-8">
              Set the minimum amount to buy for this product
            </p>

            <h3 className="text-xl  font-medium text-[#1B345F] mb-6">
              Quantity
            </h3>
            <input
              className="w-full h-10 sm:w-[522px] sm:h-14 border border-[#DBE5FA] rounded-lg pl-2"
              type="number"
              placeholder="Enter Quantity"
              onChange={addQuantity}
            />
            <p className="text-xs text-[#CCCCCC] mb-8">
              Set the stock available for this product
            </p>

            <h3 className="text-xl  font-medium text-[#1B345F] mb-6">
              Product Category ID
            </h3>
            <input
              className="w-full h-10 sm:w-[522px] sm:h-14 border border-[#DBE5FA] rounded-lg pl-2"
              type="number"
              placeholder="Enter Product Category ID"
              onChange={addCategoryID}
            />
            <p className="text-xs text-[#CCCCCC] mb-8">
              <span className="text-[#F7731C]">*</span>Please set the Category ID for this product. "1" for All Product, "2" for Men Product, "3" for Women Product, "4" for Accesories
            </p>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-medium text-[#1B345F] mb-6 text-center sm:text-left">
              Product Images
            </h3>
            <div className="flex justify-center">
              <div className="border-dotted border-slate-600/50 w-[320px] h-[320px] border-[3px]">
                <input
                  type="file"
                  className="w-full h-full"
                  onChange={addFoto}
                />
              </div>
            </div>
            <br />
            <div className="flex justify-center">
              <button
                className="bg-[#FEF3EB] text-xl text-[#F7731C] rounded-lg w-40 h-14 mr-6"
                onClick={() => toMyProduct()}
              >
                Cancel
              </button>
              <button
                className="bg-[#F7731C] text-xl text-white w-40 h-14 rounded-lg"
                onClick={() => handleAddProduct()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddProduct;
