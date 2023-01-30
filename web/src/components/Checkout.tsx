import {
  CheckoutArea,
  CheckoutButton,
  CheckoutItem,
  CheckoutItemQuantityButton,
  CheckoutTopArea,
  RemoveItemButton,
} from "../styles/Styles";
import { useSelector, useDispatch } from "react-redux";
import rootReducer from "../redux/root-reducer";
import { CheckoutProps, ProductsProps } from "../types/types";
import {
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../redux/Cart/action";

const Checkout = ({ displayStyle }: CheckoutProps) => {
  const { products } = useSelector((rootReducer) => rootReducer.carReducer);
  const dispatch = useDispatch();

  const handleRemoveClick = (productID: number) => {
    dispatch(removeProductFromCart(productID));
  };
  const handleIncreaseClick = (productID: number) => {
    dispatch(increaseProductQuantity(productID));
  };

  const handleDecreaseClick = (productID: number) => {
    dispatch(decreaseProductQuantity(productID));
  };
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
            <button onClick={() => handleDecreaseClick(itens.id)}>-</button>
            <div className="quantity-value">{itens.quantity}</div>
            <button onClick={() => handleIncreaseClick(itens.id)}>+</button>
          </CheckoutItemQuantityButton>
          <p>R${Math.round(itens.price)}</p>
          <RemoveItemButton onClick={() => handleRemoveClick(itens.id)}>
            x
          </RemoveItemButton>
        </CheckoutItem>
      ))}

      <CheckoutButton> Finalizar Compra</CheckoutButton>
    </CheckoutArea>
  );
};

export default Checkout;
