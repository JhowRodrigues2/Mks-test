import {
  CheckoutArea,
  CheckoutButton,
  CheckoutItem,
  CheckoutItemQuantityButton,
  CheckoutTopArea,
} from "../styles/Styles";

import { useSelector } from "react-redux";
import rootReducer from "../redux/root-reducer";
import { CheckoutProps, ProductsProps } from "../types/types";

const Checkout = ({ displayStyle }: CheckoutProps) => {
  const { products } = useSelector((rootReducer) => rootReducer.carReducer);
  return (
    <CheckoutArea color={displayStyle}>
      <CheckoutTopArea>
        <h1>Carrinho de Compras</h1>
        <button>X</button>
      </CheckoutTopArea>

      {products.map((itens: ProductsProps) => (
        <CheckoutItem>
          <img src={itens.photo} alt="" />
          <span>{itens.name}</span>
          <CheckoutItemQuantityButton>
            <button>-</button>
            <div className="quantity-value">{itens.quantity}</div>
            <button>+</button>
          </CheckoutItemQuantityButton>
          <p>R${Math.round(itens.price)}</p>
        </CheckoutItem>
      ))}

      <CheckoutButton> Finalizar Compra</CheckoutButton>
    </CheckoutArea>
  );
};

export default Checkout;
