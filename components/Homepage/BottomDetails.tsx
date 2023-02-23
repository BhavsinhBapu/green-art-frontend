import useTranslation from "next-translate/useTranslation";
import React from "react";

const BottomDetails = ({ landing }: any) => {
  const { t } = useTranslation("common");
  return (
    <div>
      {" "}
      {parseInt(landing.landing_fifth_section_status) === 1 && (
        <section className="trade-anywhere-area">
          <div className="container">
            <div className="section-title">
              <h2 className="title"> {landing?.secure_trade_title} </h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="trade-anywhere-left">
                  <img src={landing?.secure_trade_left_img} alt="integration" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="trade-anywhere-right">
                  <h2 className="subtitle"> {landing?.customization_title} </h2>
                  <p>{landing?.customization_details}</p>
                  <a href="/exchange/dashboard" className="primary-btn">
                    {t("Know More")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BottomDetails;
