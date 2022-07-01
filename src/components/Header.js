import React from "react";
import { useSelector } from "react-redux";
import image2 from "../image/cart2.png";
import "./header.css";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log("header:", result);
  return (
    <div className="header">
      <div className="card-div">
        <span>{result.length}</span>
        {<img src={image2} alt="image" width={30} height={30} />}
      </div>
    </div>
  );
};

export default Header;
