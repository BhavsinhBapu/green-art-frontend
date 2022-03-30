import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

const CurrencyLevel = () => {
  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.exchange
  );
  return (
    <div className="cxchange-summary-featured">
      <ul className="cxchange-summary-items">
        <li>
          <span className="label">Last price</span>
          <span className="value">
            {dashboard?.order_data?.total?.trade_wallet?.last_price}
          </span>
        </li>
        <li>
          <span className="label">24h change</span>
          <span className="value decrease">
            {dashboard?.order_data?.total?.trade_wallet?.price_change}
          </span>
        </li>
        <li>
          <span className="label">24h high</span>
          <span className="value">
            {dashboard?.order_data?.total?.trade_wallet?.high}
          </span>
        </li>
        <li>
          <span className="label">24h Low</span>
          <span className="value">
            {dashboard?.order_data?.total?.trade_wallet?.low}
          </span>
        </li>
        <li>
          <span className="label"> 24h volume: </span>
          <span className="value">
            {" "}
            {dashboard?.order_data?.total?.trade_wallet?.volume}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CurrencyLevel;
