import "./App.css";

import HHeader from "./containers/header";

import FFooter from "./containers/footer";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles, darkTheme, lightTheme } from "./containers/theme";
import { useState, useRef } from "react";
import { ThemeContext } from "./lib/context";
import Typewriter from "typewriter-effect";
import Taskio from "./containers/Taskio";
import Comingsoon from "./containers/Comingsoon";

function App() {
  const getUserTheme = localStorage.getItem("userThemeChoice");
  const appRef = useRef();
  const [theme, setTheme] = useState(
    getUserTheme === null ? "dark" : getUserTheme
  );

  const [modal, setModal] = useState(false);

  localStorage.setItem("userThemeChoice", theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, modal, setModal, appRef }}>
      <ThemeProvider theme={theme === "dark" ? darkTheme : darkTheme}>
        <GlobalStyles />
        <Router>
          <div className="App">
            <Routes>
              <Route
                exact
                path="/taskio"
                element={
                  <div>
                    <HHeader />
                    <div className="apllusb">
                    <div onClick={() => setModal(false)}>
                      <Taskio />
                      <FFooter />
                    </div>
                    </div>
                  </div>
                }
              />

              <Route
                exact
                path="/comingsoon"
                element={
                  <>
                    {" "}
                    <HHeader />
                    <div onClick={() => setModal(false)}>
                      <Comingsoon />
                      <FFooter />
                    </div>
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
