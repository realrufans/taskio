import React from "react";
import { Footer, Header } from "../components";
import CheckThemeForIcon from "../lib/checkThemeForIcon";
import AOS from "aos";
import "aos/dist/aos.css";

function FFooter() {
  AOS.init();
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <Footer>
        <Footer.FirstFrame>
          <Footer.Left>
            <Header.LogoFrame className="LfooterFrame">
              <Header.Logo
                onClick={() => (window.location.href = "https://telostask.app")}
                src={require("../icons/logo.png")}
                alts="telostask logo"
              />{" "}
              <div className="headertext">TelosTask</div>
            </Header.LogoFrame>
            <Footer.Body>
              The Telostask platform is a platform that rewards
              users/freelancers for completing micro or medium tasks or to
              clients looking to outsource micro or medium tasks.
            </Footer.Body>
          </Footer.Left>
          <Footer.Right>
            <Footer.QuickSection>
              <Footer.SocialsFrame>
                <Footer.SectionTitle>My Account</Footer.SectionTitle>
                <Footer.Links
                  href="https://telostask.app/login"
                  target="_blank"
                  rel="noopener"
                >
                  Login
                </Footer.Links>
                <Footer.Links
                  href="https://telostask.app/register"
                  target="_blank"
                  rel="noopener"
                >
                  Register
                </Footer.Links>
              </Footer.SocialsFrame>

              <Footer.SocialsFrame>
                <Footer.SectionTitle>Helpful Links</Footer.SectionTitle>
                <Footer.Links
                  href="https://telostask.medium.com"
                  target="_blank"
                  rel="noopener"
                >
                  Blog
                </Footer.Links>
                <Footer.Links
                  href="https://telostask.app/faq"
                  target="_blank"
                  rel="noopener"
                >
                  Faq
                </Footer.Links>
                <Footer.Links
                  href="https://t.me/Telostask"
                  target="_blank"
                  rel="noopener"
                >
                  Contact
                </Footer.Links>
              </Footer.SocialsFrame>

              <Footer.SocialsFrame>
                <Footer.SectionTitle>Information</Footer.SectionTitle>
                <Footer.Links
                  href="https://telostask.app/form"
                  target="_blank"
                  rel="noopener"
                >
                  Buy Tasks
                </Footer.Links>
                <Footer.Links
                  href="https://telostask.io/wp-content/uploads/2021/04/Telos-Task-Whitepaper-2.pdf.app/faq"
                  target="_blank"
                  rel="noopener"
                >
                  Tasks Paper
                </Footer.Links>
              </Footer.SocialsFrame>
            </Footer.QuickSection>
          </Footer.Right>
        </Footer.FirstFrame>
        <Footer.SecondFrame>
          <Footer.SocialImageFrame>
            <Footer.SocialsImg
              onClick={() =>
                (window.location.href = "https://twitter.com/telostask")
              }
              src={CheckThemeForIcon("githubL.png", "githubD.png")}
            />
            <Footer.SocialsImg
              onClick={() =>
                (window.location.href =
                  "https://github.com/mydappr/telostaskLandingPage")
              }
              src={CheckThemeForIcon("githubL.png", "githubD.png")}
            />
            <Footer.SocialsImg
              onClick={() =>
                (window.location.href = "https://telostask.medium.com/")
              }
              rel="noopener"
              src={CheckThemeForIcon("mediumL.png", "mediumD.png")}
            />
            <Footer.SocialsImg
              onClick={() => (window.location.href = "https://t.me/Telostask")}
              src={CheckThemeForIcon("telegramL.png", "telegramD.png")}
            />
          </Footer.SocialImageFrame>
          <Footer.Copyright>
            Copyright © 2020-2021 TelosTask. All Rights Reserved.
          </Footer.Copyright>
        </Footer.SecondFrame>
      </Footer>
    </div>
  );
}

export default FFooter;
