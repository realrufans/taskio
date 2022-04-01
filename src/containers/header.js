import React, { useContext, useState, useEffect } from "react";
import { Header } from "../components";
import { ThemeContext } from "../lib/context";
 

function HHeader() {
  const { theme, setTheme, modal, setModal } = useContext(ThemeContext);
  const [width, setWidth] = useState(0);

  // Change theme handler
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // Loading bar on scrooll
  const getLoadingWidth = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const currentwidth = scrolled;
    setWidth(currentwidth);
  };

  window.onscroll = () => getLoadingWidth();

 
  return (
    <Header>
      <Header.Frame>
        <Header.LogoFrame>
          <Header.Logo
            onClick={() => (window.location.href = "https://telostask.app")}
            src={require("../icons/logo.png")}
            alts="telostask logo"
          />{" "}
          <div className="headertext">TelosTask</div>
        </Header.LogoFrame>

        <Header.MiddleFrame>
          <Header.TextLinks
            href="https://telostask.app/login"
            target="_blank"
            rel="noopener"
          >
            Get tasks
          </Header.TextLinks>
          <Header.TextLinks
            href="https://telostask.app/login"
            target="_blank"
            rel="noopener"
          >
            Task Paper
          </Header.TextLinks>
          <Header.TextLinks
            href="https://telostask.app/login"
            target="_blank"
            rel="noopener"
          >
            Task Blog
          </Header.TextLinks>
          <Header.TextLinks
            href="https://telostask.app/login"
            target="_blank"
            rel="noopener"
          >
            Pitch Deck
          </Header.TextLinks>
          <Header.TextLinks
            href="https://telostask.app/login"
            target="_blank"
            rel="noopener"
          >
            Browse Task
          </Header.TextLinks>
          <Header.TextLinks
            href="https://telostask.io/wp-content/uploads/2021/04/Telos-Task-Whitepaper-2.pdf"
            target="_blank"
            rel="noopener"
          >
            Report Bug
          </Header.TextLinks>
        </Header.MiddleFrame>

        <Header.RightFrame id="login">
          <Header.Themebtn
            onClick={themeToggler}
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
