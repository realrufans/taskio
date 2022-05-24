import { XIcon } from "@heroicons/react/solid";
import TaskPaperV3 from "../pdf/TaskPaperV3.pdf";
import { useContext } from "react";
import { ThemeContext } from "../lib/context";

function Modal() {
  const { modal, setModal } = useContext(ThemeContext);
  return (
    <div className="modal">
      <XIcon onClick={() => setModal(!modal)} className="linkIcon" />
      <a href={TaskPaperV3} target="_blank" rel="noopener">
        {" "}
        Task Paper
      </a>
      <a href="https://telostask.medium.com/" target="_blank" rel="noopener">
        Task Blog
      </a>
      <a
        href="https://docs.google.com/presentation/d/1RzQHW-9KR8mDFRNonnuSmxK2y37f0i-12PDA61uvo_4/edit#slide=id.p1"
        target="_blank"
        rel="noopener"
      >
        Pitch Deck
      </a>
      <a href="https://telostask.app/login" target="_blank" rel="noopener">
        Products
      </a>
      <a href="/comingsoon" target="_blank" rel="noopener">
        Report Bug
      </a>
    </div>
  );
}

export default Modal;
