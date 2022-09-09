import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Card = () => {
  return (
    <div>
      <FaShoppingBag className="w-52 text-orange-500" />
      <img src="http://placehold.it/500x300" alt="placeholder" />
      <p>Title</p>
    </div>
  );
};

export default Card;
