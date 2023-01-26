import { HeaderArea, Logo, ShoppingCartArea } from "../styles/Styles";
import ShopCart from "../assets/ShopCart.svg";
export const Header = () => {
  return (
    <HeaderArea>
      <Logo>
        <h1>MKS </h1>
        <p>Sistemas</p>
      </Logo>
      <ShoppingCartArea>
        <img src={ShopCart} alt="" />
        <span>0</span>
      </ShoppingCartArea>
    </HeaderArea>
  );
};
