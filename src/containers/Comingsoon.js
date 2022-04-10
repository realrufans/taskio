import { Typing } from "typing-effect-reactjs";
import FFooter from "./footer";
import HHeader from "./header";

function Comingsoon() {
  return (
    <>
      <div className="comingSoon">
        {" "}
        <Typing
          text="Coming Sooon!"
          element="h1"
          cursorColor={"white"}
          disableBlinkingOnEnd={true}
          typeSpeed={100}
        />
      </div>
    </>
  );
}

export default Comingsoon;
