import React from "react";

import {
  Container,
  Frame,
  MiddleFrame,
  RightFrame,
  LogoFrame,
  Logo,
  Textlink,
  ButtonLink,
  Themebtn,
  HeaderLoading,
  HeaderLoadingFrame,
} from "./header";

export default function Header({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Header.Frame = function HeaderFrame({ children }) {
  return <Frame>{children}</Frame>;
};
Header.LogoFrame = function HeaderFrame({ children, ...resprops }) {
  return <LogoFrame {...resprops}>{children}</LogoFrame>;
};
Header.Logo = function HeaderLogo({ to, ...restprops }) {
  return <Logo {...restprops} />;
};

Header.MiddleFrame = function HeaderMiddleFrame({ children }) {
  return <MiddleFrame>{children}</MiddleFrame>;
};

Header.RightFrame = function HeaderRightFrame({ children }) {
  return <RightFrame>{children}</RightFrame>;
};

Header.Themebtn = function HeaderThemebtn({ ...restprops }) {
  return <Themebtn {...restprops} />;
};

Header.TextLinks = function HeaderTextlinks({ children, ...restprops }) {
  return <Textlink {...restprops}>{children}</Textlink>;
};

Header.ButtonLink = function HeaderButton({
  dwidth = "true",
  mwidth = "true",
  children,
  ...restprops
}) {
  return dwidth && mwidth ? (
    <ButtonLink dwidth={dwidth} mwidth={mwidth} {...restprops}>
      {children}
    </ButtonLink>
  ) : (
    children
  );
};

Header.HeaderLoading = function HeaderHeaderLoading({
  width = "true",
  children,
}) {
  return <HeaderLoading width={width} />;
};

Header.HeaderLoadingFrame = function HeaderHeaderLoadingFrame({ children }) {
  return <HeaderLoadingFrame>{children}</HeaderLoadingFrame>;
};
