import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

export const CustomAccordion = ({ title, discription }: any) => {
  const [faqDown, setFaqDown] = useState(true);
  const faqArrow = () => setFaqDown(!faqDown);

  return (
    <div className="accordion" id="accordionExample">
      <div className="card faqAccordion shadow-sm">
        <div className="card-header" id="headingThree">
          <button
            className="collapsed d-flex justify-content-between align-items-center"
            type="button"
            onClick={faqArrow}
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree">
            Collapsible Group Item #3
            <FaAngleDown className={`${faqDown ? "faqDown" : ""}`} />
          </button>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample">
          <div className="p-3">
            And lastly, the placeholder content for the third and final
            accordion panel. This panel is hidden by default.
          </div>
        </div>
      </div>
    </div>
  );
};
