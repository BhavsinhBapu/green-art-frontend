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
import { submitFiatWalletDepositApi } from "service/fiat-wallet";

const infoList = [
  "Login to your Perfect Money account.",
  "Click the Settings Tab.",
  'Click the "Change Security Settings" link under the Security section.',
  'On the page that appears, click the "Enable" button on the API section.',
  'And then click the "Edit" button below this API section.',
  "A form will appear with a field for IP.",
  'Enter this IP 123.45.67.89 in that field and click the "Save" button.',
];
const FiatPerfectMoney = ({ method_id, currency_type }: any) => {
  const { t } = useTranslation("common");

  const [errorMessage, setErrorMessage] = React.useState({
    status: false,
    message: "",
  });

  const [credential, setCredential] = useState<any>({
    payment_method_id: method_id,
    amount: 0,
    currency: currency_type,
    account_id: "",
    account_password: "",
    payer_id: "",
  });
  const router = useRouter();
  const convertCurrency = async (credential: any) => {
    if (
      credential.payment_method_id &&
      credential.amount &&
      credential.currency &&
      credential.account_id &&
      credential.account_password &&
      credential.payer_id
    ) {
      const formData: any = new FormData();
      formData.append("payment_method_id", credential.payment_method_id);
      formData.append("amount", credential.amount);
      formData.append("currency", credential.currency);
      formData.append("account_id", credential.account_id);
      formData.append("account_password", credential.account_password);
      formData.append("payer_id", credential.payer_id);

      const res = await submitFiatWalletDepositApi(formData);
      if (res.success) {
        toast.success(res.message);
        router.push("/user/wallet-history?type=deposit");
      } else {
        toast.error(res.message);
      }
    } else {
      toast.error(t("Please provide all information's"));
    }
  };
  return (
    <div>
      <div className="cp-user-title mt-5 mb-4">
        <h4>{t("Perfect Money")}</h4>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-12">
              <div className="">
                <div className="swap-area">
                  <div className="swap-area-top">
                    <div className="form-group">
                      <div className="swap-wrap">
                        <div className="swap-wrap-top">
                          <label>{t("Enter amount")}</label>
                          <span className="available">
                            {t("Select currency")}
                          </span>
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
                            <input
                              type="text"
                              className="form-control border-0"
                              value={currency_type}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
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
            <div className="col-lg-6">
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
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="bg-main-clr p-3">
            {infoList.map((item, index) => (
              <div
                className="py-1 d-flex gap-10 align-items-center"
                key={index}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="perfect-money-svg"
                  >
                    <path
                      d="M12.24 8L8 12.24l4.24 4.24 4.24-4.24L12.24 8zm-1.41 4.24l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiatPerfectMoney;
