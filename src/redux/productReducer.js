/* eslint-disable no-unreachable */
/* eslint-disable default-case */

import { SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("reducer setproduct", action);
      return [...action.data];
      break;
    default:
      return data;
  }
};
