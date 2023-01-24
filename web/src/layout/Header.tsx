import { HeaderArea, Logo, ShoppingCartArea } from "../styles/Styles";
import { FaShoppingCart } from "react-icons/all";
export const Header = () => {
  return (
    <HeaderArea>
      <Logo>
        <h1>MKS </h1>
        <p>Sistemas</p>
      </Logo>
      <ShoppingCartArea>
        <FaShoppingCart fontSize={17} />
        <span>0</span>
      </ShoppingCartArea>
    </HeaderArea>
  );
};
