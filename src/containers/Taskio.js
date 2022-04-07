import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircleIcon } from "@heroicons/react/solid";

function Taskio() {
  AOS.init();
  return (
    <div className="all">
      <div className="secA">
        <h1> Introduction</h1>
        <div className="secAChildren">
          <img
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="image"
            src="https://telostask.io/wp-content/uploads/2021/02/kisspng-initial-coin-offering-blockchain-cryptocurrency-se-5c6e44946bf213.4465598515507303884422.png"
          />

          <div>
            <p className="firstp ">
              The TelosTask platform offers 4-in-1 product features of Tasks.
              Set up to achieve the possibilities of an actual "task
              distributions" For the completion of big and small Tasks Which we
              refer to as micro and macro gigs alongside taskdrop and
              Thurderclapping. Welcome to the world of WorkFi perhaps...{" "}
              <strong>Taskfi</strong>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* section B */}

      <div className="secB">
        <h1>What is TelosTask</h1>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="sectionBChild">
            <img
              className="image"
              src="https://telostask.io/wp-content/uploads/2021/02/micro-768x533-1.png"
              alt="what is telos task"
            />
            <p className="TtaskInfo">
              <strong className="strong">TelosTask</strong>The TelosTask
              platform is a peer-to-peer multi-purpose freelance marketplace
              that utilizes blockchain technology and allows those who need some
              tasks completed (Employers) to connect with gig workers
              (Micro/Macro workers) from anywhere in the world.{" "}
              <a href="https://cointelegraph.com/news/telos-launches-new-gig-economy-platform-on-the-blockchain">
                Read More
              </a>{" "}
            </p>
          </div>

          <div className="sectionBChild">
            <img
              className="image"
              src="http://landing.mydappr.io/wp-content/uploads/2020/07/macro-300x282.png"
              alt="the mission"
            />

            <p className="TtaskInfo">
              <strong className="strong">The mission:</strong> Our mission to
              improve the freelance industry by building a robust decentralized
              freelance marketplace of task seekers and task workers through the
              application of blockchain technology, is to solve the common
              problems of traditional gig platforms of which might make the
              "TelosTask application" become the new freelancing financial trend
              of WorkFi, perhaps "TaskFi".{" "}
              <a href="https://dappradar.com/telos/marketplaces/telostask">
                {" "}
                Continue reading
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* sectionc */}
      <div className="secC">
        <h1> TelosTask Platform</h1>

        <p>
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

      {/* sectionE */}
      <div className="secE">
        <h1>Roadmap</h1>
        <div className="secEChildren">
          <div className="points">
            <h3>Q3-Q4 - 2021</h3>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>Macro Task Category upgraded</div>
            </div>

            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>TelosTask Airdrop platform completed and integrated</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>More Marketing and community building</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>Strategic partnership</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>Second Quarterly Token burn (September)</div>
            </div>

            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div> TLOS Gateway (Use tlos to list Task)</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div> TelosTask 1.5</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>Android app</div>
            </div>

            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>More exchange listing</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>Premium features announced</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>Telos Task 2.0 announced</div>
            </div>

            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>TelosTask 2.0 upgraded (With intuitive UI)</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div> Third quarter token burn (November)</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div> EOS gateway</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>IOS App announced</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>Years Achievements and progress recap </div>
            </div>
          </div>

          <div className="points">
            <h3>Q1 - Q2 - 2022</h3>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>Development and revamping</div>
            </div>

            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>
                {" "}
                Announcement of community voting features utilizing Telos Decide
              </div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div> Telos Task 3.0</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div> Fourth Quarterly Token burn (March)</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div> ETH gateway</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div> Community voting features completed</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div>
                {" "}
                Introduction of community voting platform using Telos Decide
              </div>
            </div>

            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div> Sixth quarterly Token burn (June)</div>
            </div>
            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div> Announcement of Advertisement features</div>
            </div>

            <div className="dnp">
              <CheckCircleIcon className="icon" />
              <div> Roadmap update</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskio;
