import BankDeposit from "components/deposit/bank-deposit";
import WalletDeposit from "components/deposit/wallet-deposit";
import StripeDeposit from "components/deposit/stripe-deposit";
import { BANK_DEPOSIT, STRIPE, WALLET_DEPOSIT } from "helpers/core-constants";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { currencyDeposit } from "service/deposit";

const deposit = () => {
  const { t } = useTranslation("common");
  const [selectedMethod, setSelectedMethod] = useState<any>({
    method: null,
    method_id: null,
  });
  const [depositInfo, setDepositInfo] = useState<any>();
  const getDepositInfo = async () => {
    const response = await currencyDeposit();
    setDepositInfo(response.data);
    console.log(response.data, "response.data");
    setSelectedMethod({
      method:
        response?.data?.payment_methods[0] &&
        response?.data?.payment_methods[0].payment_method,
      method_id:
        response?.data?.payment_methods[0] &&
        response?.data?.payment_methods[0].id,
    });
  };
  useEffect(() => {
    getDepositInfo();
  }, []);
  return (
    <div>
      <div className="container mb-3">
        <h2 className="mb-2">{t("Deposit Fiat")}</h2>
      </div>
      <div className="container">
        <div className="deposit-conatiner">
          <div className="cp-user-title">
            <h4>{t("Select method")}</h4>
          </div>
          <select
            name="method"
            className="form-control mt-2 "
            onChange={(e: any) => {
              setSelectedMethod({
                method: e.target.value,
                method_id: depositInfo?.payment_methods.find(
                  (info: any) =>
                    parseInt(info.payment_method) === parseInt(e.target.value)
                ).id,
              });
            }}
          >
            {depositInfo?.payment_methods.map((payment: any) => (
              <option value={payment.payment_method}>{payment.title}</option>
            ))}
          </select>
          {parseInt(selectedMethod.method) === WALLET_DEPOSIT ? (
            <WalletDeposit
              walletlist={depositInfo.wallet_list}
              method_id={selectedMethod.method_id}
            />
          ) : parseInt(selectedMethod.method) === BANK_DEPOSIT ? (
            <BankDeposit
              currencyList={depositInfo.currency_list}
              walletlist={depositInfo.wallet_list}
              method_id={selectedMethod.method_id}
              banks={depositInfo.banks}
            />
          ) : parseInt(selectedMethod.method) === STRIPE ? (
            <StripeDeposit
              currencyList={depositInfo.currency_list}
              walletlist={depositInfo.wallet_list}
              method_id={selectedMethod.method_id}
              banks={depositInfo.banks}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default deposit;
