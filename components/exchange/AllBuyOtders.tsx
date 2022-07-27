import React from "react";
import BuyTable from "./BuyTable";
const AllBuyOtders = ({ OpenBookBuy }: any) => {
  return (
    <div>
      {" "}
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
                          aria-label="Price"
                        >
                          Price
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
              <div className="trades-table-col price total-price" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBuyOtders;
