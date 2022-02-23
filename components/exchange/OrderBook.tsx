import React from "react";
import AllSellOrders from "./AllSellOrders";
import ExchangeBox from "./ExchangeBox";
import TradesTable from "./tradesTable";

const OrderBook = () => {
  return (
    <div className="col-xl-6">
      <div className="row">
        <div className="col-lg-6">
          <div className="trades-section">
            <div className="trades-headers mb-3">
              <h3>Order Book</h3>
            </div>{" "}
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
                                className="trades-table-col price text-pink w-30 sorting_desc"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "109.906px" }}
                                aria-label="Price(USDT)"
                              >
                                Price(<span>USDT</span>)
                              </th>
                              <th
                                className="trades-table-col amount text-center w-30 sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "133.656px" }}
                                aria-label="Amount"
                              >
                                Amount
                              </th>
                              <th
                                className="trades-table-col volume sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "127.688px" }}
                                aria-label="	My Size"
                              >
                                {" "}
                                My Size
                              </th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                    <TradesTable />
                  </div>
                </div>{" "}
                <div className="trades-table-footer">
                  <div className="trades-table-row">
                    <div className="trades-table-col volume">
                      <a className="more-btn">More</a>
                    </div>{" "}
                    <div className="trades-table-col price total-price" />{" "}
                    <div className="trades-table-col price total-price">
                      <span>0.00</span> <span>USDT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <AllSellOrders />
          </div>
        </div>{" "}
        <div className="col-lg-6">
          {/* exchange box */}
          <ExchangeBox />
          <div className="trades-section mt-4">
            <div className="trades-headers mb-3">
              <h3>Trades</h3>
            </div>{" "}
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
                              Price(<span>USDT</span>)
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
                  >
                    <table
                      id="marketTradeTable"
                      className="table dataTable no-footer dtr-inline"
                      role="grid"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr role="row" style={{ height: "0px" }}>
                          <th
                            className="table-col price sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            style={{
                              width: "170.656px",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              borderTopWidth: "0px",
                              borderBottomWidth: "0px",
                              height: "0px",
                            }}
                            aria-label="Price(USDT)"
                          >
                            <div
                              className="dataTables_sizing"
                              style={{
                                height: "0px",
                                overflow: "hidden",
                              }}
                            >
                              Price(<span>USDT</span>)
                            </div>
                          </th>
                          <th
                            className="table-col amount sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            style={{
                              width: "120.75px",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              borderTopWidth: "0px",
                              borderBottomWidth: "0px",
                              height: "0px",
                            }}
                            aria-label="Amount"
                          >
                            <div
                              className="dataTables_sizing"
                              style={{
                                height: "0px",
                                overflow: "hidden",
                              }}
                            >
                              Amount
                            </div>
                          </th>
                          <th
                            className="table-col time text-right sorting_desc"
                            rowSpan={1}
                            colSpan={1}
                            style={{
                              width: "79.8438px",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              borderTopWidth: "0px",
                              borderBottomWidth: "0px",
                              height: "0px",
                            }}
                            aria-label="Time"
                          >
                            <div
                              className="dataTables_sizing"
                              style={{
                                height: "0px",
                                overflow: "hidden",
                              }}
                            >
                              Time
                            </div>
                          </th>
                        </tr>
                      </thead>{" "}
                      <tbody>
                        <tr className="odd">
                          <td
                            valign="top"
                            colSpan={3}
                            className="dataTables_empty"
                          >
                            No data available in table
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
