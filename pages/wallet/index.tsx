import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
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
                <h4 className="blance">balance</h4>
              </div>
            </div>
          </div>
          <h4 className="section-title-medium">Asset Balances</h4>
          <div className="asset-balances-area">
            <div className="asset-balances-left">
              <div className="section-wrapper">
                <div className="table-responsive">
                  <table
                    id="assetBalances"
                    className="table table-borderless secendary-table asset-balances-table"
                  >
                    <thead>
                      <tr>
                        <th scope="col">Asset</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">On Order</th>
                        <th scope="col">Available Balance</th>
                        <th scope="col">Total Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="{{$wallet->id}}">
                        <td>
                          <div className="asset">
                            <img
                              className="asset-icon"
                              src="{{get_coin_icon($wallet->coin_icon)}}"
                              alt=""
                            />
                            <span className="asset-name">asdsad</span>
                          </div>
                        </td>
                        <td>
                          <span className="symbol">sadas</span>
                        </td>
                        <td>
                          <div className="blance-text">
                            <span className="blance market incree">sadasd</span>
                            <span className="usd">$asmdkasm</span>
                          </div>
                        </td>
                        <td>
                          <div className="blance-text">
                            <span className="blance">3</span>
                            <span className="usd">sdasd</span>
                          </div>
                        </td>
                        <td>
                          <div className="blance-text">
                            <span className="blance">asdnsajdn</span>
                            <span className="usd">dasdasd</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="asset-balances-right">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
