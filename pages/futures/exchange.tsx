import MyOrderHistory from "components/FutureTrades/MyOrderHistory";
import TopBar from "components/FutureTrades/Topbar";
import TradeBox from "components/FutureTrades/TradeBox";
import React from "react";

const Exchange = () => {
  return (
    <div>
      <TopBar />
      <TradeBox />
      <MyOrderHistory />
    </div>
  );
};

export default Exchange;
