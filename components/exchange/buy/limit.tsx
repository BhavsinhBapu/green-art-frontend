import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import {
  buyLimitAppAction,
  initialDashboardCallAction,
  initialDashboardCallActionWithToken,
} from "state/actions/exchange";

const Limit = ({
  dashboard,
  buySellLimitCoinData,
  setBuySellLimitCoinData,
  isLoggedIn,
  currentPair,
}: any) => {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
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
                  <div className="total-top">
                    <label>Total</label> <label>Available</label>
                  </div>
                  <div className="total-top-blance">
                    <div className="total-blance">
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span>
                          {dashboard?.order_data?.total?.base_wallet?.balance}
                        </span>
                      </span>
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span className="trade_coin_type">
                          {dashboard?.order_data?.total?.base_wallet?.coin_type}
                        </span>
                      </span>
                    </div>
                    <div className="avilable-blance">
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span>
                          {" "}
                          {dashboard?.order_data?.total?.base_wallet?.balance}
                        </span>
                      </span>
                      <span
                        className="text-warning"
                        style={{ fontWeight: 700 }}
                      >
                        <span className="trade_coin_type">
                          {dashboard?.order_data?.total?.base_wallet?.coin_type}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label>Price</label>
                  <input
                    name="price"
                    type="text"
                    placeholder=""
                    className="form-control number_only"
                    value={buySellLimitCoinData.price}
                    onChange={(e) => {
                      setBuySellLimitCoinData({
                        ...buySellLimitCoinData,
                        price: e.target.value,
                        total:
                          parseInt(e.target.value) *
                          buySellLimitCoinData.amount,
                      });
                    }}
                  />
                  <span
                    className="text-warning blns"
                    style={{ fontWeight: 700 }}
                  >
                    <span className="trade_coin_type">
                      {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Amount</label>
                  <input
                    name="amount"
                    type="number"
                    placeholder=""
                    className="form-control number_only"
                    value={buySellLimitCoinData.amount}
                    onChange={(e) => {
                      setBuySellLimitCoinData({
                        ...buySellLimitCoinData,
                        amount: e.target.value,
                        total:
                          parseInt(e.target.value) * buySellLimitCoinData.price,
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
                <div className="form-group mt-3">
                  <label>Total Amount</label>
                  <input
                    disabled
                    name="total_amount"
                    type="text"
                    placeholder=""
                    className="form-control number_only"
                    value={buySellLimitCoinData.total}
                  />
                  <span
                    className="text-warning blns"
                    style={{ fontWeight: 700 }}
                  >
                    <span className="trade_coin_type">
                      {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </span>
                </div>
                {!isLoggedIn ? (
                  <div className="form-group mt-4">
                    <Link href="/authentication/signin">
                      <a className="btn btn-danger">Login</a>
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
                        Placing Order...
                      </span>
                      <span v-else="">Buy </span>
                    </button>
                  </div>
                ) : (
                  <div className="form-group mt-4">
                    <button
                      type="submit"
                      className="btn theme-btn"
                      onClick={async (e) => {
                        e.preventDefault();
                        await buyLimitAppAction(
                          buySellLimitCoinData.amount,
                          buySellLimitCoinData.price,
                          dashboard?.order_data?.trade_coin_id,
                          dashboard?.order_data?.base_coin_id,
                          setLoading,
                          setBuySellLimitCoinData
                        );
                        await dispatch(
                          initialDashboardCallAction(currentPair, dashboard)
                        );
                      }}
                    >
                      <span v-else="">Place Order</span>
                    </button>
                  </div>
                )}
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
                    <label>Total</label> <label>Available</label>
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
                        <span className="trade_coin_type">
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
                        <span className="trade_coin_type">
                          {dashboard?.order_data?.total?.base_wallet?.coin_type}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label>Price</label>
                  <p className="form-control">Market</p>
                  <span
                    className="text-warning blns"
                    style={{ fontWeight: 700 }}
                  >
                    <span className="trade_coin_type">
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
                      {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </span>
                </div>
                <div className="form-group mt-4">
                  <a className="btn btn-danger"> Login</a>
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
                    <label>Total</label> <label>Available</label>
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
                        <span className="trade_coin_type">
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
                        <span className="trade_coin_type">
                          {dashboard?.order_data?.total?.base_wallet?.coin_type}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label>Stop</label>
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
                    <span className="trade_coin_type">
                      {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Limit</label>
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
                    <span className="trade_coin_type">
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
                <div className="form-group mt-3">
                  <label>Total Amount</label>
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
                    <span className="trade_coin_type">
                      {dashboard?.order_data?.total?.base_wallet?.coin_type}
                    </span>
                  </span>
                </div>
                <div className="form-group mt-4 d-flex justify-content-between flex-wrap">
                  <a className="btn btn-danger"> Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Limit;
