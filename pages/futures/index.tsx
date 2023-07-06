import MarketIndex from "components/FutureTrades/home/market-index/MarketIndex";
import TopCharts from "components/FutureTrades/home/top-charts/TopCharts";
import TradeSections from "components/FutureTrades/home/trade-sections/TradeSections";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function Index() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container">
        <h1 className="banner-title py-4">{t("Crypto Futures Market")}</h1>
        {/* top chart start*/}
        <TopCharts />
        {/* top chart end*/}
      </div>
      <div className="bg-card-primary-clr">
        {/* trade section start*/}
        <TradeSections />
        {/* trade section end */}

        {/* market index  start*/}
        <MarketIndex />
        {/* market index  end*/}

        <section className="py-5">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="title">{t("Start trading now")}</h2>
            </div>
            <div className="trading-button text-center">
              <a className="primary-btn mr-0 mr-sm-5">{t("Sign Up")}</a>
              <a>
                <a className="primary-btn">{t("Trade Now")}</a>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
