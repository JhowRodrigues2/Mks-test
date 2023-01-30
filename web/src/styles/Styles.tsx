import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: #0f52ba;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  gap: 1rem;
  padding: 0px 65px 0px 65px;
  @media (max-width: 768px) {
    padding: 0px 15px 0px 15px;
  }
`;
export const Logo = styled.div`
  width: 328px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
  }
  p {
    margin-top: 1rem;
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
  }
`;
export const ShoppingCartArea = styled.button`
  width: 90px;
  height: 45px;
  background: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    margin-top: 3px;
  }
`;

export const ContentArea = styled.div`
  width: 100%;
  min-height: 85vh;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`;

export const ContainerArea = styled.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
  grid-template-columns: 215px 215px 215px 215px;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerItem = styled.div`
  background-color: antiquewhite;
  width: 217px;
  height: 285px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 217px;
    height: 138px;
    margin-top: 8px;
    cursor: pointer;
  }
  span {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 0.5rem;
  }
  h1 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 16px;
    margin-top: 16px;
    color: rgba(44, 44, 44, 1);
  }
  span p {
    padding: 6px 4px;
    width: 64px;
    height: fit-content;
    background: #373737;
    border-radius: 5px;
    font-weight: 700;
    font-size: 15px;
    color: rgba(255, 255, 255, 1);
    line-height: 15px;
  }

  p {
    font-weight: 300;
    font-size: 12px;
    line-height: 12px;
    padding: 0 0.5rem;
  }

  @media (max-width: 768px) {
    height: 265px;
  }
`;
export const FooterArea = styled.div`
  flex-shrink: 0;
  height: 5vh;
  background: #eeeeee;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: #0f52ba;
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  margin-top: 12px;
  height: 32px;
  border: none;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;

  img {
    width: 12px;
    height: 13.5px;
  }
`;
export const CheckoutArea = styled.div`
  background: #0f52ba;
  width: 486px;
  height: 100vh;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  display: ${(props) => props.color};
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;

  animation: fromLeft 0.5s backwards;

  @keyframes fromLeft {
    from {
      opacity: 0;
      transform: translateX(130px);
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    width: 330px;
  }
`;
export const CheckoutButton = styled.div`
  width: 100%;
  height: 97px;
  background: #000000;
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CheckoutTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 36px 22px 0px 47px;
  h1 {
    width: 180px;
    height: 56px;
    color: #ffffff;
    font-size: 27px;
    line-height: 33px;
  }
  button {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #000000;
    color: #ffffff;
    font-weight: 400;
    font-size: 28px;
    cursor: pointer;
  }
`;
export const CheckoutItem = styled.div`
  position: relative;
  min-width: 113px;
  height: 95px;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  margin: 0px 60px 0px 47px;
  border-radius: 8px;
  color: #2c2c2c;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 46px;
    height: 57px;
  }
  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const CheckoutItemQuantityButton = styled.div`
  display: flex;
  border: 1px solid lightgray;
  padding: 2px 0;
  border-radius: 4px;
  width: 65px;
  height: 19px;
  button {
    font-size: 12px;
    width: 1.8rem;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  .quantity-value {
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
    padding: 0 0.75rem;
    font-size: 12px;
    font-weight: 600;

    align-self: center;
  }
`;

export const RemoveItemButton = styled.button`
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: #000000;
  font-weight: 600;
  cursor: pointer;
  right: -8px;
  top: -8px;
  color: #fff;
  width: 18px;
  height: 18px;
`;
export const CheckoutTotal = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 28px;
  justify-content: space-between;
  padding: 0px 47px 0px 47px;
`;

export const Loading = styled.div`
  animation: rotate 2s linear infinite;
  position: absolute;
  left: 50%;
  margin-top: 40px;
  font-size: 50px;
  margin-left: -25px;
  .loader {
    width: 120px;
    height: 120px;
  }
  @keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
