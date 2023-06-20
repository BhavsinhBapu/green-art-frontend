import MyOrderHistory from "components/FutureTrades/MyOrderHistory";
import TopBar from "components/FutureTrades/Topbar";
import TradeBox from "components/FutureTrades/TradeBox";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialDashboardCallAction } from "state/actions/futureTrade";
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
  return (
    <div>
      <TopBar />
      <TradeBox />
      <MyOrderHistory />
    </div>
  );
};

export default Exchange;
