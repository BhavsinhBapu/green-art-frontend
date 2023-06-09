import React from "react";
import { GrFormAdd } from "react-icons/gr";

export default function GiftCardsFaq({ faqId }: { faqId: number }) {
  return (
    <div className="col-lg-6 my-2">
      <div id="accordionExample">
        <div>
          <div id="headingThree">
            <button
              className="collapsed d-flex align-items-center gap-15 w-full bg-transparent border-0 text-primary"
              type="button"
              // onClick={faqArrow}
              data-toggle="collapse"
              data-target={`#collapseThree${faqId}`}
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span className="gift-card-add-btn">
                <GrFormAdd />
              </span>
              What is Gift Card?
            </button>
          </div>
          <div
            id={`collapseThree${faqId}`}
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="p-3">Answer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
