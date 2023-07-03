import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store";
import Limit from "./buy/limit";
import Market from "./buy/market";
import SellLimit from "./sell/limit";
import SellMarket from "./sell/market";
import useTranslation from "next-translate/useTranslation";
import Leverage from "../Modals/leverage";
import Isolated from "../Modals/isolated";
import {
  AMOUNT_TYPE_BASE,
  ISOLATED,
  LIMIT_ORDER,
  MARGIN_MODE_ISOLATED,
  MARKET_ORDER,
} from "helpers/core-constants";
import { preplaceOrderDataAction } from "state/actions/futureTrade";

const ExchangeBox = () => {
  type trade_type = number;
  const { t } = useTranslation("common");
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const [leverage, setLeverage] = useState(20);
  const [isolated, setIsolated] = useState(ISOLATED);

  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.exchange
  );
  const [trade_type, setTrade_type] = useState<trade_type>(AMOUNT_TYPE_BASE);
  const [OpenCloseLimitCoinData, setOpenCloseLimitCoinData] = useState<any>({
    // dashboard?.order_data?.sell_price
    price: 0,
    amount: 0,
    total: 0,
    margin_mode: MARGIN_MODE_ISOLATED,
    amount_type: AMOUNT_TYPE_BASE,
    take_profit: 0,
    leverage_amount: 0,
    stop_loss: 0,
  });
  const [OpenCloseMarketCoinData, setOpenCloseMarketCoinData] = useState<any>({
    // dashboard?.order_data?.sell_price
    price: 0,
    amount: 0,
    total: 0,
    margin_mode: MARGIN_MODE_ISOLATED,
    amount_type: AMOUNT_TYPE_BASE,
    take_profit: 0,
    leverage_amount: 0,
    stop_loss: 0,
  });

  const [openSelectedTab, setopenSelectedTab] = useState<number>(1);
  const [closeSelectedTab, setcloseSelectedTab] = useState<number>(1);

  const handletrade_type = (tab: number) => {
    setTrade_type(tab);
  };
  const dispatch = useDispatch();
  const openLong = async () => {
    await dispatch(
      preplaceOrderDataAction(
        trade_type,
        OpenCloseLimitCoinData.margin_mode,
        trade_type,
        OpenCloseLimitCoinData.price,
        OpenCloseLimitCoinData.amount_type,
        OpenCloseLimitCoinData.amount,
        OpenCloseLimitCoinData.take_profit,
        OpenCloseLimitCoinData.stop_loss,
        OpenCloseLimitCoinData.leverage_amount
      )
    );
  };
  const initialSetUp = () => {
    setOpenCloseLimitCoinData({
      // price:
      //   trade_type === 1
      //     ? dashboard?.order_data?.sell_price
      //     : dashboard?.order_data?.buy_price,
      price: 0,
      amount: 0,
      total_profit: 0,
      total_loss: 0,
    });
    setOpenCloseMarketCoinData({
      // price:
      //   trade_type === 1
      //     ? dashboard?.order_data?.sell_price
      //     : dashboard?.order_data?.buy_price,
      price: 0,
      amount: 0,
      total_profit: 0,
      total_loss: 0,
    });
  };

  useEffect(() => {
    initialSetUp();
  }, [currentPair, dashboard, trade_type]);

  return (
    <div className="exchange-box order-box">
      <div className="trades-headers">
        <ul
          id="pills-tab"
          role="tablist"
          className="nav nav-pills transfer-tabs"
        >
          <li
            role="presentation"
            className="nav-item"
            onClick={() => {
              initialSetUp();
              handletrade_type(LIMIT_ORDER);
            }}
          >
            <a
              id="pills-transfer-1-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="pills-transfer-1"
              aria-selected="true"
              className={`nav-link ${trade_type === 1 ? "active" : ""}`}
            >
              {t("Open")}
            </a>
          </li>
          <li
            role="presentation"
            className="nav-item"
            onClick={() => {
              initialSetUp();
              handletrade_type(MARKET_ORDER);
            }}
          >
            <a
              id="pills-transfer-2-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="pills-transfer-2"
              aria-selected="false"
              className={`nav-link ${trade_type === 2 ? "activeSell" : ""}`}
            >
              {t("Close")}
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Isolated isolated={isolated} setIsolated={setIsolated} />
        <Leverage leverage={leverage} setLeverage={setLeverage} />
      </div>
      <div id="pills-tabContent" className="tab-content">
        <div
          id="pills-transfer-1"
          role="tabpanel"
          aria-labelledby="pills-transfer-1-tab"
          className={`tab-pane fade show ${trade_type === 1 && "active"} `}
        >
          <ul
            id="BuyTab"
            role="tablist"
            className="nav nav-tabs inner-tabs-menu"
          >
            <li role="presentation" className="nav-item">
              <a
                id="Limit-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="Limit"
                aria-selected="true"
                className="nav-link active"
                onClick={() => {
                  setopenSelectedTab(1);
                }}
              >
                {t("Limit")}
              </a>
            </li>
            <li role="presentation" className="nav-item">
              <a
                id="Market-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="Market"
                aria-selected="false"
                className="nav-link"
                onClick={() => {
                  setopenSelectedTab(2);
                }}
              >
                {t("Market")}
              </a>
            </li>
          </ul>
          {openSelectedTab === 1 && (
            <Limit
              dashboard={dashboard}
              OpenCloseLimitCoinData={OpenCloseLimitCoinData}
              setOpenCloseLimitCoinData={setOpenCloseLimitCoinData}
              isLoggedIn={isLoggedIn}
              currentPair={currentPair}
              openLong={openLong}
            />
          )}
          {openSelectedTab === 2 && (
            <Market
              dashboard={dashboard}
              OpenCloseMarketCoinData={OpenCloseMarketCoinData}
              setOpenCloseMarketCoinData={setOpenCloseMarketCoinData}
              isLoggedIn={isLoggedIn}
              currentPair={currentPair}
            />
          )}
        </div>
        <div
          id="pills-transfer-2"
          role="tabpanel"
          aria-labelledby="pills-transfer-2-tab"
          className={`tab-pane fade show ${trade_type === 2 && "active"} `}
        >
          <ul
            id="SellTab"
            role="tablist"
            className="nav nav-tabs inner-tabs-menu"
          >
            <li
              role="presentation"
              className="nav-item sellBox"
              onClick={() => {
                setcloseSelectedTab(1);
              }}
            >
              <a
                id="sell-Limit-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="LimitSell"
                aria-selected="true"
                className="nav-link active"
              >
                {t("Limit")}
              </a>
            </li>
            <li
              role="presentation"
              className="nav-item sellBox"
              onClick={() => {
                setcloseSelectedTab(2);
              }}
            >
              <a
                id="sell-Market-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="MarketSell"
                aria-selected="false"
                className="nav-link"
              >
                {t("Market")}
              </a>
            </li>
          </ul>
          {closeSelectedTab === 1 && (
            <SellLimit
              dashboard={dashboard}
              OpenCloseMarketCoinData={OpenCloseMarketCoinData}
              setOpenCloseLimitCoinData={setOpenCloseLimitCoinData}
              isLoggedIn={isLoggedIn}
              currentPair={currentPair}
            />
          )}
          {closeSelectedTab === 2 && (
            <SellMarket
              dashboard={dashboard}
              OpenCloseMarketCoinData={OpenCloseMarketCoinData}
              setOpenCloseMarketCoinData={setOpenCloseMarketCoinData}
              isLoggedIn={isLoggedIn}
              currentPair={currentPair}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ExchangeBox;
