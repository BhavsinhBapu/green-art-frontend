import React from "react";

const WirhdrawTab = ({ response, TurnoffSetShow }: any) => {
  return (
    <div className="asset-balances-right visible">
      <div className="box-one single-box">
        <div className="section-wrapper">
          <div className="deposit-info-area" id="wallet_deposit_area"></div>
        </div>
      </div>
      <div className="box-two single-box visible">
        <div className="section-wrapper">
          <div className="withdrawal-info-area" id="withdrawal_wallet_area">
            <div className="withdrawal-info-top">
              <div className="balance-box">
                <img className="icon" src="/bitcoin.png" alt="coin" />
                <div className="balance-content">
                  <h4>{response?.wallet?.coin_type} Balance</h4>
                  <h5>{response?.wallet?.coin_type} Wallet</h5>
                </div>
              </div>
              <a
                href="#"
                className="close-btn"
                onClick={() => {
                  TurnoffSetShow();
                }}
              >
                <i className="fa fa-times" />
              </a>
            </div>
            <div className="withdrawal-form">
              <div className="avable-blance">
                <h4 className="avable-blance-title">AVAILABLE BALANCE</h4>
                <h2 className="blance">
                  {response?.wallet?.balance} {response?.wallet?.coin_type}
                </h2>
                {/* <h4 className="blance-usd">
                  0.00000000 {response?.wallet?.coin_type}
                </h4> */}
              </div>
              <div className="form-group">
                <div className="withdrawal-limit">
                  {" "}
                  BTC daily withdrawal limit.
                </div>
              </div>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Address"
                  />
                </div>
                <div className="form-group">
                  <div className="amount-wrap">
                    <input
                      type="text"
                      className="form-control"
                      id="amountWithdrawal"
                      name="amount"
                      placeholder="AMOUNT TO WITHDRAW"
                    />
                    <small>
                      <span className="mr-2">
                        Fees{response?.wallet?.withdrawal_fees} %
                      </span>
                      <span className="mr-2">
                        Min withdraw {response?.wallet?.minimum_withdrawal} %
                      </span>
                      <span className="mr-2">
                        Max withdraw {response?.wallet?.maximum_withdrawal} %
                      </span>
                    </small>
                    <input
                      id="withdrawalFees"
                      type="hidden"
                      value="0.00000010"
                    />
                  </div>
                </div>
                <input type="hidden" name="wallet_id" value="19" />
                <button type="button" className="withdraw-btn">
                  Withdraw
                </button>

                <div
                  className="modal fade"
                  id="g2fcheck"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Google Authentication
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-12">
                            <p>
                              Open your Google Authenticator app and enter the
                              6-digit code from the app into the input field to
                              remove the google secret key
                            </p>
                            <input
                              placeholder="Code"
                              type="text"
                              className="form-control"
                              name="code"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Verify
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WirhdrawTab;
