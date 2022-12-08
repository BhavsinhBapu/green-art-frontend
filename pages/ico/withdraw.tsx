import LaunchpadSidebar from "layout/launchpad-sidebar";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getTokenWithdrawPrice, withDrawMoney } from "service/launchpad";
import { getEarningDetailsAction } from "state/actions/launchpad";

const Withdraw = () => {
  const { t } = useTranslation("common");
  const [loading, setLoading]: any = useState<any>(false);
  const [data, setData]: any = useState<any>();
  const [amount, setamount]: any = useState<any>();
  const [amountInfo, setAmountInfo] = useState<any>();
  const [selectedCurrency, setSelectedCurrency] = useState<any>();
  const [currencyFiat, setCurrencyFiat]: any = useState<any>();
  const [currencyCoin, setCurrencyCoin]: any = useState<any>();
  const [currencyType, setCurrencyType]: any = useState<any>();
  const getTokenwithdrawPrice = async () => {
    if (amount && currencyType && selectedCurrency) {
      const payload = {
        amount,
        currency_type: currencyType,
        currency_to: selectedCurrency,
      };
      const response = await getTokenWithdrawPrice(payload);
      setAmountInfo(response.data);
    }
  };
  const withDrawMoneyApi = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (amount && currencyType && selectedCurrency) {
      const payload = {
        amount,
        currency_type: currencyType,
        currency_to: selectedCurrency,
      };
      const response = await withDrawMoney(payload);
      if (response.success === true) {
        toast.success(response.message);
      } else {
        response.error(response.message);
      }
    }
    setLoading(false);
  };
  // ;
  useEffect(() => {
    getTokenwithdrawPrice();
  }, [currencyType, amount, selectedCurrency]);
  useEffect(() => {
    getEarningDetailsAction(setLoading, setData);
  }, []);
  return (
    <div className="page-wrap rightMargin">
      <LaunchpadSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="overview-area">
              <div className="overview-left">
                <h2 className="section-top-title">{t("Withdraw")}</h2>
              </div>
            </div>
          </div>
          <div className="asset-balances-area cstm-loader-area">
            <div className="asset-balances-left">
              <div className="section-wrapper boxShadow">
                <div className="row">
                  <div className="col-md-4 boxShadow p-5 text-center">
                    <h1>
                      {data?.earns?.earn}
                      {data?.earns?.currency}
                    </h1>
                    <h3>{t("Total Earned")}</h3>
                  </div>
                  <div className="col-md-4 boxShadow p-5 text-center">
                    <h1>
                      {data?.earns?.withdraw}
                      {data?.earns?.currency}
                    </h1>
                    <h3>{t("Withdrawal Amount")}</h3>
                  </div>
                  <div className="col-md-4 boxShadow p-5 text-center">
                    <h1>
                      {data?.earns?.available}
                      {data?.earns?.currency}
                    </h1>
                    <h3>{t("Available Amount")}</h3>
                  </div>
                </div>
                <form onSubmit={withDrawMoneyApi}>
                  <div className="m-3 mt-5 row">
                    <div className="col-md-6 form-input-div">
                      <label className="ico-label-box" htmlFor="">
                        {t("Amount")}
                      </label>
                      <input
                        type="number"
                        name="amount"
                        required
                        value={amount}
                        onChange={(e) => {
                          setamount(e.target.value);
                        }}
                        className={`ico-input-box`}
                      />
                      {amountInfo && (
                        <p>
                          {amountInfo?.amount} {amountInfo?.currency_from} ={" "}
                          {amountInfo?.price} {amountInfo?.currency_to}
                        </p>
                      )}
                    </div>
                    <div className="col-md-6 form-input-div">
                      <label className="ico-label-box" htmlFor="">
                        {t("Currency Type")}
                      </label>
                      <select
                        name="coin_currency"
                        className={`ico-input-box`}
                        required
                        onChange={(e) => {
                          setCurrencyType(e.target.value);
                          if (e.target.value === "Fiat") {
                            setCurrencyFiat(data?.currencys);
                          } else {
                            setCurrencyCoin(data?.coins);
                          }
                        }}
                      >
                        <option value="">{t("Select Currency Type")}</option>
                        <option>{t("Fiat")}</option>
                        <option>{t("Crypto")}</option>
                      </select>
                    </div>
                    {currencyType === "Fiat" && (
                      <div className="col-md-6 form-input-div">
                        <label className="ico-label-box" htmlFor="">
                          {t("Currency List")}
                        </label>

                        <select
                          name="coin_currency"
                          className={`ico-input-box`}
                          required
                          onChange={(e) => {
                            setSelectedCurrency(e.target.value);
                          }}
                        >
                          <option value="">{t("Select currency")}</option>
                          {currencyFiat.map((item: any) => (
                            <option value={item.code}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {currencyType === "Crypto" && (
                      <div className="col-md-6 form-input-div">
                        <label className="ico-label-box" htmlFor="">
                          {t("Currency List")}
                        </label>

                        <select
                          name="coin_currency"
                          className={`ico-input-box`}
                          required
                          onChange={(e) => {
                            setSelectedCurrency(e.target.value);
                          }}
                        >
                          <option value="">{t("Select currency")}</option>
                          {currencyCoin?.map((item: any) => (
                            <option value={item.coin_type}>
                              {item.coin_type}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    <div className="col-md-12 form-input-div">
                      <button type="submit" className="primary-btn">
                        {loading ? t("Please Wait..") : t("Withdraw")}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
