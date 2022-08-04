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
  const [select, setSelect] = React.useState(3);
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
      <div className="col-xl-2">
        <div className="trades-section">
          <div className="trades-headers mb-3">
            <div>
              <h3>{t("Order Book")}</h3>
            </div>
            <div className="orderBookIcons">
              <h3
                onClick={() => {
                  setSelect(1);
                }}
                className="icon-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="css-3kwgah w-25"
                >
                  <path d="M4 4h7v16H4V4z" fill="#0ECB81"></path>
                  <path
                    d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                    fill="currentColor"
                  ></path>
                </svg>
              </h3>
              <h3
                onClick={() => {
                  setSelect(2);
                }}
                className="icon-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="css-3kwgah  w-25"
                >
                  <path d="M4 4h7v16H4V4z" fill="#F6465D"></path>
                  <path
                    d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                    fill="currentColor"
                  ></path>
                </svg>
              </h3>
              <h3
                onClick={() => {
                  setSelect(3);
                }}
                className="icon-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="css-3kwgah w-25"
                >
                  <path d="M4 4h7v7H4V4z" fill="#F6465D"></path>
                  <path d="M4 13h7v7H4v-7z" fill="#0ECB81"></path>
                  <path
                    d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                    fill="currentColor"
                  ></path>
                </svg>
              </h3>
            </div>
          </div>
          {select === 1 && <AllSellOrders OpenBooksell={OpenBooksell} />}
          {select === 2 && <AllBuyOrders OpenBookBuy={OpenBookBuy} />}
          {select === 3 && (
            <>
              <AllSellOrders OpenBooksell={OpenBooksell} />
              <AllBuyOrders OpenBookBuy={OpenBookBuy} />
            </>
          )}
        </div>
      </div>
      <div className="col-xl-7">
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
