import CartActionTypes from "./action-types";
import { PayloadAction } from "@reduxjs/toolkit";

export const addProductToCart = (payload: PayloadAction) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});
