import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  GetAllSellOrdersAppAction,
  GetAllTradeOrdersAppAction,
  GetOpenOrdersAppAction,
} from "state/actions/exchange";
import { RootState } from "state/store";
import OpenOrders from "./openOrders";
import OrderHistory from "./orderHistory";
import TradeOrder from "./tradeOrder";

const OrderHistorySection = () => {
  type activeTabType = {
    openOrders: boolean;
    orderHistory: boolean;
    tradeOrder: boolean;
  };
  const [activeTab, setActiveTab] = useState<activeTabType>({
    openOrders: true,
    orderHistory: false,
    tradeOrder: false,
  });
  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.exchange
  );
  const [openOrderHistory, setOpenOrderHistory] = useState<any>([]);
  const [sellOrderHistory, setsellOrderHistory] = useState<any>([]);
  const [buyOrderHistory, setBuyOrderHistory] = useState<any>([]);
  const [tradeOrderHistory, settradeOrderHistory] = useState<any>([]);
  const getHistory = async () => {
    if (
      dashboard?.order_data?.base_coin_id &&
      dashboard?.order_data?.trade_coin_id
    ) {
      GetOpenOrdersAppAction(
        dashboard?.order_data?.base_coin_id,
        dashboard?.order_data?.trade_coin_id,
        "dashboard",
        "buy_sell",
        setOpenOrderHistory
      );

      GetAllSellOrdersAppAction(
        dashboard?.order_data?.base_coin_id,
        dashboard?.order_data?.trade_coin_id,
        "dashboard",
        "sell",
        setsellOrderHistory
      );
      GetAllSellOrdersAppAction(
        dashboard?.order_data?.base_coin_id,
        dashboard?.order_data?.trade_coin_id,
        "dashboard",
        "buy",
        setBuyOrderHistory
      );
      GetAllTradeOrdersAppAction(
        dashboard?.order_data?.base_coin_id,
        dashboard?.order_data?.trade_coin_id,
        "dashboard",
        settradeOrderHistory
      );
    }
  };
  React.useEffect(() => {
    console.log("orderHistory", sellOrderHistory);
    getHistory();
    return () => {
      setsellOrderHistory([]);
    };
  }, [currentPair, dashboard]);
  return (
    <div className="orders-area mt-4">
      <div className="orders-area-top">
        <div className="top-left">
          <ul id="ordersTab" role="tablist" className="nav nav-tabs">
            <li
              role="presentation"
              className="nav-item"
              onClick={() => {
                setActiveTab({
                  openOrders: true,
                  orderHistory: false,
                  tradeOrder: false,
                });
              }}
            >
              <a
                id="Open-orders-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="Open-orders"
                aria-selected="true"
                className={"nav-link " + (activeTab.openOrders && "active")}
              >
                Open orders
              </a>
            </li>
            <li
              role="presentation"
              className="nav-item"
              onClick={() => {
                setActiveTab({
                  openOrders: false,
                  orderHistory: true,
                  tradeOrder: false,
                });
              }}
            >
              <a
                id="Open-orders-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="Open-orders"
                aria-selected="true"
                className={"nav-link " + (activeTab.orderHistory && "active")}
              >
                Order history
              </a>
            </li>
            <li
              role="presentation"
              className="nav-item"
              onClick={() => {
                setActiveTab({
                  openOrders: false,
                  orderHistory: false,
                  tradeOrder: true,
                });
              }}
            >
              <a
                id="Open-orders-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="Open-orders"
                aria-selected="true"
                className={"nav-link " + (activeTab.tradeOrder && "active")}
              >
                Trade history
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="ordersTabContent">
        <OpenOrders
          openOrders={activeTab.openOrders}
          openOrderHistory={openOrderHistory}
        />
        <OrderHistory
          orderHistory={activeTab.orderHistory}
          sellOrderHistoryState={sellOrderHistory}
          buyOrderHistoryState={buyOrderHistory}
        />
        <TradeOrder
          tradeOrder={activeTab.tradeOrder}
          tradeOrderHistory={tradeOrderHistory}
        />
      </div>
    </div>
  );
};

export default OrderHistorySection;
