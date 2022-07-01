/* eslint-disable no-unreachable */
/* eslint-disable default-case */

import { ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer add:", action);
      return [action.data, ...data];
      break;
      case REMOVE_TO_CART:
      console.log("reducer remove:", action);
      data.length = data.length?data.length-1:[]
      return [ ...data];
      break;
      case EMPTY_CART:
        console.log("reducer remove:", action);
        data=[]
        return [ ...data];
        break;
    default:
      return data;
  }
};
