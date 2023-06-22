import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import Limit from "./buy/limit";
import Market from "./buy/market";
import SellLimit from "./sell/limit";
import SellMarket from "./sell/market";
import useTranslation from "next-translate/useTranslation";

const ExchangeBox = () => {
  type tradingTabType = number;
  const { t } = useTranslation("common");
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.exchange
  );
  const [tradingTab, setTradingTab] = useState<tradingTabType>(1);
  const [OpenCloseLimitCoinData, setOpenCloseLimitCoinData] = useState<any>({
    price: dashboard?.order_data?.sell_price,
    amount: 0.0,
    total: 0.0,
    total_profit: 0.0,
    total_loss: 0,
  });
  const [OpenCloseMarketCoinData, setOpenCloseMarketCoinData] = useState<any>({
    price: dashboard?.order_data?.sell_price,
    amount: 0.0,
    total: 0.0,
    total_profit: 0.0,
    total_loss: 0,
  });

  const [openSelectedTab, setopenSelectedTab] = useState<number>(1);
  const [closeSelectedTab, setcloseSelectedTab] = useState<number>(1);

  const handletradingTab = (tab: number) => {
    setTradingTab(tab);
  };
  const initialSetUp = () => {
    setOpenCloseLimitCoinData({
      price:
        tradingTab === 1
          ? dashboard?.order_data?.sell_price
          : dashboard?.order_data?.buy_price,
      amount: 0,
      total_profit: 0,
      total_loss: 0,
    });
    setOpenCloseMarketCoinData({
      price:
        tradingTab === 1
          ? dashboard?.order_data?.sell_price
          : dashboard?.order_data?.buy_price,
      amount: 0,
      total_profit: 0,
      total_loss: 0,
    });
  };

  useEffect(() => {
    initialSetUp();
  }, [currentPair, dashboard, tradingTab]);

  return (
    <div className="exchange-box order-box">
      {/* <div className="trades-headers">
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
              handletradingTab(1);
            }}
          >
            <a
              id="pills-transfer-1-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="pills-transfer-1"
              aria-selected="true"
              className={`nav-link ${tradingTab === 1 ? "active" : ""}`}
            >
              {t("Open")}
            </a>
          </li>
          <li
            role="presentation"
            className="nav-item"
            onClick={() => {
              initialSetUp();
              handletradingTab(2);
            }}
          >
            <a
              id="pills-transfer-2-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="pills-transfer-2"
              aria-selected="false"
              className={`nav-link ${tradingTab === 2 ? "activeSell" : ""}`}
            >
              {t("Close")}
            </a>
          </li>
        </ul>
      </div> */}
      <div id="pills-tabContent" className="tab-content">
        <div
          id="pills-transfer-1"
          role="tabpanel"
          aria-labelledby="pills-transfer-1-tab"
          className={`tab-pane fade show ${tradingTab === 1 && "active"} `}
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
          className={`tab-pane fade show ${tradingTab === 2 && "active"} `}
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
