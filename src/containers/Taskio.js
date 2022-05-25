import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircleIcon } from "@heroicons/react/solid";
import hero from "../icons/hero.svg";
import mission from "../icons/mission.svg";
import { Typing, TypingStep } from "typing-effect-reactjs";
import heroL from "../icons/heroL.json";
import { useEffect } from "react";
import lottie from "lottie-web";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
} from "@progress/kendo-react-charts";
 
import "hammerjs";
const series = [
  {
    category: "0-14",
    value: 0.2545,
  },
  {
    category: "15-24",
    value: 0.1552,
  },
  {
    category: "25-54",
    value: 0.4059,
  },
  {
    category: "55-64",
    value: 0.0911,
  },
  {
    category: "65+",
    value: 0.0933,
  },
];

const labelContent = (props) => {
  let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2,
  });
  return `${props.dataItem.category} years old: ${formatedNumber}`;
};


function Taskio() {
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.querySelector("#hero"),
      animationData: heroL,
    });
    return () => anim.destroy();
  });
  AOS.init();



  return (
    <div className="all">
      <div className="secA">
        <div className="secAChildren">
          <div className="secAdetails">
            <div className="motto">
              <span className="green">Do</span> Less Earn{" "}
              <span className="green">More</span>
            </div>
            <p className="firstp">
              The TelosTask platform offers 4-in-1 product features of Tasks.
              Set up to achieve the possibilities of an actual "task
              distributions" For the completion of big and small Tasks Which we
              refer to as micro and macro gigs alongside taskdrop and
              Thurderclapping. Welcome to the world of WorkFi perhaps...{" "}
              <span className="yellow">TaskFi</span>{" "}
            </p>
          </div>
          <div className="firstImage" id="hero"></div>

          {/* <img className="firstImage" id="hero" /> */}
        </div>
      </div>

      {/* section B */}
 

      <div className="secB">
        <h1 className="ttaskdef">What is TelosTask?</h1>
        <div className="sectionBDetails">
          <div className="sectionBChild">
            {/* <img className="image s" src={mission} /> */}
            <div className="texts">
              {" "}
              <p className="TtaskInfo">
                <div>
                  {" "}
                  <strong className="">TelosTask</strong>
                </div>{" "}
                is a peer-to-peer multi-purpose freelance marketplace that
                utilizes blockchain technology and allows those who need some
                tasks completed (Employers) to connect with gig workers
                (Micro/Macro workers) from anywhere in the world.{" "}
                <a href="https://cointelegraph.com/news/telos-launches-new-gig-economy-platform-on-the-blockchain">
                  Read More
                </a>{" "}
              </p>
              <p className="TtaskInfo  sect">
                <div>
                  {" "}
                  <strong className="">The Mission</strong>
                </div>{" "}
                Our mission to improve the freelance industry by building a
                robust decentralized freelance marketplace of task seekers and
                task workers through the application of blockchain technology,
                is to solve the common problems of traditional gig platforms of
                which might make the "TelosTask application" become the new
                freelancing financial trend of WorkFi, perhaps{" "}
                <span>"TaskFi"</span>.{" "}
                <a href="https://dappradar.com/telos/marketplaces/telostask">
                  {" "}
                  Continue reading
                </a>
              </p>
            </div>
            <div>
              {" "}
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
        </div>

        <div className="sectionBChild flexsec">
          {/* <img
              className="image s "
              src="https://images.hive.blog/DQmQwogeucHRkRXdcZBtGGuNHchmdR6bb8yWYiq3Q1TuqDb/image.png"
              alt="the mission"
            /> */}
        </div>
      </div>

      {/* section C */}

      {/* sectionc */}
      <div className="secC">
        <h1 style={{ fontSize: "3rem", marginBottom: "1em" }}>
          {" "}
          Telos<span style={{ color: "#FFC600" }}>Task</span> platform
        </h1>
        <p className="secp">
          A new powerful freelance marketplace built by innovative minds and
          with flawless technology for the freelance community.
        </p>
        {/* <div className="secCFAndVid">
          <div className="features"></div>
          <div>
            <div
              style={{
                fontSize: "2rem",
                marginTop: "2em",
              }}
            >
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
          </div>
        </div> */}
        <img
          style={{
            maxwidth: "100wv",
            width: "100%",
            margin: "0 auto",
          }}
          src="https://images.hive.blog/DQmZ9LjY9eM4W5mRtaXZbHphbKJsLc3kZEadA8aaGiPwoe7/image.png"
        />
      </div>

      {/* section D */}

      {/* section D */}

      <div className="secD">
        <h1>Task tokenomics</h1>{" "}
        <div className="sectionDChildren">
          {/* <img
            className="image"
            src="https://images.hive.blog/DQmVLw5r64eCcE2EPhAvoxHomVbVdEEX6SSUQ8X2LeZme6b/image.png"
          /> */}
          {/* <div className="tokenDetails">
            <h3>$Task on Telos</h3>
            <p>
              {" "}
              <CheckCircleIcon className="icon" />
              <span> Total token supply: 100,000,000</span>
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" />{" "}
              <span>Team - 16% (5 years vesting 2021 - 2025)</span>
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" />
              <span> Marketing - 20%</span>
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" /> <span>ITO - 40%</span>
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" />{" "}
              <span>Development - 20%</span>
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" /> <span>Airdrop - 1%</span>
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" />
              <span> Unallocated/minting - 3%</span>
            </p>
          </div> */}
          <div className="tokenDetails">
            <h3>$Task on Binance Smart Chain (Bsc)</h3>
            <p>
              {" "}
              <CheckCircleIcon className="icon" />
              <span> Total token supply: 100,000,000</span>
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" />{" "}
              <span>Team - 16% (5 years vesting 2021 - 2025)</span>
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" />
              <span> Marketing - 20%</span>
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" /> <span>ITO - 40%</span>
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" />{" "}
              <span>Development - 20%</span>
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" /> <span>Airdrop - 1%</span>
            </p>
            <p>
              {" "}
              <CheckCircleIcon className="icon" />
              <span> Unallocated/minting - 3%</span>
            </p>
            <div className="strong ">
              <p> Contract address:</p>
              <a href="https://bscscan.com/token/0x5090AA76fC140e20706f26e82EbC1dccB0D0438b">
                <p className="contract">
                  {" "}
                  0x5090AA76fC140e20706f26e82EbC1dccB0D0438b
                </p>
              </a>
            </div>
          </div>

          {/* <div className="tokenDetails">
            <h3>$Task on Telos Evm (Bsc)</h3>
             <h2>Coming Soon!</h2>
          </div> */}
        </div>
      </div>

      {/* SECTION E */}

      {/* sectionE */}
      <div className="Neon">
        <div className="secE">
          <h1>Roadmap</h1>
          <div className="secEChildren">
            <div className="tokenDetails roadmappoints">
              <h3>2020: Q4 - 2021 Q2</h3>
              <p>
                <CheckCircleIcon className="icon" />
                <span> Ideations of a gig</span>
              </p>

              <p>
                <CheckCircleIcon className="icon" />
                <span> Telos Task envisioned</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> Telos Task branding</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> Telos WPS Approved to build</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> TelosTask Alpha development</span>
              </p>
            </div>

            <div className="tokenDetails roadmappoints">
              <h3>2021 - Q1, 2022 - Q1</h3>
              <p>
                <CheckCircleIcon className="icon" />
                <span> Countdown to launch Alpha announcement</span>
              </p>

              <p>
                <CheckCircleIcon className="icon" />
                <span> I.T.O (Initial Task offerings)</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> Alpha Platform Launch</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> First Marketing</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> $TASK first Dex listing</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> distribution</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> Development of TelosTask V2 (Beta)</span>
              </p>
            </div>
            <div className="tokenDetails roadmappoints">
              <h3>2022, (Q2) - 2023 (Q2)</h3>
              <p>
                <CheckCircleIcon className="icon" />
                <span> TelosTask V2 (Beta 2.0 launched)</span>
              </p>

              <p>
                <CheckCircleIcon className="icon" />
                <span> Final IDO (TaskFi Offering)</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> More Marketing</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> Team expansion</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> Mobile App (Android version)</span>
              </p>

              <p>
                <CheckCircleIcon className="icon" />
                <span> Exchange listing</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span>Task Referral program</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> Partnerships</span>
              </p>

              <p>
                <CheckCircleIcon className="icon" />
                <span> Mobile app (IOs version)</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> Series of features and upgrades updates</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> First Task token burn 🔥</span>
              </p>

              <p>
                <CheckCircleIcon className="icon" />
                <span> Web3 integrations</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span> Gateways and bridges</span>
              </p>
              <p>
                <CheckCircleIcon className="icon" />
                <span>Update Roadmap 2023.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sponsors">
        <img src="https://www.businessinsider.in/thumb/msid-87597940,width-700,resizemode-4,imgsize-6354/cryptocurrency/news/telos-is-hedging-against-crypto-bear-market-with-fresh-investment-from-its-first-ever-marquee-investors/telos.jpg" />
        <img src="https://pbs.twimg.com/profile_images/1364399289120735234/sPyi7fvC_400x400.jpg" />
      </div>
    </div>
  );
}

export default Taskio;
