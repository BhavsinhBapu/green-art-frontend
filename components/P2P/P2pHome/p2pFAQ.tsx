import { CustomAccordion } from "components/common/CustomAccordion";
import { useState } from "react";

export const P2pFaq = () => {
  const [faqTab, setFaqTab] = useState("beginner");

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12">
          <h3 className="pb-2">FAQS</h3>
          <div className="p2pWorkBtn py-4">
            <button
              onClick={() => setFaqTab("beginner")}
              className={`${faqTab === "beginner" && "buySellBoxActive"}`}>
              Beginner
            </button>
            <button
              className={`${faqTab === "advanced" && "buySellBoxActive"}`}
              onClick={() => setFaqTab("advanced")}>
              Advanced
            </button>
            <button
              className={`${faqTab === "advertisers" && "buySellBoxActive"}`}
              onClick={() => setFaqTab("advertisers")}>
              Advertisers
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <CustomAccordion />
        </div>
      </div>
    </div>
  );
};
