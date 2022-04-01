import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F2F4F9",
  color: "#6B8299",
};

export const darkTheme = {
  body: "#18273D",
  color: "#D3D3D3",
};

export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.color}
  

}

`;
