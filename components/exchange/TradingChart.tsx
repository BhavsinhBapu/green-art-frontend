import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const TradingChart = () => {
  return (
    <div>
      <AdvancedRealTimeChart
        symbol="BITSTAMP:BTCUSD"
        theme="dark"
        locale="en"
        height={500}
        allow_symbol_change
        // autosize
        width="100%"
        container_id="tv_chart_container"
      />
    </div>
  );
};

export default TradingChart;
