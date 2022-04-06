import "./App.css";

import HHeader from "./containers/header";

import FFooter from "./containers/footer";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles, darkTheme, lightTheme } from "./containers/theme";
import { useState, useRef } from "react";
import { ThemeContext } from "./lib/context";
import Typewriter from "typewriter-effect";
import Taskio from "./containers/Taskio";

function App() {
  const getUserTheme = localStorage.getItem("userThemeChoice");
  const appRef = useRef(null);
  const [theme, setTheme] = useState(
    getUserTheme === null ? "dark" : getUserTheme
  );

  // login modal
  const [modal, setModal] = useState(false);
  console.log("rendered");

  localStorage.setItem("userThemeChoice", theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, modal, setModal, appRef }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <div className="App">
            <HHeader />

            <Taskio />
            <FFooter />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
