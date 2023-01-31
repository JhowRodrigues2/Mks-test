import { createSlice } from "@reduxjs/toolkit";
import { ProductsProps } from "../../types/types";

type CartState = {
  products: ProductsProps[];
  toogleMenu: string;
};
const initialState: CartState = {
  products: [],
  toogleMenu: "none",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id == action.payload.id
      );

      if (productIsAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return;
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },

    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },

    decreaseProductQuantity: (state, action) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id != action.payload
      );
    },
    setToggleMenu: (state, action) => {
      return { ...state, toogleMenu: action.payload };
    },
  },
});
export const {
  addProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProduct,
  setToggleMenu,
} = cartSlice.actions;

export default cartSlice.reducer;
