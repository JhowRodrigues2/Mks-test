import CartActionTypes from "./action-types";
import { PayloadAction } from "@reduxjs/toolkit";

export const addProductToCart = (payload: PayloadAction) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload: PayloadAction) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});
export const increaseProductQuantity = (payload: PayloadAction) => ({
  type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});
export const decreaseProductQuantity = (payload: PayloadAction) => ({
  type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});
