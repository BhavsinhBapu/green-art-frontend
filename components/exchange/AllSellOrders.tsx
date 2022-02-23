import React from "react";

const AllSellOrders = () => {
  return (
    <div className="sell-order">
      <div className="trades-table">
        <div className="trades-table-body" />
        <div
          id="exchangeAllSellOrders_wrapper"
          className="dataTables_wrapper no-footer"
        >
          <div
            id="exchangeAllSellOrders_processing"
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
                      {/* <th
                                            className="text-pink w-30 sorting_asc"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "109.766px" }}
                                            aria-label
                                          /> */}
                      {/* <th
                                            className="text-center w-30 sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "130.734px" }}
                                            aria-label
                                          />
                                          <th
                                            className="sorting_disabled"
                                            rowSpan={1}
                                            colSpan={1}
                                            style={{ width: "130.75px" }}
                                            aria-label
                                          /> */}
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
                height: "425px",
                width: "100%",
              }}
            >
              <table
                id="exchangeAllSellOrders"
                className="table dataTable no-footer"
                role="grid"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr role="row" style={{ height: "0px" }}>
                    {/* <th
                                          className="text-pink w-30 sorting_asc"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "109.766px",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            borderTopWidth: "0px",
                                            borderBottomWidth: "0px",
                                            height: "0px",
                                          }}
                                          aria-label
                                        >
                                          <div
                                            className="dataTables_sizing"
                                            style={{
                                              height: 0,
                                              overflow: "hidden",
                                            }}
                                          />
                                        </th>
                                        <th
                                          className="text-center w-30 sorting_disabled"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "130.734px",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            borderTopWidth: "0px",
                                            borderBottomWidth: "0px",
                                            height: "0px",
                                          }}
                                          aria-label
                                        >
                                          <div
                                            className="dataTables_sizing"
                                            style={{
                                              height: 0,
                                              overflow: "hidden",
                                            }}
                                          />
                                        </th>
                                        <th
                                          className="sorting_disabled"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "130.75px",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            borderTopWidth: "0px",
                                            borderBottomWidth: "0px",
                                            height: "0px",
                                          }}
                                          aria-label
                                        >
                                          <div
                                            className="dataTables_sizing"
                                            style={{
                                              height: 0,
                                              overflow: "hidden",
                                            }}
                                          />
                                        </th> */}
                  </tr>
                </thead>{" "}
                <tbody>
                  <tr className="odd">
                    <td valign="top" colSpan={3} className="dataTables_empty">
                      No data available in table
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>{" "}
        <div className="trades-table-footer">
          <div className="trades-table-row">
            <div className="trades-table-col volume">
              <a className="more-btn">More</a>
            </div>{" "}
            <div className="trades-table-col price total-price" />{" "}
            <div className="trades-table-col price total-price">
              <span>0.00</span> <span>BTC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSellOrders;
