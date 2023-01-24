import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: #0f52ba;
  height: 101px;
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

export const FooterArea = styled.div`
  height: 34px;
  background: #eeeeee;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-width: 100%;
  bottom: 0;
  left: 0;
`;
