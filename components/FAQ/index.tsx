import { FAQ_TYPE_DEPOSIT, FAQ_TYPE_WITHDRAWN } from "helpers/core-constants";
import useTranslation from "next-translate/useTranslation";
import React from "react";

const FAQ = ({ faqs, type }: any) => {
  const { t } = useTranslation("common");
  let typeData: any;
  if (type === "deposit") {
    typeData = FAQ_TYPE_DEPOSIT;
  } else if (type === "withdraw") {
    typeData = FAQ_TYPE_WITHDRAWN;
  }
  return (
    <div className="m-3">
      <div id="accordion">
        <h4>{t("FAQ")}</h4>
        {type
          ? faqs.map(
              (faq: any) =>
                faq.faq_type_id === typeData && (
                  <div className="faq-body">
                    <div className="faq-head" id={"headingOne" + faq.id}>
                      <h5 className="mb-0">
                        <button
                          className="btn "
                          data-toggle="collapse"
                          data-target={"#collapseOne" + faq.id}
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          {faq.question}
                        </button>
                      </h5>
                    </div>
                    <div
                      id={"collapseOne" + faq.id}
                      className="collapse "
                      aria-labelledby={"headingOne" + faq.id}
                      data-parent="#accordion"
                    >
                      <div className="faq-body">{faq.answer}</div>
                    </div>
                  </div>
                )
            )
          : faqs.map(
              (faq: any) =>
                faq.faq_type_id === FAQ_TYPE_DEPOSIT && (
                  <div className="faq-body">
                    <div className="faq-head" id={"headingOne" + faq.id}>
                      <h5 className="mb-0">
                        <button
                          className="btn "
                          data-toggle="collapse"
                          data-target={"#collapseOne" + faq.id}
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          {faq.question}
                        </button>
                      </h5>
                    </div>
                    <div
                      id={"collapseOne" + faq.id}
                      className="collapse "
                      aria-labelledby={"headingOne" + faq.id}
                      data-parent="#accordion"
                    >
                      <div className="faq-body">{faq.answer}</div>
                    </div>
                  </div>
                )
            )}
      </div>
    </div>
  );
};

export default FAQ;
