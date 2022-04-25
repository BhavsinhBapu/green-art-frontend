import type { GetServerSideProps, NextPage } from "next";
import React, { useState } from "react";
import ReportSidebar from "layout/report-sidebar";
import {
  WithdrawAndDepositHistoryAction,
  handleSearch,
} from "state/actions/reports";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import Loading from "components/common/TableLoading";
import { useRouter } from "next/router";
const DepositHistory: NextPage = () => {
  const router = useRouter();
  const { type } = router.query;
  const [search, setSearch] = useState<any>("");
  const [processing, setProcessing] = useState<boolean>(false);
  const [history, setHistory] = useState<any>([]);
  const [stillHistory, setStillHistory] = useState<any>([]);
  const LinkTopaginationString = (page: any) => {
    const url = page.url.split("?")[1];
    const number = url.split("=")[1];
    WithdrawAndDepositHistoryAction(
      type as string,
      10,
      parseInt(number),
      setHistory,
      setProcessing,
      setStillHistory
    );
  };
  const getReport = async () => {
    if (type === "deposit" || type === "withdrawal") {
      WithdrawAndDepositHistoryAction(
        type as string,
        10,
        1,
        setHistory,
        setProcessing,
        setStillHistory
      );
    }
  };
  React.useEffect(() => {
    getReport();
    return () => {
      setHistory([]);
    };
  }, [type]);
  return (
    <div className="page-wrap">
      <ReportSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="overview-area">
              <div className="overview-left">
                <h2 className="section-top-title">
                  {type === "deposit"
                    ? "Deposit History"
                    : "Withdrawal History"}{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="asset-balances-area">
            {processing ? (
              <Loading />
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
                                WithdrawAndDepositHistoryAction(
                                  type as string,
                                  parseInt(e.target.value),
                                  1,
                                  setHistory,
                                  setProcessing,
                                  setStillHistory
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
                              name="search"
                              className="data_table_input"
                              placeholder=""
                              value={search}
                              aria-controls="table"
                              onChange={(e) => {
                                handleSearch(
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
                    <div className="cp-user-wallet-table table-responsive">
                      <table
                        id="assetBalances"
                        className="table table-borderless secendary-table asset-balances-table"
                      >
                        <thead>
                          <tr>
                            <th scope="col" className="">
                              Created At
                              {/* <i className="fas fa-sort-down sort_space"></i> */}
                            </th>
                            <th scope="col" rowSpan={1} colSpan={1}>
                              Address
                              {/* <i className="fas fa-sort sort_space"></i> */}
                            </th>
                            <th scope="col" rowSpan={1} colSpan={1}>
                              Coin Type
                              {/* <i className="fas fa-sort sort_space"></i> */}
                            </th>
                            <th scope="col">
                              Amount
                              {/* <i className="fas fa-sort sort_space"></i> */}
                            </th>
                            <th scope="col">
                              Fees
                              {/* <i className="fas fa-sort sort_space"></i> */}
                            </th>
                            <th scope="col">
                              Transaction Hash
                              {/* <i className="fas fa-sort sort_space"></i> */}
                            </th>
                            <th scope="col">
                              Status
                              <i className="fas fa-sort sort_space"></i>
                            </th>
                          </tr>
                        </thead>
                        {history.length > 0 && (
                          <tbody>
                            {history.map((item: any, index: number) => {
                              return (
                                <tr key={item.id}>
                                  <td>{item.created_at}</td>
                                  <td>{item.address}</td>
                                  <td>{item.coin_type}</td>
                                  <td>{item.amount}</td>
                                  <td>{item.fees}</td>
                                  <td>
                                    {item.hashKey
                                      ? item.hashKey
                                      : item.transaction_hash}
                                  </td>
                                  <td>
                                    {item.status === "0"
                                      ? "Pending"
                                      : item.status === "1"
                                      ? "Success"
                                      : "Failed"}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        )}
                      </table>
                      {history.length === 0 && (
                        <div className="no_data_table">
                          No data available in table
                        </div>
                      )}
                    </div>
                    <div
                      className="pagination-wrapper"
                      id="assetBalances_paginate"
                    >
                      <span>
                        {stillHistory?.histories?.links.map(
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
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/wallet-history");
  return {
    props: {},
  };
};

export default DepositHistory;
