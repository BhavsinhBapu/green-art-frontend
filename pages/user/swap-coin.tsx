import type { GetServerSideProps, NextPage } from "next";
import * as React from "react";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import SwapCoinSidebar from "layout/swap-coin-sidebar";
import { getUserCoinForSwapAction } from "state/actions/swap";
const SwapCoin: NextPage = () => {
  const [walletLists, setWalletLists] = React.useState<any>([]);
  const [fromSelected, setFromSelected] = React.useState<any>({
    amount: 0,
    coin_id: null,
  });
  const [toSelected, setToSelected] = React.useState<any>({
    amount: 0,
    coin_id: null,
  });
  React.useEffect(() => {
    getUserCoinForSwapAction(setWalletLists);
  }, []);
  return (
    <div className="page-wrap">
      <SwapCoinSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="overview-area">
              <div className="overview-left">
                <h2 className="section-top-title">Swap Coin</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10">
              <div className="section-wrapper">
                <div className="swap-area">
                  <div className="swap-area-top">
                    <div className="form-group">
                      <div className="swap-wrap">
                        <div className="swap-wrap-top">
                          <label>From</label>
                          <span className="available">Available : 0 USDT</span>
                        </div>
                        <div className="swap-input-wrap">
                          <div className="form-amount">
                            <input
                              type="text"
                              className="form-control"
                              id="amount-one"
                              value={fromSelected ? fromSelected.amount : ""}
                              placeholder="Please enter 10 -2400000"
                            />
                          </div>
                          <div className="cp-select-area">
                            <select
                              className=" form-control "
                              id="currency-one"
                            >
                              {walletLists.map((item: any) => (
                                <option value={item.id} key={item.id}>
                                  {item.coin_type}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swap-button-area text-center">
                      <button
                        id="swap"
                        className="swap-button"
                        onClick={() => {
                          // swap from to
                          const form = fromSelected;
                          setFromSelected(toSelected);
                          setToSelected(form);
                        }}
                      >
                        <i className="fa fa-refresh" />
                      </button>
                    </div>
                    <div className="form-group">
                      <div className="swap-wrap">
                        <div className="swap-wrap-top">
                          <label>To</label>
                        </div>
                        <div className="swap-input-wrap">
                          <div className="form-amount">
                            <input
                              type="text"
                              className="form-control"
                              id="amount-two"
                              value={toSelected ? toSelected.amount : ""}
                              placeholder="Please enter 0 - 65"
                              disabled
                            />
                          </div>
                          <div className="cp-select-area">
                            <select className="form-control" id="currency-two">
                              {walletLists.map((item: any) => (
                                <option
                                  value={item.id}
                                  key={item.id}
                                  onClick={() => setToSelected(item)}
                                  selected={toSelected === item}
                                >
                                  {item.coin_type}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swap-area-middle">
                    <ul>
                      <li>
                        <span>Price</span>
                        <span id="rate">1 USD = 0.907 EUR</span>
                      </li>
                      <li>
                        <span>You will spend</span>
                        <span className="spend">2544960 USDT</span>
                      </li>
                    </ul>
                    <div className="message-box">
                      <p>Insufficient balance. Please fund your account.</p>
                    </div>
                  </div>
                  <div className="swap-area-bottom">
                    <button className="primary-btn-outline">Refresh</button>
                    <button className="primary-btn-outline">convart</button>
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
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/swap-history");
  return {
    props: {},
  };
};

export default SwapCoin;
