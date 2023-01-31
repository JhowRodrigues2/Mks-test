import { HeaderArea, Logo, ShoppingCartArea } from "../styles/Styles";
import ShopCart from "../assets/ShopCart.svg";
import Checkout from "../components/Checkout";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../redux/root-reducer";
import { selectProductsCount } from "../redux/Cart/cart.selector";
import { setToggleMenu } from "../redux/Cart/slice";
export const Header = () => {
  const [checkoutDisplayFlex] = useState("flex");

  const handleClick = () => {
    dispatch(setToggleMenu(checkoutDisplayFlex));
  };
  const { toogleMenu } = useSelector((rootReducer) => rootReducer.carReducer);

  const productsCount = useSelector(selectProductsCount);
  const dispatch = useDispatch();
  return (
    <HeaderArea>
      <Checkout displayStyle={toogleMenu} />
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
