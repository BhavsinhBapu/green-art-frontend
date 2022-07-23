import React from "react";

const AllSellOrders = ({ OpenBooksell }: any) => {
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
                    <tr role="row"></tr>
                    <tr role="row"></tr>
                    <tr role="row"></tr>
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
                  <tr role="row">
                    <th
                      className="table-col price sorting_disabled"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "170.656px" }}
                      aria-label="Price(USDT)"
                    ></th>
                    <th
                      className="table-col amount sorting_disabled"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "120.75px" }}
                      aria-label="Amount"
                    ></th>
                    <th
                      className="table-col time text-right sorting_desc"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "79.8438px" }}
                      aria-label="Time"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {OpenBooksell?.length !== 0 ? (
                    OpenBooksell?.map((item: any, index: number) => (
                      <tr className="odd" key={index}>
                        <td>
                          <div className="asset">
                            <span className="text-success">{item.price}</span>
                          </div>
                        </td>
                        <td>
                          <div className="asset">
                            <span className="asset-name">{item.amount}</span>
                          </div>
                        </td>
                        <td>
                          <div className="asset">
                            <span className="asset-name">{item.my_size}</span>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="odd">
                      <td valign="top" colSpan={3} className="dataTables_empty">
                        No data available in tabletable
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="trades-table-footer">
          <div className="trades-table-row">
            <div className="trades-table-col volume"></div>
            <div className="trades-table-col price total-price" />
            <div className="trades-table-col price total-price"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSellOrders;
