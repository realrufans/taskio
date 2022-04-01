import styled from "styled-components";

import { CheckerHBg, CheckColor } from "../constants/themeCheckerForBg";

export const Container = styled.footer`
  
  background: ${() => CheckerHBg("Sbbg")} top left/cover no-repeat;
  
  margin: 0 auto;
`;

export const FirstFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  text-align: start;
  margin: 0 auto;
  @media (max-width: 850px) {
    display: none;
  }
`;
export const Right = styled.div`
  min-width: 60%;

  margin: 0 auto;
  @media (max-width: 850px) {
    min-width: 90%;
  }
`;
export const Logo = styled.img`
  width: 50%;
  align-self: start;
`;
export const Body = styled.p`
  max-width: 350px;
  letter-spacing: 0.03em;
  text-align: start;
  line-height: 1.8;
`;

export const QuickSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 1em;
`;
export const SectionTitle = styled.h3`
  color: ${() => CheckColor("#1f3045", "#f0f4fc")};
`;
export const Links = styled.a`
  display: block;
  margin-top: 0.7em;
  text-align: start;
  text-decoration: none;
  link-style: none;
  color: #6b8299;

  &: hover {
    color: ${() => CheckColor("#1DBF73", "#1DBF73")};
  }
`;

export const SecondFrame = styled.div`
  margin-top: 2em;
`;
export const SocialsFrame = styled.div`
  margin-right: 2em;
`;
export const SocialsImg = styled.img`
  width: 20%;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 20%;
  }
`;
export const Copyright = styled.p`
  @media (max-width: 600px) {
    max-width: 300px;
    margin: 1em auto;
  }
`;

export const SocialImageFrame = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin: 0 auto;
`;
