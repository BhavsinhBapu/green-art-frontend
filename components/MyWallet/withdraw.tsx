import useTranslation from "next-translate/useTranslation";
import React from "react";
import { copyTextById, formateZert } from "common";
import WalletGoogleAuth from "components/wallet/wallet-google-auth";
import { UserSettingsApi } from "service/settings";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { RootState } from "state/store";
import { useSelector } from "react-redux";
import { WalletWithdrawProcessApiAction } from "state/actions/wallet";

export const WithdrawComponent = ({ responseData, router }: any) => {
  const { t } = useTranslation("common");
  const { settings } = useSelector((state: RootState) => state.common);
  const [selectedNetwork, setSelectedNetwork] = React.useState(
    responseData?.data && responseData?.data[0]
  );
  const [withdrawalCredentials, setWithdrawalCredentials] = React.useState({
    wallet_id: responseData?.wallet?.id,
    code: "",
    address: "",
    amount: "",
    note: "withdrawal",
    network_type: selectedNetwork?.network_type ?? "",
  });
  const [errorMessage, setErrorMessage] = React.useState({
    status: false,
    message: "",
  });
  const [processing, setProcessing] = React.useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    WalletWithdrawProcessApiAction(withdrawalCredentials, setProcessing);
  };
  const CheckG2faEnabled = async () => {
    const { data } = await UserSettingsApi();
    const { user } = data;
    console.log(settings.two_factor_withdraw, "settings.two_factor_withdraw");
    if (user.google2fa !== 1 && parseInt(settings.two_factor_withdraw) === 1) {
      setErrorMessage({
        status: true,
        message: "Google 2FA is not enabled, Please enable Google 2FA fist",
      });
    }
  };
  React.useEffect(() => {
    if (responseData?.data && responseData?.data[0]) {
      setSelectedNetwork(responseData?.data[0]);
    }
  }, [responseData?.data[0]]);
  React.useEffect(() => {
    setWithdrawalCredentials({
      ...withdrawalCredentials,
      wallet_id: responseData?.wallet?.id,
    });

    CheckG2faEnabled();
  }, [responseData?.wallet?.id]);

  React.useEffect(() => {
    setWithdrawalCredentials({
      ...withdrawalCredentials,
      network_type: selectedNetwork?.network_type,
    });
  }, [selectedNetwork?.network_type]);

  return (
    <div className={`col-md-7`}>
      <div className="box-two single-box visible">
        <div className="section-wrapper">
          <Link href="/user/my-wallet">
            <div className="wallet-back">
              <IoIosArrowBack className="wallet-backIcon" size={25} />
              <a href="">{t("My Wallet")}</a>
            </div>
          </Link>
          <div className="withdrawal-info-area" id="withdrawal_wallet_area">
            <div className="withdrawal-info-top">
              <div className="balance-box">
                <img
                  className="icon"
                  src={responseData?.wallet?.coin_icon || "/bitcoin.png"}
                  alt="coin"
                />
                <div className="balance-content">
                  <h4>
                    {responseData?.wallet?.coin_type} {t("Balance")}
                  </h4>
                  <h5>
                    {responseData?.wallet?.coin_type} {t("Wallet")}
                  </h5>
                </div>
              </div>
              {/* <a
                href="#"
                className="close-btn"
                onClick={() => {
                  TurnoffSetShow();
                }}
              >
                <i className="fa fa-times" />
              </a> */}
            </div>
            <div className="withdrawal-form">
              <div className="avable-blance">
                <h4 className="avable-blance-title">
                  {t("AVAILABLE BALANCE")}
                </h4>
                <h2 className="blance">
                  {responseData?.wallet?.balance
                    ? formateZert(responseData?.wallet?.balance) +
                      " " +
                      responseData?.wallet?.coin_type
                    : "Loading..."}
                </h2>
              </div>
              <form>
                {responseData?.wallet.coin_type == "USDT" && (
                  <div className="total-balance">
                    <select
                      name="currency"
                      className="form-control"
                      onChange={(e) => {
                        const findObje = responseData?.data?.find(
                          (x: any) => x.id === parseInt(e.target.value)
                        );
                        setSelectedNetwork(findObje);
                      }}
                    >
                      {responseData?.data?.map((item: any, index: number) => (
                        <option value={item.id} key={index}>
                          {item?.network_name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
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
                        Fees
                        {parseFloat(
                          responseData?.wallet?.withdrawal_fees
                        ).toFixed(8)}{" "}
                        %
                      </span>
                      <span className="mr-2">
                        Min withdraw{" "}
                        {parseFloat(
                          responseData?.wallet?.minimum_withdrawal
                        ).toFixed(5)}
                        {responseData?.wallet?.coin_type}
                      </span>
                      <span className="mr-2">
                        Max withdraw{" "}
                        {parseFloat(responseData?.wallet?.maximum_withdrawal)}{" "}
                        {responseData?.wallet?.coin_type}
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
                {parseInt(settings.two_factor_withdraw) === 1 ? (
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
                    {t("Withdraw")}
                  </button>
                ) : (
                  <button
                    className="primary-btn-outline w-100"
                    type="button"
                    disabled={errorMessage.status === true}
                    onClick={handleSubmit}
                  >
                    {t("Withdraw")}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
