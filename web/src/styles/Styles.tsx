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
