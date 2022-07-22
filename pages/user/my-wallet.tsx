import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import type { GetServerSideProps, NextPage } from "next";
import DepositTab from "components/wallet/DepositTab";
import WirhdrawTab from "components/wallet/WirhdrawTab";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { sortArray } from "common";
import {
  SearchObjectArrayFuesJS,
  WalletDepositApiAction,
  WalletListApiAction,
  WalletWithdrawApiAction,
} from "state/actions/wallet";
import Loading from "components/common/TableLoading";
import Link from "next/link";
const MyWallet: NextPage = () => {
  const [show, setShow] = useState<any>({
    deposit: false,
    withdraw: false,
  });
  const [walletList, setWalletList] = useState<any>([]);
  const [Changeable, setChangeable] = useState<any[]>([]);
  const [processing, setProcessing] = useState<boolean>(false);
  const [allData, setAllData] = useState<any>();
  const [transactionProcessing, settransactionProcessing] = useState<any>({
    deposit: false,
    withdraw: false,
  });
  const [selectedRow, setSelectedRow] = useState<any>({
    id: null,
    index: null,
  });
  const [response, setResponse] = useState<any>({
    deposit: null,
    withdraw: null,
    address: null,
  });
  const TurnoffSetShow = () => {
    setShow({
      deposit: false,
      withdraw: false,
    });
    setSelectedRow({
      id: null,
      index: null,
      address: null,
    });
  };
  const getWalletLists = async (url: string) => {
    const response: any = await WalletListApiAction(url, setProcessing);
    setWalletList(response?.wallets);
    setChangeable(response?.wallets?.data);
    setAllData(response);
  };
  const ResizeChangebleArrayBySize = (size: number) => {
    let newArray = walletList?.data?.slice(0, size);
    setChangeable(newArray);
  };
  const LinkTopaginationString = async (link: any) => {
    if (link.url === null) return;
    if (link.label === walletList.current_page.toString()) return;
    const splitLink = link.url.split("api");
    const response: any = await WalletListApiAction(
      splitLink[1],
      setProcessing
    );
    setWalletList(response?.wallets);
    setChangeable(response?.wallets?.data);
  };
  const handleWithdrawAndDeposit = async (actionType: number, id: number) => {
    if (selectedRow.index === null) return;
    if (
      (show.withdraw === true && show.deposit === true) ||
      (show.deposit === true && show.withdraw === false)
    ) {
      toast.error("Please select a wallet");
      return;
    }

    setShow({
      deposit: false,
      withdraw: false,
    });

    if (actionType === 1) {
      const response = await WalletDepositApiAction(
        id,
        settransactionProcessing
      );
      if (response.success === true) {
        setResponse({
          ...response,
          deposit: response.wallet,
          address: response.address ? response.address : null,
        });
        setShow({
          deposit: true,
        });
      }
    } else {
      const response = await WalletWithdrawApiAction(
        id,
        settransactionProcessing
      );
      if (response.success === true) {
        setResponse({
          ...response,
          withdraw: response.wallet,
          address: response.address,
        });
        setShow({
          withdraw: true,
        });
      }
    }
  };

  useEffect(() => {
    getWalletLists("/wallet-list?page=1");
    return () => {
      setWalletList(null);
    };
  }, []);
  return (
    <>
      <div className="page-wrap">
        <div className="page-left-sidebar">
          <div className="sidebar-top">
            <ul className="left-menu">
              <li className="active">
                <Link href={`/user/my-wallet`}>
                  <a>Wallet Overview</a>
                </Link>
              </li>
              <li className="">
                <Link href={`/user/swap-coin`}>
                  <a>Swap Coin</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-middle">
            <button
              value="0"
              id="depositId"
              type="submit"
              className="depositId primary-btn-outline btn-deposite"
              onClick={() => {
                handleWithdrawAndDeposit(1, selectedRow.id);
              }}
            >
              {transactionProcessing.deposit ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm mr-3"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span>Please wait</span>
                </>
              ) : (
                "Deposit"
              )}
            </button>
            <button
              value="0"
              id="withdrawalId"
              type="submit"
              className="withdrawalId primary-btn-outline btn-withdraw"
              onClick={() => handleWithdrawAndDeposit(2, selectedRow.id)}
            >
              {transactionProcessing.withdraw ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm mr-3"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span>Please wait</span>
                </>
              ) : (
                "Withdraw"
              )}
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
                  <h4 className="blance">
                    {allData?.total ? allData?.total : 0}
                  </h4>
                </div>
              </div>
            </div>
            <h4 className="section-title-medium">Asset Balances</h4>
            <div className="asset-balances-area cstm-loader-area">
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
                                  ResizeChangebleArrayBySize(
                                    parseInt(e.target.value)
                                  );
                                }}
                              >
                                <option value="10">10</option>
                                <option value="20">25</option>
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
                                onChange={(e) =>
                                  SearchObjectArrayFuesJS(
                                    walletList,
                                    setChangeable,
                                    e.target.value
                                  )
                                }
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
                              {/* <i className="fas fa-sort-down sort_space"></i> */}
                            </th>
                            <th scope="col">
                              Symbol
                              {/* <i className="fas fa-sort-up sort_space"></i> */}
                            </th>
                            <th scope="col">
                              On Order
                              {/* <i className="fas fa-sort sort_space"></i> */}
                            </th>
                            <th scope="col">
                              Available Balance
                              {/* <i className="fas fa-sort sort_space"></i> */}
                            </th>
                            <th scope="col">
                              Total Balance
                              {/* <i className="fas fa-sort sort_space"></i> */}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Changeable?.map((item: any, index: number) => (
                            <tr
                              id=""
                              className={
                                index === selectedRow.index
                                  ? "even active"
                                  : "odd"
                              }
                              key={index}
                              onClick={() => {
                                setShow({
                                  deposit: false,
                                  withdraw: false,
                                });
                                setSelectedRow({
                                  id: item.id,
                                  index: index,
                                });
                              }}
                            >
                              <td>
                                <div className="asset">
                                  <img
                                    className="asset-icon"
                                    src="/bitcoin.png"
                                    alt=""
                                  />
                                  <span className="asset-name">
                                    {item?.name}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <span className="symbol">
                                  {item?.coin_type}
                                </span>
                              </td>
                              <td>
                                <div className="blance-text">
                                  <span className="blance market incree">
                                    {item?.on_order}
                                  </span>
                                  <span className="usd">
                                    ${item?.on_order_usd}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="blance-text">
                                  <span className="blance">
                                    {item?.available_balance_usd}
                                  </span>
                                  <span className="usd">
                                    ${item?.total_balance_usd}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="blance-text">
                                  <span className="blance">
                                    {item?.available_balance_usd}
                                  </span>
                                  <span className="usd">
                                    ${item?.total_balance_usd}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div
                        className="pagination-wrapper"
                        id="assetBalances_paginate"
                      >
                        <span>
                          {walletList?.links?.map((link: any, index: number) =>
                            link.label === "&laquo; Previous" ? (
                              <a
                                className="paginate-button"
                                onClick={() => LinkTopaginationString(link)}
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
              {show?.deposit && (
                <DepositTab
                  response={response}
                  TurnoffSetShow={TurnoffSetShow}
                />
              )}
              {show?.withdraw && (
                <WirhdrawTab
                  response={response}
                  TurnoffSetShow={TurnoffSetShow}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/my-wallet");
  return {
    props: {},
  };
};

export default MyWallet;
