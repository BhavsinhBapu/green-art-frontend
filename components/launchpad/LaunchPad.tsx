import useTranslation from "next-translate/useTranslation";
import React from "react";

const LaunchPad = () => {
  const {t}= useTranslation('common')
  return (
    <div className="mt-5 mb-5 row">
      <div className="col-lg-4 col-12 launch-pad-image mb-2"></div>
      <div className="col-lg-8 col-12">
        <div>
          <div className="status-launchpool">
            <p>{t("SUBSCRIPTION")}</p>
          </div>
          <h2 className="mt-1">APPLE</h2>
          <p>{t("APPLE - A Move-to-Earn Health and Fitness Application")}</p>

          <div className="row">
            <div className="col-lg-6 col-md-12 pool-row">
              <p className="pool-title">{t("Tokens Offered:")}</p>
              <p className="pool-value">{t("420,000,000.0000 GMT")}</p>
            </div>
            <div className="col-lg-6 col-md-12 pool-row">
              <p className="pool-title">{t("Participants:")}</p>
              <p className="pool-value">{t("130,672")}</p>
            </div>{" "}
            <div className="col-lg-6 col-md-12 pool-row">
              <p className="pool-title">{t("Sale Price:")}</p>
              <p className="pool-value">{t("1 GMT = 0.00002514 BNB")}</p>
            </div>
            <div className="col-lg-6 col-md-12 pool-row">
              <p className="pool-title">{t("Total committed:")}</p>
              <p className="pool-value">{t("8,742,450.4131 BNB")}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 pool-row">
              <p className="pool-title">{t("End time:")}</p>
              <p className="pool-value">{t("2022-03-09")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchPad;
