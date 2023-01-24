import { useState, useRef } from "react";
import "./AccordionNews.css";
import useOutsideAlerter from "../Hooks/useOutsideAlerter";

function AccordionNews({ title, children }) {
  const [expand, setExpand] = useState(false);
  const accordionRef = useRef(null);
  useOutsideAlerter(accordionRef, expand, setExpand);

  return (
    <div ref={accordionRef} className="accordionNews">
      <p
        className={
          "categoria-accordion " + (expand ? "expandNews" : "collapseNews")
        }
        onClick={() => setExpand(!expand)}
      >
        {title}
      </p>
      {expand && children}
    </div>
  );
}

export default AccordionNews;
