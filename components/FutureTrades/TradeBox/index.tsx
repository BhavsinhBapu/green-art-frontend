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
        <div className="col-xl-9">
          <div className="row">
            <div className="col-xl-9 col-12 exchange-area">
              {currentPair && (
                //@ts-ignore
                <TradingChart currentPair={currentPair} theme={theme} />
              )}
            </div>
            <div className="col-xl-3 col-12 exchange-area">
              <ExchangeBox />
            </div>
            <div className="col-xl-12">
              <MyOrderHistory />
              {/* <TradesHistory marketTrades={marketTrades} /> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-12">
          <div className="">
            <OrderBook />
          </div>
          <TradesHistory marketTrades={marketTrades} />
        </div>
      </div>
    </div>
  );
};

export default TradeBox;
