import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircleIcon } from "@heroicons/react/solid";
import hero from "../icons/hero.svg";
import mission from "../icons/mission.svg";

function Taskio() {
  AOS.init();
  return (
    <div className="all">
      <div className="secA">
        <div className="secAChildren">
          <div className="secAdetails">
            <div className="motto">
              '<span className="green">Do</span> Less Earn{" "}
              <span className="green">More</span>'
            </div>
            <p className="firstp ">
              The TelosTask platform offers 4-in-1 product features of Tasks.
              Set up to achieve the possibilities of an actual "task
              distributions" For the completion of big and small Tasks Which we
              refer to as micro and macro gigs alongside taskdrop and
              Thurderclapping. Welcome to the world of WorkFi perhaps...{" "}
              <strong className="green">Taskfi</strong>{" "}
            </p>
          </div>

          <img className="  firstImage" src={hero} />
        </div>
      </div>

      {/* section B */}

      <div className="B">
        <div className="secB">
          <h1>What is TelosTask</h1>
          <div className="sectionBDetails">
            <div className="sectionBChild">
              {/* <img
                className="image"
                src="https://telostask.io/wp-content/uploads/2021/02/kisspng-initial-coin-offering-blockchain-cryptocurrency-se-5c6e44946bf213.4465598515507303884422.png"
              /> */}

              <img className="image" src={mission} />

              <p className="TtaskInfo">
                <strong className="strong">TelosTask:</strong> The TelosTask
                platform is a peer-to-peer multi-purpose freelance marketplace
                that utilizes blockchain technology and allows those who need
                some tasks completed (Employers) to connect with gig workers
                (Micro/Macro workers) from anywhere in the world.{" "}
                <a href="https://cointelegraph.com/news/telos-launches-new-gig-economy-platform-on-the-blockchain">
                  Read More
                </a>{" "}
              </p>
            </div>

            <div className="sectionBChild">
              <img
                className="image imagesec"
                src='https://telostask.io/wp-content/uploads/2021/02/kisspng-initial-coin-offering-blockchain-cryptocurrency-se-5c6e44946bf213.4465598515507303884422.png'
                alt="the mission"
              />

              <p className="TtaskInfo">
                <strong className="strong">The mission:</strong> Our mission to
                improve the freelance industry by building a robust
                decentralized freelance marketplace of task seekers and task
                workers through the application of blockchain technology, is to
                solve the common problems of traditional gig platforms of which
                might make the "TelosTask application" become the new
                freelancing financial trend of WorkFi, perhaps{" "}
                <span>"TaskFi"</span>.{" "}
                <a href="https://dappradar.com/telos/marketplaces/telostask">
                  {" "}
                  Continue reading
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section C */}

      {/* sectionc */}
      <div className="secC">
        <h1> TelosTask platform</h1>

        <p className="secp">
          {" "}
          A new powerful freelance marketplace built by innovative minds and
          with flawless technology for the freelance community
        </p>

        <div className="secCFAndVid">
          <div className="features">
            <h2>Platform features</h2>
            <div className="dnp  ">
              <CheckCircleIcon className="icon" />
              <div>Micro Tasks</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>Macro Tasks</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>Taskclap</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>Taskdrop</div>
            </div>
          </div>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bE-S8wzSqrg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* section D */}

      {/* section D */}

      <div className="secD">
        <h1>Task tokenomics</h1>{" "}
        <div className="sectionDChildren">
          <img
            className="image"
            src="https://telostask.io/wp-content/uploads/2021/04/taskt.png"
          />
          <div className="tokenDetails">
            <p>
              {" "}
              <CheckCircleIcon className="icon" /> Total token supply:
              100,000,000
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" /> Team - 16% (4 years vesting
              2021 - 2025)
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" /> Marketing - 20%
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" /> ITO - 40%
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" /> Development - 20%
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" /> Airdrop - 1%
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" /> Unallocated/minting - 3%
            </p>
          </div>
        </div>
      </div>

      {/* SECTION E */}

      {/* sectionE */}
      <div className="Neon">
        <div className="secE">
          <h1>Roadmap</h1>
          <div className="secEChildren">
            <div className="tokenDetails roadmappoints">
              <h3>2022, (Q2) - 2023 (Q2)</h3>
              <p>
                <CheckCircleIcon className="icon" />
                TelosTask V2 (Beta 2.0 launched)
              </p>

              <p>
                <CheckCircleIcon className="icon" />
                Final IDO (TaskFi Offering)
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                More Marketing
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                Team expansion
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                Mobile App (Android version)
              </p>

              <p>
                <CheckCircleIcon className="icon" />
                Exchange listing
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                Task Referral program
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                Partnerships
              </p>

              <p>
                <CheckCircleIcon className="icon" />
                Mobile app (IOs version)
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                Series of features and upgrades updates
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                First Task token burn 🔥
              </p>

              <p>
                <CheckCircleIcon className="icon" />
                Web3 integrations
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                Gateways and bridges
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                Update Roadmap 2023.
              </p>
            </div>

            <div className="tokenDetails roadmappoints">
              <h3>2021 - Q1, 2022 - Q1</h3>
              <p>
                <CheckCircleIcon className="icon" />
                Countdown to launch Alpha announcement
              </p>

              <p>
                <CheckCircleIcon className="icon" />
                I.T.O (Initial Taskofferings)
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                Alpha Platform Launch
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                First Marketing
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                $TASK first Dex listing
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                distribution
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                Development of TelosTask V2 (Beta)
              </p>
            </div>

            <div className="tokenDetails roadmappoints">
              <h3>2020: Q4 - 2021 Q2</h3>
              <p>
                <CheckCircleIcon className="icon" />
                Ideations of a gig
              </p>

              <p>
                <CheckCircleIcon className="icon" />
                Telos Task envisioned
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                Telos Task branding
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                Telos WPS Approved to build
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                TelosTask Alpha development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskio;
