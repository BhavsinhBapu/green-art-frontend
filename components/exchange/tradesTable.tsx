import React from "react";

const TradesTable = () => {
  return (
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
        </thead>
        <tbody>
          <tr className="odd">
            <td valign="top" colSpan={3} className="dataTables_empty">
              No data available in table
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TradesTable;
