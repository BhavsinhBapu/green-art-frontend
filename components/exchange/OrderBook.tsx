import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import AllSellOrders from "./AllSellOrders";
import ExchangeBox from "./ExchangeBox";
import BuyTable from "./BuyTable";
import SellTable from "./SellTable";

const OrderBook = () => {
  const {
    dashboard,
    currentPair,
    OpenBookBuy,
    OpenBooksell,
    tradeOrderHistory,
  } = useSelector((state: RootState) => state.exchange);

  return (
    <div className="col-xl-6">
      <div className="row">
        <div className="col-lg-6">
          <div className="trades-section">
            <div className="trades-headers mb-3">
              <h3>Order Book</h3>
            </div>
            <div className="buy-order">
              <div className="trades-table">
                <div className="trades-table-header">
                  <div className="trades-table-row" />
                </div>
                <div className="trades-table-body" />
                <div
                  id="exchangeAllBuyOrders_wrapper"
                  className="dataTables_wrapper no-footer"
                >
                  <div
                    id="exchangeAllBuyOrders_processing"
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
                        className="dataTables_scrollBody"
                        style={{
                          position: "relative",
                          overflow: "auto",
                          height: "244px",
                          width: "100%",
                        }}
                      >
                        <table
                          className="table dataTable no-footer"
                          role="grid"
                          style={{
                            marginLeft: "0px",
                            width: "431.25px",
                          }}
                        >
                          <thead>
                            <tr role="row">
                              <th
                                className="trades-table-col price text-pink w-30 sorting_desc"
                                rowSpan={1}
                                colSpan={1}
                                // style={{ width: "109.906px" }}
                                aria-label="Price(USDT)"
                              >
                                Price(<span>USDT</span>)
                              </th>
                              <th
                                className="trades-table-col amount text-center w-30 sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                // style={{ width: "133.656px" }}
                                aria-label="Amount"
                              >
                                Amount
                              </th>
                              <th
                                className="trades-table-col volume sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                // style={{ width: "127.688px" }}
                                aria-label="	My Size"
                              >
                                My Size
                              </th>
                            </tr>
                          </thead>
                          <BuyTable buy={OpenBookBuy} />
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trades-table-footer">
                  <div className="trades-table-row">
                    <div className="trades-table-col volume">
                      <a className="more-btn">More</a>
                    </div>
                    <div className="trades-table-col price total-price" />
                    <div className="trades-table-col price total-price">
                      <span>0.00</span> <span>USDT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <AllSellOrders OpenBooksell={OpenBooksell} />
          </div>
        </div>
        <div className="col-lg-6">
          {/* exchange box */}
          <ExchangeBox />
          <div className="trades-section mt-4">
            <div className="trades-headers mb-3">
              <h3>Trades</h3>
            </div>
            <div className="primary-table">
              <div className="table-header">
                <div className="table-row" />
              </div>
              <div className="table-body" />
              <div
                id="marketTradeTable_wrapper"
                className="dataTables_wrapper no-footer"
              >
                <div
                  id="marketTradeTable_processing"
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
                        width: "431.25px",
                        paddingRight: "0px",
                      }}
                    >
                      <table
                        className="table dataTable no-footer"
                        role="grid"
                        style={{
                          marginLeft: "0px",
                          width: "431.25px",
                        }}
                      >
                        <thead>
                          <tr role="row">
                            <th
                              className="table-col price sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "170.656px" }}
                              aria-label="Price(USDT)"
                            >
                              Price(<span></span>)
                            </th>
                            <th
                              className="table-col amount sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "120.75px" }}
                              aria-label="Amount"
                            >
                              Amount
                            </th>
                            <th
                              className="table-col time text-right sorting_desc"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "79.8438px" }}
                              aria-label="Time"
                            >
                              Time
                            </th>
                          </tr>
                        </thead>

                        <SellTable tradeOrderHistory={tradeOrderHistory} />
                      </table>
                    </div>
                  </div>
                  <div
                    className="dataTables_scrollBody"
                    style={{
                      position: "relative",
                      overflow: "auto",
                      height: "244px",
                      width: "100%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
