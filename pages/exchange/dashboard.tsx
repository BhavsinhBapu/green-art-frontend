import type { NextPage } from "next";
import DashboardNavbar from "components/common/dashboardNavbar";

import { useState } from "react";
import TradingChart from "components/exchange/TradingChart";
import SelectCurrency from "components/exchange/selectCurrency";
import CurrencyLevel from "components/exchange/currencyLevel";
import OrderHistorySection from "components/exchange/orderHistorySection";
import ExchangeBox from "components/exchange/ExchangeBox";
import OrderBook from "components/exchange/OrderBook";

const Dashboard: NextPage = () => {
  return (
    <div className="background-col">
      <DashboardNavbar />
      <div className="cp-user-sidebar">
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
      </div>{" "}
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
              </h5>{" "}
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                className="close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>{" "}
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
            <span id="socket_message" />{" "}
            <button
              type="button"
              data-dismiss="alert"
              aria-label="Close"
              className="close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>{" "}
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
                    src="/assets/user/images/close.svg"
                    alt=""
                    className="img-fluid"
                  />
                </button>{" "}
                <div className="text-center">
                  <img
                    src="/assets/user/images/add-pockaet-vector.svg"
                    alt=""
                    className="img-fluid img-vector"
                  />{" "}
                  <h3 id="confirm-title" />
                </div>{" "}
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
          </div>{" "}
          <div className="cp-user-custom-card exchange-area">
            <div id="dashboard">
              <div className="row">
                <div className="col-xl-12">
                  <div className="cxchange-summary-wrap">
                    <div className="cxchange-summary-name">
                      <div className="summber-coin-type">
                        <span className="coin-badge">BTC/USDT</span>{" "}
                        <i aria-hidden="true" className="fa fa-angle-down" />{" "}
                        <div className="cp-user-buy-coin-content-area">
                          <div className="cp-user-wallet-table dashboard-coin_pairs table-responsive">
                            <div
                              id="exchangeCoinPair_wrapper"
                              className="dataTables_wrapper no-footer"
                            >
                              <div
                                id="exchangeCoinPair_filter"
                                className="dataTables_filter"
                              >
                                <label>
                                  <input
                                    type="search"
                                    className=""
                                    placeholder="Search"
                                    aria-controls="exchangeCoinPair"
                                  />
                                </label>
                              </div>
                              <div
                                id="exchangeCoinPair_processing"
                                className="dataTables_processing"
                                style={{ display: "none" }}
                              >
                                Processing...
                              </div>
                              <div className="dataTables_scroll">
                                <div
                                  className="dataTables_scrollHead"
                                  style={{
                                    overflow: "hidden",
                                    position: "relative",
                                    border: "0px",
                                    width: "100%",
                                  }}
                                >
                                  <div
                                    className="dataTables_scrollHeadInner"
                                    style={{
                                      boxSizing: "content-box",
                                      width: "415px",
                                      paddingRight: "17px",
                                    }}
                                  >
                                    <table
                                      className="table dataTable no-footer"
                                      role="grid"
                                      style={{
                                        marginLeft: "0px",
                                        width: "415px",
                                      }}
                                    >
                                      <thead>
                                        <tr role="row">
                                          <th
                                            className="text-left text-green w-30 sorting_asc"
                                            tabIndex={0}
                                            aria-controls="exchangeCoinPair"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "104.672px" }}
                                            aria-label="Coins: activate to sort column descending"
                                            aria-sort="ascending"
                                          >
                                            Coins
                                          </th>
                                          <th
                                            className="text-center w-40 sorting"
                                            tabIndex={0}
                                            aria-controls="exchangeCoinPair"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "103.281px" }}
                                            aria-label="Last: activate to sort column ascending"
                                          >
                                            Last
                                          </th>
                                          <th
                                            className="sorting"
                                            tabIndex={0}
                                            aria-controls="exchangeCoinPair"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "147.047px" }}
                                            aria-label="Balance: activate to sort column ascending"
                                          >
                                            Balance
                                          </th>
                                        </tr>
                                      </thead>
                                    </table>
                                  </div>
                                </div>

                                <SelectCurrency />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <span className="font-weight-bold">Bitcoin</span>
                    </div>{" "}
                    <CurrencyLevel />
                  </div>
                </div>{" "}
                <div className="col-xl-6">
                  <div className="cp-user-buy-coin-content-area">
                    <div className="card cp-user-custom-card">
                      <TradingChart />
                    </div>
                  </div>{" "}
                  <OrderHistorySection />
                </div>{" "}
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
