import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import AllSellOrders from "./AllSellOrders";
import ExchangeBox from "./ExchangeBox";
import BuyTable from "./BuyTable";
import SellTable from "./SellTable";
import TradesHistory from "./TradesHistory";
import AllBuyOrders from "./AllBuyOrders";
import dynamic from "next/dynamic";
import OrderHistorySection from "./orderHistorySection";
import useTranslation from "next-translate/useTranslation";
const TradingChart = dynamic(
  () =>
    import("components/exchange/TradingChart").then(
      (mod: any) => mod.TVChartContainer
    ),
  { ssr: false }
);
const DashboardBody = () => {
  const { t } = useTranslation("common");
  const {
    dashboard,
    currentPair,
    OpenBookBuy,
    OpenBooksell,
    tradeOrderHistory,
    marketTrades,
  } = useSelector((state: RootState) => state.exchange);
  return (
    <>
      <div className="col-xl-3">
        <div className="trades-section">
          <div className="trades-headers mb-3">
            <h3>{t("Order Book")}</h3>
          </div>

          <AllSellOrders OpenBooksell={OpenBooksell} />
          <AllBuyOrders OpenBookBuy={OpenBookBuy} />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="cp-user-buy-coin-content-area">
          <div className="card cp-user-custom-card">
            <TradingChart
              //  @ts-ignore
              coinpair={dashboard?.order_data?.exchange_coin_pair}
            />
          </div>
        </div>
        <OrderHistorySection />
      </div>
      <div className="col-xl-3">
        <ExchangeBox />
        <TradesHistory marketTrades={marketTrades} />
      </div>
    </>
  );
};

export default DashboardBody;
