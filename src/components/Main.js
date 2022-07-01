import React from "react";

import { addToCart, emptyCart, removeToCart } from "../redux/action.js";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { productList } from "../redux/productAction.js";

import "./header.css";

const Main = () => {
  const selector = useSelector((state) => state.productData);
  console.log("data in main from saga", selector);
  const dispatch = useDispatch();
  const product = {
    name: "I-phone",
    type: "mobile",
    price: 10000,
    color: "red",
  };

  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>ADD TO CART</button>
      <button onClick={() => dispatch(removeToCart(product.name))}>
        REMOVE TO CART
      </button>
      <button onClick={() => dispatch(emptyCart(product))}>EMPTY CART</button>
      <button onClick={() => dispatch(productList(product))}>USER LIST</button>
      <div className="product-container">
        {selector.map((item) => (
          <div key={item.id} className="product-item">
            <p>Id:{item.id}</p>
            <p>Name:{item.name}</p>
            <p>Email:{item.email}</p>
            <p>Website:{item.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
