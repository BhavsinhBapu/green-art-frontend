import SelectCurrency from "components/FutureTrades/SelectCurrencies";
import TopBar from "components/FutureTrades/Topbar";
import TradeBox from "components/FutureTrades/TradeBox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initialDashboardCallAction,
  listenMessages,
} from "state/actions/futureTrade";
import { setCurrentPair } from "state/reducer/futureExchange";
import { RootState } from "state/store";

const Exchange = () => {
  const [isLoading, setisLoading] = useState(true);
  const router = useRouter();
  const [ThemeColor, setThemeColor] = useState({
    green: "#32d777",
    red: "#d63031",
    redGreenUpDown: 1,
    chooseColor: 1,
  });
  const { isLoggedIn, user } = useSelector((state: RootState) => state.user);
  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.futureExchange
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const pair = localStorage.getItem("current_pair");
    if (pair) {
      dispatch(setCurrentPair(pair));
      dispatch(
        initialDashboardCallAction(pair, dashboard, setisLoading, router)
      );
    } else {
      dispatch(
        initialDashboardCallAction(currentPair, dashboard, setisLoading, router)
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
          <div className="custom-container">
            <div id="dashboard">
              <div className="row">
                <div
                  className="col-xl-12 col-12"
                  style={{ border: "1px solid rgb(126 126 126 / 20%)" }}
                >
                  <div className="cxchange-summary-wrap future-exchange-top w-full">
                    <div className="w-full mt-3 tarde-coin-pair-header">
                      <div>
                        {currentPair && (
                          <div className="cxchange-summary-name">
                            <div
                              className="summber-coin-type dropdown"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              <div>
                                <img
                                  src={
                                    dashboard?.pairs?.find(
                                      (item: any) =>
                                        item.coin_pair == currentPair
                                    )?.icon || "/add-pockaet-vector.svg"
                                  }
                                  alt=""
                                  style={{ width: "30px", height: "30px" }}
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "2px",
                                }}
                              >
                                <span
                                  className="coin-badge dropdown-toggle"
                                  id="dropdownMenuButton"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  {currentPair.replace(/_/g, "/")}
                                </span>
                                <span style={{ lineHeight: "1" }}>
                                  {dashboard?.pairs?.find(
                                    (item: any) => item.coin_pair == currentPair
                                  )?.coin_pair_name || ""}
                                </span>
                                <SelectCurrency />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div>{dashboard?.last_price_data && <TopBar />}</div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-12">
                  <TradeBox ThemeColor={ThemeColor} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
