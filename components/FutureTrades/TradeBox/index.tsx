import React from "react";
import OrderBook from "../OrderBook";
import ExchangeBox from "../ExchangeBox";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import MyOrderHistory from "../MyOrderHistory";
import TradesHistory from "components/exchange/TradesHistory";
const TradingChart = dynamic(
  () =>
    import("components/exchange/TradingChart").then(
      (mod: any) => mod.TVChartContainer
    ),
  { ssr: false }
);
const TradeBox = () => {
  const { dashboard, OpenBookBuy, OpenBooksell, marketTrades, currentPair } =
    useSelector((state: RootState) => state.exchange);
  const { settings, theme } = useSelector((state: RootState) => state.common);
  return (
    <div>
      <div className="row">
        <div className="col-xl-10">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-8 exchange-area">
              {currentPair && (
                //@ts-ignore
                <TradingChart currentPair={currentPair} theme={theme} />
              )}
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 exchange-area">
              <ExchangeBox />
            </div>
            <div className="col-xl-12">
              <MyOrderHistory />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-12">
          <div className="">
            <OrderBook />
          </div>
          {/* <TradesHistory marketTrades={marketTrades} /> */}
        </div>
      </div>
    </div>
  );
};

export default TradeBox;
