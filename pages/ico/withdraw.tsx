import LaunchpadSidebar from "layout/launchpad-sidebar";
import useTranslation from "next-translate/useTranslation";
import React from "react";

const Withdraw = () => {
  const { t } = useTranslation("common");

  return (
    <div className="page-wrap rightMargin">
      <LaunchpadSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="overview-area">
              <div className="overview-left">
                <h2 className="section-top-title">{t("Withdraw")}</h2>
              </div>
            </div>
          </div>
          <div className="asset-balances-area cstm-loader-area">
            <div className="asset-balances-left">
              <div className="section-wrapper boxShadow">
                <div className="row">
                  <div className="col-md-4 boxShadow p-5">
                    <h2>Total Earned</h2>
                    <h2>Total Earned</h2>
                  </div>
                  <div className="col-md-4 boxShadow p-5">
                    <h2>Total Earned</h2>
                    <h2>Total Earned</h2>
                  </div>
                  <div className="col-md-4 boxShadow p-5">
                    <h2>Total Earned</h2>
                    <h2>Total Earned</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
