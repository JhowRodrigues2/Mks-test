import { HeaderArea, Logo, ShoppingCartArea } from "../styles/Styles";
import ShopCart from "../assets/ShopCart.svg";
import Checkout from "../components/Checkout";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../redux/root-reducer";

export const Header = () => {
  const [checkoutDisplay, setCheckoutDisplay] = useState("none");
  const handleClick = () => {
    setCheckoutDisplay("flex");
  };
  const { products } = useSelector((rootReducer) => rootReducer.carReducer);

  const dispatch = useDispatch();
  const productsCount = useMemo(() => {
    return products.reduce(
      (acc: number, curr: number) => acc + curr.quantity,
      0
    );
  }, [products]);
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
