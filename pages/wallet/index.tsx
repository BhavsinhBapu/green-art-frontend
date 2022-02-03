import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <>
      <div className="page-wrap">
        <div className="page-left-sidebar">
          <div className="sidebar-top">
            <ul className="left-menu">
              <li className="active">
                <a href="">Wallet Overview</a>
              </li>
              <li className="">
                <a href="">Swap Coin</a>
              </li>
            </ul>
          </div>
          <div className="sidebar-middle">
            <button
              value="0"
              id="depositId"
              type="submit"
              className="depositId primary-btn-outline btn-deposite"
            >
              Deposit
            </button>
            <button
              value="0"
              id="withdrawalId"
              type="submit"
              className="withdrawalId primary-btn-outline btn-withdraw"
            >
              Withdraw
            </button>
          </div>
        </div>
        <div className="page-main-content">
          <div className="container-fluid">
            <div className="section-top-wrap mb-25">
              <div className="overview-area">
                <div className="overview-left">
                  <h2 className="section-top-title">Overview</h2>
                  <h4 className="blance-title">Total balance</h4>
                  <h4 className="blance">0.545645656</h4>
                </div>
              </div>
            </div>
            <h4 className="section-title-medium">Asset Balances</h4>
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
                            Show{" "}
                            <select
                              name="assetBalances_length"
                              aria-controls="assetBalances"
                              className=""
                            >
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>{" "}
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
                          <th scope="col">
                            Asset
                            <i className="fas fa-sort-down sort_space"></i>
                          </th>
                          <th scope="col">
                            Symbol
                            <i className="fas fa-sort-up sort_space"></i>
                          </th>
                          <th scope="col">
                            On Order
                            <i className="fas fa-sort sort_space"></i>
                          </th>
                          <th scope="col">
                            Available Balance
                            <i className="fas fa-sort sort_space"></i>
                          </th>
                          <th scope="col">
                            Total Balance
                            <i className="fas fa-sort sort_space"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="{{$wallet->id}}">
                          <td>
                            <div className="asset">
                              <img
                                className="asset-icon"
                                src="/amz.png"
                                alt=""
                              />
                              <span className="asset-name">BCH Wallet</span>
                            </div>
                          </td>
                          <td>
                            <span className="symbol">BCH</span>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance market incree">
                                0.00000
                              </span>
                              <span className="usd">$0.000000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.00000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.000000</span>
                            </div>
                          </td>
                        </tr>
                        <tr id="{{$wallet->id}}">
                          <td>
                            <div className="asset">
                              <img
                                className="asset-icon"
                                src="/amz.png"
                                alt=""
                              />
                              <span className="asset-name">BCH Wallet</span>
                            </div>
                          </td>
                          <td>
                            <span className="symbol">BCH</span>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance market incree">
                                0.00000
                              </span>
                              <span className="usd">$0.000000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.00000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.000000</span>
                            </div>
                          </td>
                        </tr>
                        <tr id="{{$wallet->id}}">
                          <td>
                            <div className="asset">
                              <img
                                className="asset-icon"
                                src="/amz.png"
                                alt=""
                              />
                              <span className="asset-name">BCH Wallet</span>
                            </div>
                          </td>
                          <td>
                            <span className="symbol">BCH</span>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance market incree">
                                0.00000
                              </span>
                              <span className="usd">$0.000000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.00000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.000000</span>
                            </div>
                          </td>
                        </tr>
                        <tr id="{{$wallet->id}}">
                          <td>
                            <div className="asset">
                              <img
                                className="asset-icon"
                                src="/amz.png"
                                alt=""
                              />
                              <span className="asset-name">BCH Wallet</span>
                            </div>
                          </td>
                          <td>
                            <span className="symbol">BCH</span>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance market incree">
                                0.00000
                              </span>
                              <span className="usd">$0.000000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.00000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.000000</span>
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
    </>
  );
};

export default Index;
