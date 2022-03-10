import React from "react";
import Qr from "components/common/qr";

const DepositTab = ({ response, TurnoffSetShow }: any) => {
  return (
    <div className={`asset-balances-right visible`}>
      <div className={`box-one single-box visible`}>
        <div className="section-wrapper">
          <div className="deposit-info-area" id="wallet_deposit_area">
            <div className="deposit-info-top">
              <div className="balance-box">
                <img className="icon" src="/bitcoin.png" alt="coin" />
                <div className="balance-content">
                  <h4>{response?.deposit?.coin_type} Balance</h4>
                  <h5>{response?.deposit?.coin_type} Wallet</h5>
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
            <div className="total-balance">
              <div className="total-balance-left">
                <h3>Total Balance</h3>
              </div>
              <div className="total-balance-right">
                <h3>
                  {response?.deposit?.balance}
                  {response?.deposit?.coin_type}
                </h3>
                <h4>0.00000000 USD</h4>
              </div>
            </div>

            <div className="address-area">
              <h3>Address</h3>
              <p>
                Only send BCH to this address. Sending any other asset to this
                address may result in the loss of your deposit!
              </p>
              <div className="input-url">
                <input
                  type="url"
                  className="form-control"
                  id="url"
                  defaultValue={response?.address}
                  readOnly
                />
                <button type="button" className="btn copy-url-btn">
                  <i className="fa fa-clone" />
                </button>
              </div>
              <div className="bar-code-area">
                {response?.address && <Qr value={response?.address} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositTab;
