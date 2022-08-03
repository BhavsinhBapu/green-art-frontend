import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

const CurrencyLevel = () => {
  const { t } = useTranslation("common");
  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.exchange
  );
  return (
    <div className="cxchange-summary-featured">
      <ul className="cxchange-summary-items">
        <li>
          <span className="label">{t("Last price")}</span>
          <span className="value">
            {dashboard?.order_data?.total?.trade_wallet?.last_price}
          </span>
        </li>
        <li>
          <span className="label">{t("24h change")}</span>
          <span
            className={`value ${
              dashboard?.order_data?.total?.trade_wallet?.price_change >= 0
                ? "increase"
                : "decrease"
            }`}
          >
            {parseFloat(
              dashboard?.order_data?.total?.trade_wallet?.price_change
            )}
            %
          </span>
        </li>
        <li>
          <span className="label">{t("24h high")}</span>
          <span className="value">
            {parseFloat(dashboard?.order_data?.total?.trade_wallet?.high)}
          </span>
        </li>
        <li>
          <span className="label">{t("24h Low")}</span>
          <span className="value">
            {parseFloat(dashboard?.order_data?.total?.trade_wallet?.low)}
          </span>
        </li>
        <li>
          <span className="label">
            {" "}
            {t("24h volume")}({dashboard?.order_data?.trade_coin}){" "}
          </span>
          <span className="value">
            {parseFloat(dashboard?.order_data?.total?.trade_wallet?.volume)}
          </span>
        </li>
        <li>
          <span className="label">
            {" "}
            {t("24h volume")}({dashboard?.order_data?.base_coin}){" "}
          </span>
          <span className="value">
            {parseFloat(dashboard?.order_data?.total?.trade_wallet?.volume) *
              parseFloat(
                dashboard?.order_data?.total?.trade_wallet?.last_price
              )}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CurrencyLevel;
