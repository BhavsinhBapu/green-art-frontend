import type { NextPage } from "next";

import React, { useState } from "react";
const GetAllBuyOrders: NextPage = () => {
  type searchType = string;
  const [search, setSearch] = useState<searchType>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  return (
    <div className="page-wrap">
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="overview-area">
              <div className="overview-left">
                <h2 className="section-top-title">
                  All Open Buy Order History Of BTC/USDT
                </h2>
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
                            onChange={handleChange}
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
                          Amount
                        </th>
                        <th scope="col" rowSpan={1} colSpan={1}>
                          Processed
                        </th>
                        <th scope="col" rowSpan={1} colSpan={1}>
                          Price
                        </th>
                        <th scope="col">Total</th>
                        <th scope="col">My Size</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAllBuyOrders;
