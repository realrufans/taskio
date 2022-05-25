import { MenuIcon } from "@heroicons/react/solid";
import React, { useContext, useState, useEffect } from "react";
import { Header } from "../components";
import { ThemeContext } from "../lib/context";
import Modal from "./Modal";
import TaskPaperV3 from "../pdf/TaskPaperV3.pdf";
import { useNavigate } from "react-router-dom";

function HHeader() {
  const { theme, setTheme, modal, setModal } = useContext(ThemeContext);
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  // Change theme handler
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // Loading bar on scrooll
  // const getLoadingWidth = () => {
  //   const winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop;
  //   const height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   const scrolled = (winScroll / height) * 100;
  //   const currentwidth = scrolled;
  //   setWidth(currentwidth);
  // };

  // window.onscroll = () => getLoadingWidth();

  return (
    <Header className="Header">
      <Header.Frame>
        <Header.LogoFrame onClick={() => (window.location.href = "/")}>
          <Header.Logo
            src={require("../icons/logo.png")}
            alts="telostask logo"
          />{" "}
          <div className="headertext">TelosTask</div>
        </Header.LogoFrame>

        <Header.MiddleFrame>
          {/* <Header.TextLinks
            href="https://telostask.io/form/"
            target="_blank"
            rel="noopener"
          >
            Get tasks
          </Header.TextLinks> */}
          <Header.TextLinks href={TaskPaperV3} target="_blank" rel="noopener">
            Task Paper
          </Header.TextLinks>
          <Header.TextLinks
            href="https://telostask.medium.com/"
            target="_blank"
            rel="noopener"
          >
            Task Blog
          </Header.TextLinks>
          <Header.TextLinks
            href="https://docs.google.com/presentation/d/1RzQHW-9KR8mDFRNonnuSmxK2y37f0i-12PDA61uvo_4/edit#slide=id.p1"
            target="_blank"
            rel="noopener"
          >
            Pitch Deck
          </Header.TextLinks>
          <Header.TextLinks
            href="https://telostask.app"
            target="_blank"
            rel="noopener"
          >
            Product
          </Header.TextLinks>
          <Header.TextLinks href="/comingsoon" target="_blank" rel="noopener">
            Report Bug
          </Header.TextLinks>
        </Header.MiddleFrame>

        <Header.RightFrame id="login">
          <MenuIcon
            className="menu"
            onClick={() => setModal(!modal)}
            src={require("../icons/day-icon.png")}
          />
        </Header.RightFrame>
      </Header.Frame>
      {modal && <Modal />}
      <Header.HeaderLoadingFrame>
        <Header.HeaderLoading width={width} />
      </Header.HeaderLoadingFrame>
    </Header>
  );
}

export default HHeader;
