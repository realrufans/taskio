import React from "react";
 import {
  Container,
  FirstFrame,
  Left,
  Right,
  Logo,
  Body,
  QuickSection,
  SectionTitle,
  Links,
  SecondFrame,
  SocialsFrame,
  SocialsImg,
  Copyright,
  SocialImageFrame,
} from "./footer";

export default function Footer({ children }) {
  return <Container>{children}</Container>;
}

Footer.FirstFrame = function FooterFirstFrame({ children }) {
  return <FirstFrame>{children}</FirstFrame>;
};

Footer.Left = function FooterLeft({ children }) {
  return <Left>{children}</Left>;
};

Footer.Right = function FooterRight({ children }) {
  return <Right>{children}</Right>;
};
Footer.Logo = function FooterLogo({ children, ...restprops }) {
  return <Logo {...restprops} />;
};
Footer.Body = function FooterBody({ children }) {
  return <Body>{children}</Body>;
};

Footer.QuickSection = function FooterQuickSection({ children }) {
  return <QuickSection>{children}</QuickSection>;
};
Footer.SectionTitle = function FooterSectionTitle({ children }) {
  return <SectionTitle>{children}</SectionTitle>;
};

Footer.Links = function FooterLinks({ children, ...restprops }) {
  return <Links {...restprops}>{children}</Links>;
};

Footer.SecondFrame = function FooterSecondFrame({ children }) {
  return <SecondFrame>{children}</SecondFrame>;
};

Footer.SocialsFrame = function FooterSocialsFrame({ children }) {
  return <SocialsFrame>{children}</SocialsFrame>;
};

 

Footer.SocialsImg = function FooterSocialImage({
  children,
  to,
  ...restprops
}) {
  return (
     
      <SocialsImg {...restprops}>{children}</SocialsImg>  
    
  )
};


Footer.Copyright = function FooterCopyright({ children }) {
  return <Copyright>{children}</Copyright>;
};
Footer.SocialImageFrame = function FooterSocialImageFrame({ children , ...resprops }) {
  return <SocialImageFrame   >{children}</SocialImageFrame>
}
