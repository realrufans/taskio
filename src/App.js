import "./App.css";

import HHeader from "./containers/header";

import FFooter from "./containers/footer";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles, darkTheme, lightTheme } from "./containers/theme";
import { useState, useRef } from "react";
import { ThemeContext } from "./lib/context";
 

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
            <div onClick={() => setModal(false)}>
              <div className="all">
                <div>"Do less earn more"</div>
                <h1 className="introt"> Introduction</h1>
                <div className="secA">
                  <img
                    className="image"
                    src="https://telostask.io/wp-content/uploads/2021/02/kisspng-initial-coin-offering-blockchain-cryptocurrency-se-5c6e44946bf213.4465598515507303884422.png"
                  />

                  <div className="firstp">
                    <p>
                      The TelosTask platform offers 4-in-1 product features of
                      Tasks…{" "}
                    </p>
                    <p>
                      Set up to achieve the possibilities of an actual "task
                      distributions"
                    </p>
                    <p>For the completion of big and small Tasks</p>
                    <p>
                      Which we refer to as micro and macro gigs alongside
                      taskdrop and Thurderclapping
                    </p>

                    <p>Welcome to the world of WorkFi perhapS...</p>
                    <h1 className=""> 'TaskFi'</h1>
                  </div>
                </div>
              </div>

              {/* section B */}

              <div className="secB">
                <h1>What is TelosTask:</h1>
                <div className="secBChildren">
                  <img
                    className="image"
                    src="https://telostask.io/wp-content/uploads/2021/02/kisspng-initial-coin-offering-blockchain-cryptocurrency-se-5c6e44946bf213.4465598515507303884422.png"
                  />

                  <div>
                    <div className="TtaskInfo">
                      <strong className="strong">TelosTask</strong>The TelosTask
                      platform is a peer-to-peer multi-purpose freelance
                      marketplace that utilizes blockchain technology and allows
                      those who need some tasks completed (Employers) to connect
                      with gig workers (Micro/Macro workers) from anywhere in
                      the world.{" "}
                      <a href="https://cointelegraph.com/news/telos-launches-new-gig-economy-platform-on-the-blockchain">
                        Read More
                      </a>{" "}
                    </div>
                    <div className="TtaskInfo">
                      <strong className="strong">The mission:</strong> Our
                      mission to improve the freelance industry by building a
                      robust decentralized freelance marketplace of task seekers
                      and task workers through the application of blockchain
                      technology, is to solve the common problems of traditional
                      gig platforms of which might make the "TelosTask
                      application" become the new freelancing financial trend of
                      WorkFi, perhaps "TaskFi".{" "}
                    </div>
                    <div className="TtaskInfo">
                      We intend to simplify how freelancers and clients interact
                      using reliable technology to keep in check and to track
                      the progress of both parties in a fair and standardized
                      modus operandi for the satisfaction of all platform users.{" "}
                      <a href="https://dappradar.com/telos/marketplaces/telostask">
                        {" "}
                        Continue reading
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* sectionc */}
              <div className="secC">
                <h1 className=" "> TelosTask Platform</h1>
                <div className="secfd">
                  {" "}
                  A new powerful freelance marketplace built by innovative minds
                  and with flawless technology for the freelance community
                </div>
                <div className="secCP">
                  <div className="features">
                    <h3>Platform features:</h3>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>Micro Tasks</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>Macro Tasks</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>Taskclap</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>Taskdrop</div>
                    </div>
                  </div>

                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/bE-S8wzSqrg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <h2>Task tokenomics</h2>
              <div className="tokenomics">
                {" "}
                <img
                  className="image"
                  src="https://telostask.io/wp-content/uploads/2021/02/kisspng-initial-coin-offering-blockchain-cryptocurrency-se-5c6e44946bf213.4465598515507303884422.png"
                />
                <div>
                  <p>Total token supply: 100,000,000</p>
                  <p> - Team - 16% (4 years vesting 2021 - 2025)</p>
                  <p> - Marketing - 20%</p>
                  <p> - ITO - 40%</p>
                  <p> - Development - 20%</p>
                  <p> - Airdrop - 1%</p>
                  <p> - Unallocated/minting - 3%</p>
                </div>
              </div>
              <>
                <h2>Roadmap</h2>
                <div className="roadMap">
                  <div>
                    <h3>Q3-Q4 - 2021</h3>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>Macro Task Category upgraded</div>
                    </div>

                    <div className="dnp">
                      <div className="dot"></div>
                      <div>
                        TelosTask Airdrop platform completed and integrated
                      </div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>More Marketing and community building</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>Strategic partnership</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>Second Quarterly Token burn (September)</div>
                    </div>

                    <div className="dnp">
                      <div className="dot"></div>
                      <div> TLOS Gateway (Use tlos to list Task)</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div> TelosTask 1.5</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>Android app</div>
                    </div>

                    <div className="dnp">
                      <div className="dot"></div>
                      <div>More exchange listing</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>Premium features announced</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>Telos Task 2.0 announced</div>
                    </div>

                    <div className="dnp">
                      <div className="dot"></div>
                      <div>TelosTask 2.0 upgraded (With intuitive UI)</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div> Third quarter token burn (November)</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div> EOS gateway</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>IOS App announced</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>Years Achievements and progress recap </div>
                    </div>
                  </div>

                  <div>
                    <h3>Q1 - Q2 - 2022</h3>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>Development and revamping</div>
                    </div>

                    <div className="dnp">
                      <div className="dot"></div>
                      <div>
                        {" "}
                        Announcement of community voting features utilizing
                        Telos Decide
                      </div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div> Telos Task 3.0</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div> Fourth Quarterly Token burn (March)</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div> ETH gateway</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div> Community voting features completed</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div>
                        {" "}
                        Introduction of community voting platform using Telos
                        Decide
                      </div>
                    </div>

                    <div className="dnp">
                      <div className="dot"></div>
                      <div> Sixth quarterly Token burn (June)</div>
                    </div>
                    <div className="dnp">
                      <div className="dot"></div>
                      <div> Announcement of Advertisement features</div>
                    </div>

                    <div className="dnp">
                      <div className="dot"></div>
                      <div> Roadmap update</div>
                    </div>
                  </div>
                </div>
              </>

              <FFooter />
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
