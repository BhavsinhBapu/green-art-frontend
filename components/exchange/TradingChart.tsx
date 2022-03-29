import React from "react";
import { useSelector } from "react-redux";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { RootState } from "state/store";
import { AdvancedChart } from "react-tradingview-embed";

const TradingChart = () => {
  const { dashboard } = useSelector((state: RootState) => state.exchange);
  return (
    <div>
      <AdvancedRealTimeChart
        symbol={dashboard?.order_data?.exchange_coin_pair}
        theme="dark"
        locale="en"
        height={500}
        allow_symbol_change
        width="100%"
        container_id="tv_chart_container"
      />
    </div>
  );
};

export default TradingChart;
