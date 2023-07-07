import MyOrderHistory from "components/FutureTrades/MyOrderHistory";
import TopBar from "components/FutureTrades/Topbar";
import TradeBox from "components/FutureTrades/TradeBox";
import CurrencyLevel from "components/exchange/currencyLevel";
import SelectCurrency from "components/exchange/selectCurrency";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenMessagesFuture } from "state/actions/exchange";
import {
  initialDashboardCallAction,
  listenMessages,
} from "state/actions/futureTrade";
import { setCurrentPair } from "state/reducer/exchange";
import { RootState } from "state/store";

const Exchange = () => {
  const [isLoading, setisLoading] = useState(true);

  const { isLoggedIn, user } = useSelector((state: RootState) => state.user);
  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.exchange
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const pair = localStorage.getItem("current_pair");
    if (pair) {
      dispatch(setCurrentPair(pair));
      dispatch(initialDashboardCallAction(pair, dashboard, setisLoading));
    } else {
      dispatch(
        initialDashboardCallAction(currentPair, dashboard, setisLoading)
      );
    }
  }, [isLoggedIn, currentPair]);
  useEffect(() => {
    listenMessages(dispatch, user);
  }, [currentPair]);
  return (
    <div className="exchange-area">
      <div className="background-col">
        <div className="cp-user-main-wrapper-dashboard">
          <div id="dashboard">
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
              {dashboard?.last_price_data && <TopBar  />}
            </div>
          </div>
          <TradeBox />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
