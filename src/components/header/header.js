import styled from "styled-components";
import { CheckerButton, CheckColor } from "../constants/themeCheckerForBg";

export const Container = styled.div`
  background-color: #162438;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  margin 0 auto;
  

  margin-bottom: 2em;
  @media (max-width: 600px) {
    margin-bottom: 8em;
  }
`;

export const Frame = styled.h1`
  margin: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width:98%;
  
   
`;
export const LogoFrame = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-right: 1em;
  justify-content: start;
`;
export const Logo = styled.img`
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const MiddleFrame = styled.div`
  display: flex;
  width: 80%;
  
  justify-content: space-between;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Textlink = styled.a`
  font-size: 1rem;
  cursor:pointer;
  text-align: start;
  text-decoration: none;
  link-style: none;
  color: #6b8299;
  &: hover {
    color: ${() => CheckColor("#1DBF73", "#1DBF73")};
  }
`;

export const Themebtn = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

export const RightFrame = styled.div`
  display: flex;
  margin-left:0.2em;
 
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    
    margin-right:0.2em;
  }
`;

export const ButtonLink = styled.button`
  background: ${CheckerButton("#fcb41c")};
  padding: 0.5em;
  box-shadow: 3px 5px 15px #fcb41c;
  @media(max-width:800px){  box-shadow: 3px 5px 15px #fcb41c};
  border-radius: 0.7em;
  border-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  width:${({ dwidth }) => dwidth}%;
  cursor: pointer;
   @media (max-width:800px){
     width:${({ mwidth }) => mwidth}%;
   }
  
  
  outline: ${CheckerButton("#DEE7F5")};
  text-decoration: none;
  color: white;
 

  }

  transition:  0.4s ease-in-out;
   &: hover{
    transform: scale(1.1);
   }

`;

export const HeaderLoading = styled.div`
  height: 8px;
  background-color: ${() => CheckColor("#fcb41c", "#1DBF73")};
  width: ${({ width }) => width}%;
`;
export const HeaderLoadingFrame = styled.div`
  width: 100%;
  height: 8px;
  background: #ccc;
`;
