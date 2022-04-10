import { Typing } from "typing-effect-reactjs";
import FFooter from "./footer";
import HHeader from "./header";

function Comingsoon() {
  return (
    <>
      <div className="comingSoon">
        {" "}
        <Typing
          text="Coming Soon!"
          element="h1"
          cursorColor={"white"}
          disableBlinkingOnEnd={true}
          typeSpeed={500}
        />
      </div>
    </>
  );
}

export default Comingsoon;
