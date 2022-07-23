import React from "react";
import SellTable from "./SellTable";
const TradesHistory = ({ marketTrades }: any) => {
  return (
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

                  <SellTable marketTrades={marketTrades} />
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
  );
};

export default TradesHistory;
