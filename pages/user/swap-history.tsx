import type { GetServerSideProps, NextPage } from "next";
import * as React from "react";
import ReportSidebar from "layout/report-sidebar";
import {
  CoinConvertHistoryAction,
  handleSwapHistorySearch,
} from "state/actions/reports";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import TableLoading from "components/common/TableLoading";
const SwapHistory: NextPage = () => {
  type searchType = string;
  const [search, setSearch] = React.useState<searchType>("");
  const [processing, setProcessing] = React.useState<boolean>(false);
  const [history, setHistory] = React.useState<any>([]);
  const [stillHistory, setStillHistory] = React.useState<any>([]);
  const LinkTopaginationString = (page: any) => {
    console.log(page.url);
    const url = page.url.split("?")[1];
    const number = url.split("=")[1];
    CoinConvertHistoryAction(
      5,
      parseInt(number),
      setHistory,
      setProcessing,
      setStillHistory
    );
  };
  const getReport = async () => {
    CoinConvertHistoryAction(5, 1, setHistory, setProcessing, setStillHistory);
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
                <h2 className="section-top-title">Coin Swap History</h2>
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
                              onChange={(e) => {
                                CoinConvertHistoryAction(
                                  parseInt(e.target.value),
                                  1,
                                  setHistory,
                                  setProcessing,
                                  setStillHistory
                                );
                              }}
                            >
                              <option selected disabled hidden>
                                5
                              </option>
                              <option value="5">5</option>
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
                              aria-controls="table"
                              value={search}
                              onChange={(e) => {
                                handleSwapHistorySearch(
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
                            From Wallet
                            <i className="fas fa-sort-down sort_space"></i>
                          </th>
                          <th scope="col" rowSpan={1} colSpan={1}>
                            To Wallet
                            <i className="fas fa-sort sort_space"></i>
                          </th>
                          <th scope="col" rowSpan={1} colSpan={1}>
                            Requested Amount
                            <i className="fas fa-sort sort_space"></i>
                          </th>
                          <th scope="col">
                            Converted Amount
                            <i className="fas fa-sort sort_space"></i>
                          </th>
                          <th scope="col">
                            Rate
                            <i className="fas fa-sort sort_space"></i>
                          </th>
                          <th scope="col">
                            Created At
                            <i className="fas fa-sort sort_space"></i>
                          </th>
                          <th scope="col">
                            Status
                            <i className="fas fa-sort sort_space"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {history?.map((item: any, index: any) => (
                          <tr id="">
                            <td>
                              <div className="asset">
                                <img
                                  className="asset-icon"
                                  src="/bitcoin.png"
                                  alt=""
                                />
                                <span className="asset-name">
                                  {item?.from_wallet?.name}
                                </span>
                              </div>
                            </td>
                            <td>
                              <span className="symbol">
                                {" "}
                                {item?.to_wallet?.coin_type}
                              </span>
                            </td>
                            <td>
                              <div className="blance-text">
                                <span className="blance market incree">
                                  ${item?.requested_amount}
                                </span>
                                {/* <span className="usd">$0.000000</span> */}
                              </div>
                            </td>
                            <td>
                              <div className="blance-text">
                                <span className="blance">
                                  {item?.converted_amount}
                                </span>
                                {/* <span className="usd">0.00000</span> */}
                              </div>
                            </td>
                            <td>
                              <div className="blance-text">
                                <span className="blance">{item?.rate}</span>
                                {/* <span className="usd">0.000000</span> */}
                              </div>
                            </td>
                            <td>
                              <div className="blance-text">
                                <span className="usd">{item?.created_at}</span>
                              </div>
                            </td>
                            <td>
                              <div className="status-text">
                                <span className="blance market ">
                                  {item?.status === 0
                                    ? "Pending"
                                    : item?.status === 1
                                    ? "Completed"
                                    : "Cancelled"}
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
                        {stillHistory?.list?.links.map(
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
  await SSRAuthCheck(ctx, "/user/swap-history");
  return {
    props: {},
  };
};

export default SwapHistory;
