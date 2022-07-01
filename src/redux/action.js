import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  console.log("action addCart:", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeToCart = (data) => {
  console.log("action removeCard:", data);
  return {
    type: REMOVE_TO_CART,
    data,
  };
};

export const emptyCart = () => {
  console.log("action emptyCard:");
  return {
    type: EMPTY_CART,
  };
};
