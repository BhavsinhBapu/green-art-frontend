import type { NextPage } from "next";
import ReportSidebar from "layout/report-sidebar";
import React, { useState } from "react";
import { handleSearch } from "common/search";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
const BuyOrderHistory: NextPage = () => {
  type searchType = string;
  const [search, setSearch] = useState<searchType>("");

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
                          Search:{search}
                          <input
                            type="search"
                            className="data_table_input"
                            placeholder=""
                            aria-controls="table"
                            value={search}
                            onChange={(e) => {
                              handleSearch(e, setSearch);
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
                          <i className="fas fa-sort-down sort_space"></i>
                        </th>
                        <th scope="col" rowSpan={1} colSpan={1}>
                          Trade Coin
                          <i className="fas fa-sort sort_space"></i>
                        </th>
                        <th scope="col" rowSpan={1} colSpan={1}>
                          Amount
                          <i className="fas fa-sort sort_space"></i>
                        </th>
                        <th scope="col">
                          Processed
                          <i className="fas fa-sort sort_space"></i>
                        </th>
                        <th scope="col">
                          Price
                          <i className="fas fa-sort sort_space"></i>
                        </th>
                        <th scope="col">
                          Status
                          <i className="fas fa-sort sort_space"></i>
                        </th>
                        <th scope="col">
                          Date
                          <i className="fas fa-sort sort_space"></i>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="{{$wallet->id}}">
                        <td>
                          <div className="asset">
                            <span className="asset-name">BCH Wallet</span>
                          </div>
                        </td>
                        <td>
                          <span className="symbol">BCH</span>
                        </td>
                        <td>
                          <div className="blance-text">
                            <span className="usd">$0.000000</span>
                          </div>
                        </td>
                        <td>
                          <div className="blance-text">
                            <span className="blance">0.000000</span>
                          </div>
                        </td>
                        <td>
                          <div className="blance-text">
                            <span className="blance">0.000000</span>
                          </div>
                        </td>
                        <td>
                          <div className="blance-text">
                            <span className="blance market incree">
                              Completed
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="status-text">
                            <span className="status">11/11/2019</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <div className="no_data_table">
                      No data available in table
                    </div> */}

                  <div
                    className="pagination-wrapper"
                    id="assetBalances_paginate"
                  >
                    <a className="paginate-button">
                      <i className="fa fa-angle-left"></i>
                    </a>
                    <span>
                      <a
                        className="paginate_button paginate-number"
                        aria-controls="assetBalances"
                        data-dt-idx="1"
                      >
                        1
                      </a>
                    </span>
                    <a className="paginate-button">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

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
export const getServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/edit-profile");
  return {
    props: {},
  };
};

export default BuyOrderHistory;
