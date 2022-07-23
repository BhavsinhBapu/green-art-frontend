import React from "react";
import WalletGoogleAuth from "components/wallet/wallet-google-auth";
import { UserSettingsApi } from "service/settings";
import { formateZert } from "common";

const WirhdrawTab = ({ response, TurnoffSetShow }: any) => {
  const [withdrawalCredentials, setWithdrawalCredentials] = React.useState({
    wallet_id: "",
    code: "",
    address: "",
    amount: "",
    note: "withdrawal",
  });
  const [errorMessage, setErrorMessage] = React.useState({
    status: false,
    message: "",
  });
  const CheckG2faEnabled = async () => {
    const { data } = await UserSettingsApi();
    const { user } = data;
    if (user.google2fa === 1) {
    } else {
      setErrorMessage({
        status: true,
        message: "Google 2FA is not enabled",
      });
    }
  };
  React.useEffect(() => {
    setWithdrawalCredentials({
      ...withdrawalCredentials,
      wallet_id: response?.wallet?.id,
    });
    CheckG2faEnabled();
  }, [response]);

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
                  {formateZert(response?.wallet?.balance)}{" "}
                  {response?.wallet?.coin_type}
                </h2>
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
                    value={withdrawalCredentials.address}
                    onChange={(e) => {
                      setWithdrawalCredentials({
                        ...withdrawalCredentials,
                        address: e.target.value,
                      });
                    }}
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
                      value={withdrawalCredentials.amount}
                      onChange={(e) => {
                        setWithdrawalCredentials({
                          ...withdrawalCredentials,
                          amount: e.target.value,
                        });
                      }}
                    />
                    <small>
                      <span className="mr-2">
                        Fees{response?.wallet?.withdrawal_fees} %
                      </span>
                      <span className="mr-2">
                        Min withdraw {response?.wallet?.minimum_withdrawal}
                        {response?.wallet?.coin_type}
                      </span>
                      <span className="mr-2">
                        Max withdraw {response?.wallet?.maximum_withdrawal}{" "}
                        {response?.wallet?.coin_type}
                      </span>
                    </small>
                  </div>
                </div>
                <WalletGoogleAuth
                  withdrawalCredentials={withdrawalCredentials}
                  setWithdrawalCredentials={setWithdrawalCredentials}
                />
                <input type="hidden" name="wallet_id" value="19" />
                {errorMessage.status && (
                  <div className="alert alert-danger">
                    {errorMessage.message}
                  </div>
                )}

                <button
                  type="button"
                  className="withdraw-btn"
                  data-target="#exampleModal"
                  disabled={
                    withdrawalCredentials.address === "" ||
                    withdrawalCredentials.amount === "" ||
                    errorMessage.status === true
                  }
                  data-toggle="modal"
                  onClick={() => {
                    setErrorMessage({
                      status: false,
                      message: "",
                    });
                  }}
                >
                  Withdraw
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WirhdrawTab;
