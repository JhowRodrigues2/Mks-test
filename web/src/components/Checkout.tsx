import {
  CheckoutArea,
  CheckoutButton,
  CheckoutItem,
  CheckoutItemArea,
  CheckoutItemQuantityButton,
  CheckoutTopArea,
  CheckoutTotal,
  PriceArea,
  RemoveItemButton,
} from "../styles/Styles";
import { useSelector, useDispatch } from "react-redux";
import { CheckoutProps, ProductsProps } from "../types/types";
import {
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  setToggleMenu,
} from "../redux/Cart/slice";
import { selectProductsTotalPrice } from "../redux/Cart/cart.selector";
import { useState } from "react";

const Checkout = ({ displayStyle }: CheckoutProps) => {
  const { products } = useSelector((rootReducer) => rootReducer.carReducer);
  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  const [checkoutDisplayNone] = useState("none");
  const dispatch = useDispatch();

  const handleRemoveClick = (productID: number) => {
    dispatch(removeProduct(productID));
  };
  const handleIncreaseClick = (productID: number) => {
    dispatch(increaseProductQuantity(productID));
  };

  const handleDecreaseClick = (productID: number) => {
    dispatch(decreaseProductQuantity(productID));
  };
  const handletoggleMenu = () => {
    dispatch(setToggleMenu(checkoutDisplayNone));
  };
  const { toogleMenu } = useSelector((rootReducer) => rootReducer.carReducer);

  return (
    <CheckoutArea color={toogleMenu}>
      <CheckoutTopArea>
        <h1>Carrinho de Compras</h1>
        <button onClick={() => handletoggleMenu()}>X</button>
      </CheckoutTopArea>
      <CheckoutItemArea>
        {products.map((itens: ProductsProps) => (
          <CheckoutItem>
            <img src={itens.photo} alt="" />
            <span>{itens.name}</span>
            <PriceArea>
              <CheckoutItemQuantityButton>
                <button onClick={() => handleDecreaseClick(itens.id)}>-</button>
                <div className="quantity-value">{itens.quantity}</div>
                <button onClick={() => handleIncreaseClick(itens.id)}>+</button>
              </CheckoutItemQuantityButton>
              <p>R${Math.round(itens.price)}</p>
            </PriceArea>
            <RemoveItemButton onClick={() => handleRemoveClick(itens.id)}>
              <p>x</p>
            </RemoveItemButton>
          </CheckoutItem>
        ))}
      </CheckoutItemArea>
      <CheckoutTotal>
        <p>Total:</p>
        <p>R${productsTotalPrice}</p>
      </CheckoutTotal>
      <CheckoutButton> Finalizar Compra</CheckoutButton>
    </CheckoutArea>
  );
};

export default Checkout;
