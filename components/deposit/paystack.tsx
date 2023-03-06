import useTranslation from "next-translate/useTranslation";
import React from "react";

const Paystack = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="cp-user-title mt-5 mb-4">
        <h4>{t("Deposit With Paypal")}</h4>
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
                      <span className="available">{t("Currency(USD)")}</span>
                    </div>
                    <div className="swap-input-wrap">
                      <div className="form-amount">
                        <input
                          type="number"
                          className="form-control border-0"
                          id="amount-one"
                          placeholder={t("Please enter 1-2400000")}
                          onChange={(e) => {}}
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
                      {/* <label>{t("Converted amount")}</label> */}
                      <span className="available">
                        {t("Enter Email address")}
                      </span>
                    </div>
                    <div className="swap-input-wrap">
                      <div className="form-amount">
                        <input
                          type="number"
                          className="form-control border-0"
                          id="amount-one"
                          disabled
                          placeholder={t("Please enter 10 -2400000")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swap-wrap mt-3">
                    <div className="swap-wrap-top">
                      {/* <label>{t("Converted amount")}</label> */}
                      <span className="available">
                        {t("Enter your amount")}
                      </span>
                    </div>
                    <div className="swap-input-wrap">
                      <div className="form-amount">
                        <input
                          type="number"
                          className="form-control border-0"
                          id="amount-one"
                          disabled
                          placeholder={t("Enter your amount")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-12 mb-3 w-100">
          <button
            className="primary-btn-outline w-100"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={convertCurrency}
          >
            Deposit
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Paystack;
