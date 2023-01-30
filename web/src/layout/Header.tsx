import { HeaderArea, Logo, ShoppingCartArea } from "../styles/Styles";
import ShopCart from "../assets/ShopCart.svg";
import Checkout from "../components/Checkout";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../redux/root-reducer";
import { selectProductsCount } from "../redux/Cart/cart.selector";

export const Header = () => {
  const [checkoutDisplay, setCheckoutDisplay] = useState("none");
  const handleClick = () => {
    setCheckoutDisplay("flex");
  };
  const { products } = useSelector((rootReducer) => rootReducer.carReducer);

  const productsCount = useSelector(selectProductsCount);
  const dispatch = useDispatch();

  return (
    <HeaderArea>
      <Checkout displayStyle={checkoutDisplay} />
      <Logo>
        <h1>MKS </h1>
        <p>Sistemas</p>
      </Logo>
      <ShoppingCartArea onClick={handleClick}>
        <img src={ShopCart} alt="" />
        <span>{productsCount}</span>
      </ShoppingCartArea>
    </HeaderArea>
  );
};
