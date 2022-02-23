import React, { useState } from "react";
import OpenOrders from "./openOrders";
import OrderHistory from "./orderHistory";
import TradeOrder from "./tradeOrder";

const orderHistorySection = () => {
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
            </li>{" "}
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
            </li>{" "}
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
      </div>{" "}
      <div className="tab-content" id="ordersTabContent">
        <OpenOrders openOrders={activeTab.openOrders} />
        <OrderHistory orderHistory={activeTab.orderHistory} />
        <TradeOrder tradeOrder={activeTab.tradeOrder} />
      </div>
    </div>
  );
};

export default orderHistorySection;
