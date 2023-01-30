import CartActionTypes from "./action-types";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductsProps } from "../../types/types";
const initialState = {
  products: [],
  productsTotalPrice: 0,
};

const carReducer = (state = initialState, action: PayloadAction<number>) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some(
        (product: ProductsProps) => product.id == action.payload.id
      );

      if (productIsAlreadyInCart) {
        return {
          state,
          products: state.products.map((product: ProductsProps) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id != action.payload
        ),
      };
    default:
      return state;
  }
};
export default carReducer;
