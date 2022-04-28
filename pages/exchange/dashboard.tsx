import type { NextPage } from "next";
import DashboardNavbar from "components/common/dashboardNavbar";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const TradingChart = dynamic(
  () =>
    import("components/exchange/TradingChart").then(
      (mod: any) => mod.TVChartContainer
    ),
  { ssr: false }
);
import Echo from "laravel-echo";
import Pusher from "pusher-js";

import SelectCurrency from "components/exchange/selectCurrency";
import CurrencyLevel from "components/exchange/currencyLevel";
import OrderHistorySection from "components/exchange/orderHistorySection";
import ExchangeBox from "components/exchange/ExchangeBox";
import OrderBook from "components/exchange/OrderBook";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "state/store";
import {
  initialDashboardCallAction,
  initialDashboardCallActionWithToken,
} from "state/actions/exchange";
import {
  setCurrentPair,
  setOpenBookBuy,
  setOpenBooksell,
} from "state/reducer/exchange";
let socketCall = 0;
async function listenMessages(dispatch: any) {
  //@ts-ignore
  window.Pusher = Pusher;
  //@ts-ignore
  window.Echo = new Echo({
    broadcaster: "pusher",
    key: "test",
    wsHost: process.env.NEXT_PUBLIC_HOST_SOCKET,
    wsPort: 6006,
    wssPort: 443,
    cluster: "mt1",
    disableStats: true,
    enabledTransports: ["ws", "wss"],
  });
  //@ts-ignore
  window.Echo.channel("dashboard").listen(".order_place", (e) => {
    if (e.order_type === "buy") dispatch(setOpenBookBuy(e.orders));
    if (e.order_type === "sell") dispatch(setOpenBooksell(e.orders));
  });
  //@ts-ignore
  window.Echo.channel(
    `trade-info-${localStorage.getItem("base_coin_id")}-${localStorage.getItem(
      "trade_coin_id"
    )}`
  ).listen(".process", (e: any) => {});
}
const Dashboard: NextPage = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.exchange
  );

  useEffect(() => {
    const pair = localStorage.getItem("current_pair");
    if (pair) {
      console.log("first is calling", pair);
      setCurrentPair(pair);
      dispatch(initialDashboardCallAction(pair, dashboard));
    } else {
      dispatch(initialDashboardCallAction(currentPair, dashboard));
    }
  }, [isLoggedIn, currentPair]);
  useEffect(() => {
    if (
      dashboard?.order_data?.base_coin_id &&
      dashboard?.order_data?.trade_coin_id
    ) {
      // localStorage.setItem("base_coin_id", dashboard?.order_data?.base_coin_id);
      // localStorage.setItem(
      //   "trade_coin_id",
      //   dashboard?.order_data?.trade_coin_id
      // );
      dispatch(initialDashboardCallActionWithToken(currentPair, dashboard));
    }
  }, [dashboard?.order_data?.base_coin_id]);
  useEffect(() => {
    if (socketCall === 0) {
      listenMessages(dispatch);
    }
    socketCall = 1;
  });
  return (
    <div className="background-col">
      <DashboardNavbar />
      <div className="mt-5"></div>
      <div className="cp-user-sidebar-area">
        <div
          className="scroll-wrapper cp-user-sidebar-menu scrollbar-inner"
          style={{ position: "relative" }}
        >
          <div
            className="cp-user-sidebar-menu scrollbar-inner scroll-content"
            style={{
              height: "auto",
              marginBottom: "0px",
              marginRight: "0px",
              maxHeight: "0px",
            }}
          ></div>
          <div className="scroll-element scroll-x">
            <div className="scroll-element_outer">
              <div className="scroll-element_size" />
              <div className="scroll-element_track" />
              <div className="scroll-bar" />
            </div>
          </div>
          <div className="scroll-element scroll-y">
            <div className="scroll-element_outer">
              <div className="scroll-element_size" />
              <div className="scroll-element_track" />
              <div className="scroll-bar" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="notificationShow"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        className="modal fade"
      >
        <div
          role="document"
          className="modal-dialog modal-lg modal-dialog-centered"
        >
          <div className="modal-content dark-modal">
            <div className="modal-header align-items-center">
              <h5 id="exampleModalCenterTitle" className="modal-title">
                New Notifications
              </h5>
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                className="close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="hm-form">
                <div className="row">
                  <div className="col-12">
                    <h6 id="n_title" /> <p id="n_date" /> <p id="n_notice" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cp-user-main-wrapper-dashboard">
        <div className="container-fluid">
          <div
            role="alert"
            id="web_socket_notification"
            className="alert alert-success alert-dismissible fade show d-none"
          >
            <span id="socket_message" />
            <button
              type="button"
              data-dismiss="alert"
              aria-label="Close"
              className="close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div
            id="confirm-modal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            className="modal fade"
          >
            <div role="document" className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <button
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="close"
                >
                  <img
                    // src="/assets/user/images/close.svg"
                    alt=""
                    className="img-fluid"
                  />
                </button>
                <div className="text-center">
                  <img
                    src="/assets/user/images/add-pockaet-vector.svg"
                    alt=""
                    className="img-fluid img-vector"
                  />
                  <h3 id="confirm-title" />
                </div>
                <div className="modal-body">
                  <a
                    id="confirm-link"
                    className="btn btn-block cp-user-move-btn"
                  >
                    Confirm
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cp-user-custom-card exchange-area">
            <div id="dashboard">
              <div className="row">
                <div className="col-xl-12">
                  <div className="cxchange-summary-wrap">
                    <div className="cxchange-summary-name">
                      <div className="summber-coin-type">
                        <span className="coin-badge">
                          {dashboard?.order_data?.exchange_coin_pair
                            ? dashboard?.order_data?.exchange_coin_pair
                            : "BTC/USDT"}
                        </span>
                        {dashboard?.order_data?.exchange_coin_pair && (
                          <i
                            aria-hidden="true"
                            className=" ml-2 fa fa-angle-down"
                          />
                        )}
                        {/* {!isLoggedIn && <SelectCurrency />} */}
                        <SelectCurrency />
                      </div>
                      <span className="font-weight-bold">Bitcoin</span>
                    </div>
                    <CurrencyLevel />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="cp-user-buy-coin-content-area">
                    <div className="card cp-user-custom-card">
                      <TradingChart
                        //  @ts-ignore
                        coinpair={dashboard?.order_data?.exchange_coin_pair}
                      />
                    </div>
                  </div>
                  <OrderHistorySection />
                </div>
                <OrderBook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
