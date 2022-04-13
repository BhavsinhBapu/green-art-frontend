import type { GetServerSideProps, NextPage } from "next";
import ReportSidebar from "layout/report-sidebar";
import React, { useState } from "react";
// import { handleSearch } from "common/search";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import {
  AllBuyOrdersHistoryAction,
  handleSearchItems,
} from "state/actions/reports";
import TableLoading from "components/common/TableLoading";

const BuyOrderHistory: NextPage = () => {
  type searchType = string;

  const [search, setSearch] = useState<searchType>("");
  const [sortingInfo, setSortingInfo] = useState<any>({
    column_name: "created_at",
    order_by: "desc",
  });
  const [processing, setProcessing] = useState<boolean>(false);
  const [history, setHistory] = useState<any>([]);
  const [stillHistory, setStillHistory] = useState<any>([]);
  const LinkTopaginationString = (page: any) => {
    const url = page.url.split("?")[1];
    const number = url.split("=")[1];
    AllBuyOrdersHistoryAction(
      5,
      parseInt(number),
      setHistory,
      setProcessing,
      setStillHistory,
      sortingInfo.column_name,
      sortingInfo.order_by
    );
  };
  const getReport = async () => {
    AllBuyOrdersHistoryAction(
      5,
      1,
      setHistory,
      setProcessing,
      setStillHistory,
      sortingInfo.column_name,
      sortingInfo.order_by
    );
  };
  const sort_table = (column_name: string, order_by: string) => {
    setSortingInfo({
      column_name,
      order_by,
    });
    AllBuyOrdersHistoryAction(
      5,
      1,
      setHistory,
      setProcessing,
      setStillHistory,
      column_name,
      order_by
    );
  };
  React.useEffect(() => {
    getReport();
    return () => {
      setHistory([]);
    };
  }, []);
  return (
    <div className="page-wrap">
      <ReportSidebar />

      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="overview-area">
              <div className="overview-left">
                <h2 className="section-top-title">Buy Order History</h2>
              </div>
            </div>
          </div>

          <div className="asset-balances-area">
            {processing ? (
              <TableLoading />
            ) : (
              <div className="asset-balances-left">
                <div className="section-wrapper">
                  <div className="table-responsive">
                    <div
                      id="assetBalances_wrapper"
                      className="dataTables_wrapper no-footer"
                    >
                      <div className="dataTables_head">
                        <div
                          className="dataTables_length"
                          id="assetBalances_length"
                        >
                          <label className="">
                            Show
                            <select
                              name="assetBalances_length"
                              aria-controls="assetBalances"
                              className=""
                              placeholder="10"
                              onChange={(e) => {
                                AllBuyOrdersHistoryAction(
                                  parseInt(e.target.value),
                                  1,
                                  setHistory,
                                  setProcessing,
                                  setStillHistory,
                                  sortingInfo.column_name,
                                  sortingInfo.order_by
                                );
                              }}
                            >
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                            entries
                          </label>
                        </div>
                        <div id="table_filter" className="dataTables_filter">
                          <label>
                            Search:
                            <input
                              type="search"
                              className="data_table_input"
                              placeholder=""
                              aria-controls="table"
                              value={search}
                              onChange={(e) => {
                                handleSearchItems(
                                  e,
                                  setSearch,
                                  stillHistory,
                                  setHistory
                                );
                              }}
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <table
                      id="assetBalances"
                      className="table table-borderless secendary-table asset-balances-table"
                    >
                      <thead>
                        <tr>
                          <th scope="col" className="">
                            Base Coin
                            {sortingInfo.column_name === "base_coin" ? (
                              sortingInfo.order_by === "asc" ? (
                                <i
                                  className="fa fa-sort-asc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("base_coin", "desc");
                                  }}
                                ></i>
                              ) : (
                                <i
                                  className="fa fa-sort-desc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("base_coin", "asc");
                                  }}
                                ></i>
                              )
                            ) : (
                              <i
                                className="fa fa-sort"
                                style={{ marginLeft: "10px" }}
                                onClick={() => {
                                  sort_table("base_coin", "asc");
                                }}
                              ></i>
                            )}
                          </th>
                          <th scope="col" rowSpan={1} colSpan={1}>
                            Trade Coin
                            {sortingInfo.column_name === "trade_coin" ? (
                              sortingInfo.order_by === "asc" ? (
                                <i
                                  className="fa fa-sort-asc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("trade_coin", "desc");
                                  }}
                                ></i>
                              ) : (
                                <i
                                  className="fa fa-sort-desc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("trade_coin", "asc");
                                  }}
                                ></i>
                              )
                            ) : (
                              <i
                                className="fa fa-sort"
                                style={{ marginLeft: "10px" }}
                                onClick={() => {
                                  sort_table("trade_coin", "asc");
                                }}
                              ></i>
                            )}
                          </th>
                          <th scope="col" rowSpan={1} colSpan={1}>
                            Amount
                            {sortingInfo.column_name === "amount" ? (
                              sortingInfo.order_by === "asc" ? (
                                <i
                                  className="fa fa-sort-asc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("amount", "desc");
                                  }}
                                ></i>
                              ) : (
                                <i
                                  className="fa fa-sort-desc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("amount", "asc");
                                  }}
                                ></i>
                              )
                            ) : (
                              <i
                                className="fa fa-sort"
                                style={{ marginLeft: "10px" }}
                                onClick={() => {
                                  sort_table("amount", "asc");
                                }}
                              ></i>
                            )}
                          </th>
                          <th scope="col">
                            Processed
                            {sortingInfo.column_name === "processed" ? (
                              sortingInfo.order_by === "asc" ? (
                                <i
                                  className="fa fa-sort-asc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("processed", "desc");
                                  }}
                                ></i>
                              ) : (
                                <i
                                  className="fa fa-sort-desc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("processed", "asc");
                                  }}
                                ></i>
                              )
                            ) : (
                              <i
                                className="fa fa-sort"
                                style={{ marginLeft: "10px" }}
                                onClick={() => {
                                  sort_table("processed", "asc");
                                }}
                              ></i>
                            )}
                          </th>
                          <th scope="col">
                            Price
                            {sortingInfo.column_name === "price" ? (
                              sortingInfo.order_by === "asc" ? (
                                <i
                                  className="fa fa-sort-asc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("price", "desc");
                                  }}
                                ></i>
                              ) : (
                                <i
                                  className="fa fa-sort-desc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("price", "asc");
                                  }}
                                ></i>
                              )
                            ) : (
                              <i
                                className="fa fa-sort"
                                style={{ marginLeft: "10px" }}
                                onClick={() => {
                                  sort_table("price", "asc");
                                }}
                              ></i>
                            )}
                          </th>
                          <th scope="col">
                            Status
                            {sortingInfo.column_name === "status" ? (
                              sortingInfo.order_by === "asc" ? (
                                <i
                                  className="fa fa-sort-asc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("status", "desc");
                                  }}
                                ></i>
                              ) : (
                                <i
                                  className="fa fa-sort-desc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("status", "asc");
                                  }}
                                ></i>
                              )
                            ) : (
                              <i
                                className="fa fa-sort"
                                style={{ marginLeft: "10px" }}
                                onClick={() => {
                                  sort_table("status", "asc");
                                }}
                              ></i>
                            )}
                          </th>
                          <th scope="col">
                            Date
                            {sortingInfo.column_name === "created_at" ? (
                              sortingInfo.order_by === "asc" ? (
                                <i
                                  className="fa fa-sort-asc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("created_at", "desc");
                                  }}
                                ></i>
                              ) : (
                                <i
                                  className="fa fa-sort-desc"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    sort_table("created_at", "asc");
                                  }}
                                ></i>
                              )
                            ) : (
                              <i
                                className="fa fa-sort"
                                style={{ marginLeft: "10px" }}
                                onClick={() => {
                                  sort_table("created_at", "asc");
                                }}
                              ></i>
                            )}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {history?.map((item: any, index: any) => (
                          <tr id="{{$wallet->id}}" key={index}>
                            <td>
                              <div className="asset">
                                <span className="asset-name">
                                  {item?.base_coin}
                                </span>
                              </div>
                            </td>
                            <td>
                              <span className="symbol">{item?.trade_coin}</span>
                            </td>
                            <td>
                              <div className="blance-text">
                                <span className="usd">${item?.amount}</span>
                              </div>
                            </td>
                            <td>
                              <div className="blance-text">
                                <span className="blance">
                                  {item?.processed}
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="blance-text">
                                <span className="blance">{item?.price}</span>
                              </div>
                            </td>
                            <td>
                              <div className="blance-text">
                                {item?.status === 0
                                  ? "processing"
                                  : item?.status === 1
                                  ? "completed"
                                  : "cancelled"}
                              </div>
                            </td>
                            <td>
                              <div className="status-text">
                                <span className="status">
                                  {item?.created_at}
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {history?.length <= 0 && (
                      <div className="no_data_table">
                        No data available in table
                      </div>
                    )}
                    <div
                      className="pagination-wrapper"
                      id="assetBalances_paginate"
                    >
                      <span>
                        {stillHistory?.items?.links.map(
                          (link: any, index: number) =>
                            link.label === "&laquo; Previous" ? (
                              <a
                                className="paginate-button"
                                onClick={() => {
                                  if (link.url) LinkTopaginationString(link);
                                }}
                                key={index}
                              >
                                <i className="fa fa-angle-left"></i>
                              </a>
                            ) : link.label === "Next &raquo;" ? (
                              <a
                                className="paginate-button"
                                onClick={() => LinkTopaginationString(link)}
                                key={index}
                              >
                                <i className="fa fa-angle-right"></i>
                              </a>
                            ) : (
                              <a
                                className="paginate_button paginate-number"
                                aria-controls="assetBalances"
                                data-dt-idx="1"
                                onClick={() => LinkTopaginationString(link)}
                                key={index}
                              >
                                {link.label}
                              </a>
                            )
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* <div className="asset-balances-right">
              <div className="box-one single-box">
                <div className="section-wrapper">
                  <div
                    className="deposit-info-area"
                    id="wallet_deposit_area"
                  ></div>
                </div>
              </div>
              <div className="box-two single-box">
                <div className="section-wrapper">
                  <div
                    className="withdrawal-info-area"
                    id="withdrawal_wallet_area"
                  ></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/buy-order-history");
  return {
    props: {},
  };
};

export default BuyOrderHistory;
