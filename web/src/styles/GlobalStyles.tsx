import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
html,body{
  height: 100%;
 
  
}body{
  display: flex;
  flex-direction: column;
  
}
`;

export default GlobalStyle;
