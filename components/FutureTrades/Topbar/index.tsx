import React from "react";
import styles from "./styles.module.css";
import { RootState } from "state/store";
import { useSelector } from "react-redux";
import SelectCurrency from "components/exchange/selectCurrency";
const TopBar = () => {
   const { dashboard, currentPair } = useSelector(
     (state: RootState) => state.exchange
   );
  return (
    <div className="col-xl-12 col-12">
      <div className="cxchange-summary-wrap mt-5">
        {currentPair && (
          <div className="cxchange-summary-name">
            <div className="summber-coin-type dropdown">
              <span
                className="coin-badge dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {currentPair.replace(/_/g, "/")}
              </span>
              <SelectCurrency />
            </div>
          </div>
        )}
        <div className="cxchange-summary-featured">
          <ul className="cxchange-summary-items">
            <li>
              <span className="value increase">
                77.8
                <i className="fa-solid fa-up-long value-increaseicon ml-2" />
              </span>
            </li>
            <li>
              <span className="label">Mark</span>
              <span className="">77.8</span>
            </li>
            <li>
              <span className="label">Index</span>
              <span className="">0.257731%</span>
            </li>
            <li>
              <span className="label">Funding / Countdown</span>
              <span className="">
                <span className="text-info h3">77.8</span>
                <span className="text-light ml-3 h3">77.8</span>
              </span>
            </li>
            <li>
              <span className="label">24h Change</span>
              <span className="value">77.4</span>
            </li>
            <li>
              <span className="label">24h High</span>
              <span className="value">373.805</span>
            </li>
            <li>
              <span className="label"> 24h Low </span>
              <span className="value">29,081.992</span>
            </li>
            <li>
              <span className="label"> 24h Volume(ARPA)</span>
              <span className="value">29,081.992</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
