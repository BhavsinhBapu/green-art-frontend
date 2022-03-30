import React from "react";
import { useSelector } from "react-redux";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { RootState } from "state/store";
import { AdvancedChart } from "react-tradingview-embed";

const TradingChart = () => {
  const { dashboard } = useSelector((state: RootState) => state.exchange);
  return (
    <div>
      <iframe
        id="tradingview_b1c07"
        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_b1c07&symbol=BTC%2FUSDT&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=UTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=BTC%2FUSDT"
        style={{
          width: "100%",
          height: "540px",
          margin: "0 !important",
          padding: "0 !important",
        }}
        frameBorder={0}
        allowTransparency={true}
        scrolling="no"
        allowFullScreen
      />
    </div>
  );
};

export default TradingChart;
