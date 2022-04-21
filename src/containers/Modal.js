import {
  CashIcon,
  CollectionIcon,
  NewspaperIcon,
  PresentationChartBarIcon,
  RssIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/solid";
import TaskPaperV3 from "../pdf/TaskPaperV3.pdf";

function Modal() {
  return (
    <div className="modal">
      <a href={TaskPaperV3} target="_blank" rel="noopener">
        {" "}
        <NewspaperIcon className="linkIcon" /> Task Paper
      </a>
      <a href="https://telostask.medium.com/" target="_blank" rel="noopener">
        <RssIcon className="linkIcon" /> Task Blog
      </a>
      <a
        href="https://docs.google.com/presentation/d/1RzQHW-9KR8mDFRNonnuSmxK2y37f0i-12PDA61uvo_4/edit#slide=id.p1"
        target="_blank"
        rel="noopener"
      >
        <PresentationChartBarIcon className="linkIcon" /> Pitch Deck
      </a>
      <a href="https://telostask.app/login" target="_blank" rel="noopener">
        <CollectionIcon className="linkIcon" /> Products
      </a>
      <a href="/comingsoon" target="_blank" rel="noopener">
        <ShieldExclamationIcon className="linkIcon" /> Report Bug
      </a>
    </div>
  );
}

export default Modal;
