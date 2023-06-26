import { formateZert } from "common";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import {
  initialDashboardCallAction,
  buyMarketAppAction,
  getDashboardData,
} from "state/actions/exchange";

const Market = ({
  dashboard,
  OpenCloseMarketCoinData,
  setOpenCloseMarketCoinData,
  isLoggedIn,
  currentPair,
}: any) => {
  const { t } = useTranslation("common");
  const [loading, setLoading] = React.useState(false);
  const [tpSlchecked, setChecked] = React.useState(false);

  const dispatch = useDispatch();
  const setAmountBasedOnPercentage = (percentage: any) => {
    const { maker_fees, taker_fees } = dashboard.fees_settings;
    const amount =
      parseFloat(dashboard?.order_data?.total?.base_wallet?.balance) /
      parseFloat(OpenCloseMarketCoinData.price);
    const feesPercentage =
      parseFloat(maker_fees) > parseFloat(taker_fees)
        ? parseFloat(maker_fees)
        : parseFloat(taker_fees);
    const total =
      amount * percentage * parseFloat(OpenCloseMarketCoinData.price);
    const fees = (total * feesPercentage) / 100;
    setOpenCloseMarketCoinData({
      ...OpenCloseMarketCoinData,
      amount: (total - fees) / parseFloat(OpenCloseMarketCoinData.price),
      total: total - fees,
    });
  };
  return (
    <div id="BuyTabContent" className="tab-content">
      <div
        id="imit"
        role="tabpanel"
        aria-labelledby="Limit-tab"
        className="tab-pane fade show active"
      >
        <div className="row">
          <div className="col-md-12">
            <div className="cp-user-profile-info">
              <form id="buy-form">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                />
                <div className="form-group ">
                  <div className="total-top-blance">
                    <div className="total-blance">
                      <div className="total-blance">
                        <label>{t("Available")}</label>
                      </div>
                    </div>
                    <div className="avilable-blance">
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span>
                          {" "}
                          {parseFloat(
                            dashboard?.order_data?.total?.base_wallet?.balance
                              ? dashboard?.order_data?.total?.base_wallet
                                  ?.balance
                              : 0
                          ).toFixed(4)}
                        </span>
                      </span>
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span className="base_coin_type">
                          {" "}
                          {dashboard?.order_data?.total?.base_wallet?.coin_type}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3 boxShadow">
                  <label className="cstmHead">{t("Size")}</label>
                  <input
                    name="amount"
                    type="number"
                    placeholder="0"
                    className="form-control number_only"
                    value={
                      OpenCloseMarketCoinData?.amount !== 0 &&
                      OpenCloseMarketCoinData?.amount
                    }
                    onChange={(e) => {
                      setOpenCloseMarketCoinData({
                        ...OpenCloseMarketCoinData,
                        amount: e.target.value,
                        total:
                          parseFloat(e.target.value) *
                          OpenCloseMarketCoinData.price,
                      });
                    }}
                  />
                  <span
                    className="text-warning blns"
                    style={{ fontWeight: 700 }}
                  >
                    <span className="trade_coin_type">
                      {dashboard?.order_data?.total?.trade_wallet?.coin_type}
                    </span>
                  </span>
                </div>
                <div className="total-top">
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={(e) => {
                        setChecked(e.target.checked);
                      }}
                    />
                    TP/SL
                  </label>{" "}
                  <label>Advance %</label>
                </div>
                {tpSlchecked === true && (
                  <div>
                    <div className="form-group boxShadow">
                      <label className="cstmHead">Take Profit</label>
                      <input
                        name="price"
                        type="number"
                        placeholder=""
                        className="form-control number_only input_1"
                        value=""
                      />
                      {/* make a select here */}
                      <select
                        name=""
                        className="form-control border-0 swapSelect"
                        id=""
                      >
                        <option value="">Mark</option>
                        <option value="">Last</option>
                      </select>
                    </div>
                    <div className="form-group boxShadow">
                      <label className="cstmHead">Stop Loss</label>
                      <input
                        name="price"
                        type="number"
                        placeholder=""
                        className="form-control number_only input_1"
                        value=""
                      />

                      <select
                        name=""
                        className="form-control border-0 swapSelect"
                        id=""
                      >
                        <option value="">Mark</option>
                        <option value="">Last</option>
                      </select>
                    </div>
                  </div>
                )}

                {isLoggedIn && (
                  <div className=" mt-3 percent-container ">
                    <span
                      className=" percent-btn col-3"
                      onClick={() => setAmountBasedOnPercentage(0.25)}
                    >
                      {t("25%")}
                    </span>
                    <span
                      className=" percent-btn col-3"
                      onClick={() => setAmountBasedOnPercentage(0.5)}
                    >
                      {t("50%")}
                    </span>
                    <span
                      className=" percent-btn col-3"
                      onClick={() => setAmountBasedOnPercentage(0.75)}
                    >
                      {t("75%")}
                    </span>
                    <span
                      className=" percent-btn col-3"
                      onClick={() => setAmountBasedOnPercentage(1)}
                    >
                      {t("100%")}
                    </span>
                  </div>
                )}
                {!isLoggedIn ? (
                  <div className="form-group mt-4">
                    <Link href="/signin">
                      <a className="btn theme-btn-red">{t("Login")}</a>
                    </Link>
                  </div>
                ) : loading ? (
                  <div className="form-group mt-4">
                    <button type="submit" className="btn theme-btn">
                      <span v-if="limitBuyData.placingOrder">
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        {t("Placing Order")}...
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="button-section-future">
                    <button
                      type="submit"
                      className="btn theme-btn-future"
                      onClick={async (e) => {
                        e.preventDefault();
                        await buyMarketAppAction(
                          OpenCloseMarketCoinData.amount,
                          OpenCloseMarketCoinData?.price,
                          dashboard?.order_data?.trade_coin_id,
                          dashboard?.order_data?.base_coin_id,
                          setLoading
                        );
                        // await dispatch(getDashboardData(currentPair));
                        setOpenCloseMarketCoinData({
                          ...OpenCloseMarketCoinData,
                          amount: 0,
                          total: 0,
                        });
                      }}
                    >
                      <span>
                        {" "}
                        {t("Buy")}{" "}
                        {dashboard?.order_data?.total?.trade_wallet?.coin_type}
                      </span>
                    </button>
                    <button type="submit" className="btn theme-btn-red-future">
                      <span v-else="">{t("open short")}</span>
                    </button>
                  </div>
                )}
                <div className="future-balance-container mt-3">
                  <div>
                    <label>Cost</label>
                    <span className="text-warning ml-1">
                      55 {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </div>
                  <div>
                    <label>Cost</label>
                    <span className="text-warning ml-1">
                      886.53{" "}
                      {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </div>
                </div>

                <div className="future-balance-container">
                  <div>
                    <label>Max</label>
                    <span className="text-warning ml-1">
                      55 {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </div>
                  <div>
                    <label>Max</label>
                    <span className="text-warning ml-1">
                      886.53{" "}
                      {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Market"
        role="tabpanel"
        aria-labelledby="Market-tab"
        className="tab-pane fade"
      >
        <div className="row">
          <div className="col-md-12">
            <div className="cp-user-profile-info">
              <form id="buy-form" className="mt-4">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                />
                <div className="form-group mt-4">
                  <div className="total-top">
                    <label>{t("Total")}</label> <label>{t("Available")}</label>
                  </div>
                  <div className="total-top-blance">
                    <div className="total-blance">
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span>0</span>
                      </span>
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span className="base_coin_type">
                          {" "}
                          {dashboard?.order_data?.total?.base_wallet?.coin_type}
                        </span>
                      </span>
                    </div>
                    <div className="avilable-blance">
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span>0</span>
                      </span>
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span className="base_coin_type">
                          {" "}
                          {dashboard?.order_data?.total?.base_wallet?.coin_type}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label>{t("Price")}</label>
                  <p className="form-control">Market</p>
                  <span
                    className="text-warning blns"
                    style={{ fontWeight: 700 }}
                  >
                    <span className="base_coin_type">
                      {" "}
                      {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Amount</label>
                  <input
                    name="amount"
                    type="text"
                    placeholder=""
                    className="form-control number_only"
                  />
                  <span
                    className="text-warning blns"
                    style={{ fontWeight: 700 }}
                  >
                    <span className="trade_coin_type">
                      {dashboard?.order_data?.total?.trade_wallet?.coin_type}
                    </span>
                  </span>
                </div>
                <div className="form-group mt-4">
                  <a className="btn theme-btn-red"> {t("Login")}</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Stop-limit"
        role="tabpanel"
        aria-labelledby="Stop-limit-tab"
        className="tab-pane fade"
      >
        <div className="row">
          <div className="col-md-12">
            <div className="cp-user-profile-info">
              <form id="stop-limit-form" className="mt-4">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                />
                <div className="form-group mt-4">
                  <div className="total-top">
                    <label>{t("Total")}</label> <label>{t("Available")}</label>
                  </div>
                  <div className="total-top-blance">
                    <div className="total-blance">
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span>0</span>
                      </span>
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span className="base_coin_type">
                          {" "}
                          {dashboard?.order_data?.total?.base_wallet?.coin_type}
                        </span>
                      </span>
                    </div>
                    <div className="avilable-blance">
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span>0</span>
                      </span>
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span className="base_coin_type">
                          {" "}
                          {dashboard?.order_data?.total?.base_wallet?.coin_type}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label>{t("Stop")}</label>
                  <input
                    name="stop"
                    type="text"
                    placeholder=""
                    className="form-control number_only"
                  />
                  <span
                    className="text-warning blns"
                    style={{ fontWeight: 700 }}
                  >
                    <span className="base_coin_type">
                      {" "}
                      {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>{t("Limit")}</label>
                  <input
                    name="limit"
                    type="text"
                    placeholder=""
                    className="form-control number_only"
                  />
                  <span
                    className="text-warning blns"
                    style={{ fontWeight: 700 }}
                  >
                    <span className="base_coin_type">
                      {" "}
                      {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>{t("Amount")}</label>
                  <input
                    name="amount"
                    type="text"
                    placeholder=""
                    className="form-control number_only"
                  />
                  <span
                    className="text-warning blns"
                    style={{ fontWeight: 700 }}
                  >
                    <span className="trade_coin_type">
                      {dashboard?.order_data?.total?.trade_wallet?.coin_type}
                    </span>
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>{t("Total Amount")}</label>
                  <input
                    // disabled
                    name="total_amount"
                    type="text"
                    placeholder=""
                    className="form-control number_only"
                  />
                  <span
                    className="text-warning blns"
                    style={{ fontWeight: 700 }}
                  >
                    <span className="base_coin_type">
                      {" "}
                      {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </span>
                </div>
                <div className="form-group mt-4 d-flex justify-content-between flex-wrap">
                  <a className="btn theme-btn-red"> {t("Login")}</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
