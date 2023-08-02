import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { copyTextById } from "common";
import { useRef } from "react";

import {
  currencyDepositProcess,
  getCurrencyDepositRate,
} from "service/deposit";
import { toast } from "react-toastify";
import BankDetails from "./bankDetails";
import { useRouter } from "next/router";
import { UserSettingsApi } from "service/settings";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import DepositGoogleAuth from "./deposit-g2fa";
const PerfectMoney = ({ currencyList, walletlist, method_id, banks }: any) => {
  const { t } = useTranslation("common");
  const { settings } = useSelector((state: RootState) => state.common);

  const [calculatedValue, setCalculatedValue] = useState<any>({
    calculated_amount: 0,
    rate: 0,
  });

  const [errorMessage, setErrorMessage] = React.useState({
    status: false,
    message: "",
  });
  const CheckG2faEnabled = async () => {
    const { data } = await UserSettingsApi();
    const { user } = data;
    if (
      user.google2fa !== 1 &&
      parseInt(settings.currency_deposit_2fa_status) === 1
    ) {
      setErrorMessage({
        status: true,
        message: t("Google 2FA is not enabled, Please enable Google 2FA fist"),
      });
    }
  };
  const [credential, setCredential] = useState<any>({
    wallet_id: null,
    payment_method_id: method_id ? parseInt(method_id) : null,
    amount: 0,
    currency: null,
    code: "",
    account_id: "",
    account_password: "",
    payer_id: "",
  });
  const router = useRouter();
  const getCurrencyRate = async () => {
    if (
      credential.wallet_id &&
      credential.payment_method_id &&
      credential.amount
    ) {
      const response = await getCurrencyDepositRate(credential);
      setCalculatedValue(response.data);
    }
  };
  const convertCurrency = async (credential: any) => {
    if (
      credential.wallet_id &&
      credential.payment_method_id &&
      credential.amount &&
      credential.currency &&
      credential.account_id &&
      credential.account_password
    ) {
      const formData: any = new FormData();
      formData.append("wallet_id", credential.wallet_id);
      formData.append("payment_method_id", credential.payment_method_id);
      formData.append("amount", credential.amount);
      formData.append("currency", credential.currency);
      formData.append("account_id", credential.account_id);
      formData.append("account_password", credential.account_password);
      formData.append("payer_id", credential.payer_id);
     credential.code && formData.append("code", credential.code);

      const res = await currencyDepositProcess(formData);
      if (res.success) {
        toast.success(res.message);
        router.push("/user/currency-deposit-history");
      } else {
        toast.error(res.message);
      }
    } else {
      toast.error(t("Please provide all information's"));
    }
  };
  useEffect(() => {
    getCurrencyRate();
    CheckG2faEnabled();
  }, [credential]);
  return (
    <div>
      <div className="cp-user-title mt-5 mb-4">
        <h4>{t("Bank Deposit")}</h4>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="">
            <div className="swap-area">
              <div className="swap-area-top">
                <div className="form-group">
                  <div className="swap-wrap">
                    <div className="swap-wrap-top">
                      <label>{t("Enter amount")}</label>
                      <span className="available">{t("Select currency")}</span>
                    </div>
                    <div className="swap-input-wrap">
                      <div className="form-amount">
                        <input
                          type="number"
                          className="form-control border-0"
                          id="amount-one"
                          placeholder={t("Please enter 1 -2400000")}
                          onChange={(e) => {
                            setCredential({
                              ...credential,
                              amount: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="cp-select-area">
                        <select
                          className="form-control border-0 ticketFilterBg"
                          id="currency-one"
                          onChange={(e) => {
                            setCredential({
                              ...credential,
                              currency: e.target.value,
                            });
                          }}
                        >
                          <option value="" selected disabled hidden>
                            {t("Select one")}
                          </option>
                          {currencyList.map((currency: any, index: any) => (
                            <option value={currency.code} key={index}>
                              {currency.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="">
            <div className="swap-area">
              <div className="swap-area-top">
                <div className="form-group">
                  <div className="swap-wrap mt-3">
                    <div className="swap-wrap-top">
                      <label>{t("Converted amount")}</label>
                      <span className="available">{t("Select wallet")}</span>
                    </div>
                    <div className="swap-input-wrap">
                      <div className="form-amount">
                        <input
                          type="number"
                          className="form-control border-0"
                          id="amount-one"
                          disabled
                          value={calculatedValue.calculated_amount}
                          placeholder={t("Please enter 10 -2400000")}
                          onChange={(e) => {
                            setCredential({
                              ...credential,
                              amount: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="cp-select-area">
                        <select
                          className="form-control border-0 ticketFilterBg"
                          id="currency-one"
                          onChange={(e) => {
                            setCredential({
                              ...credential,
                              wallet_id: e.target.value,
                            });
                          }}
                        >
                          <option value="" selected disabled hidden>
                            {t("Select one")}
                          </option>
                          {walletlist.map((wallet: any, index: any) => (
                            <option value={wallet.id} key={index}>
                              {wallet.coin_type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="">
            <div className="swap-area">
              <div className="swap-area-top">
                <div className="form-group">
                  <div className="swap-wrap mt-3">
                    <div className="swap-wrap-top">
                      <label>{t("Account Id")}</label>
                    </div>
                    <div className="swap-input-wrap">
                      <div className="form-amount">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="amount-one"
                          value={credential.account_id}
                          placeholder={t("Please enter 10 -2400000")}
                          onChange={(e) => {
                            setCredential({
                              ...credential,
                              account_id: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="">
            <div className="swap-area">
              <div className="swap-area-top">
                <div className="form-group">
                  <div className="swap-wrap mt-3">
                    <div className="swap-wrap-top">
                      <label>{t("Account Password")}</label>
                    </div>
                    <div className="swap-input-wrap">
                      <div className="form-amount">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="amount-one"
                          value={credential.account_password}
                          placeholder={t("Account Password")}
                          onChange={(e) => {
                            setCredential({
                              ...credential,
                              account_password: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="">
            <div className="swap-area">
              <div className="swap-area-top">
                <div className="form-group">
                  <div className="swap-wrap mt-3">
                    <div className="swap-wrap-top">
                      <label>{t("Payer Id")}</label>
                    </div>
                    <div className="swap-input-wrap">
                      <div className="form-amount">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="amount-one"
                          value={credential.payer_id}
                          placeholder={t("Payer Id")}
                          onChange={(e) => {
                            setCredential({
                              ...credential,
                              payer_id: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 my-3">
          <DepositGoogleAuth
            convertCurrency={convertCurrency}
            credential={credential}
            setCredential={setCredential}
          />
          {errorMessage.status && (
            <div className="alert alert-danger">{errorMessage.message}</div>
          )}
          {parseInt(settings.currency_deposit_2fa_status) === 1 ? (
            <button
              className="primary-btn-outline w-100 mt-5"
              type="button"
              data-target="#exampleModal"
              disabled={errorMessage.status === true}
              data-toggle="modal"
            >
              {t("Deposit")}
            </button>
          ) : (
            <button
              className="primary-btn-outline w-100 mt-5"
              type="button"
              disabled={errorMessage.status === true}
              onClick={() => {
                convertCurrency(credential);
              }}
            >
              {t("Deposit")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerfectMoney;
