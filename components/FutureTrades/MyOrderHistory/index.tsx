import React, { useEffect, useState } from "react";
import Position from "./position";
import {
  OPEN_ORDER,
  ORDER_HISTORY,
  POSITON,
  TRADE_HISTORY,
  TRANSACTION_HISTORY,
} from "helpers/core-constants";
import OpenOrder from "./open-order";
import OrderHistory from "./order-history";
import TradeHistory from "./trade-history";
import TransactionHistory from "./transaction-history";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import { getLongShortPositionOrderListAction, getShortLongOrderHistoryAction } from "state/actions/futureTrade";

const MyOrderHistory = () => {
  const [selected, setSelected] = useState(POSITON);
  const [listData, setListData] = useState([]);
  const [openOrder, setOpenOrder] = useState([]);
  const { dashboard } = useSelector((state: RootState) => state.exchange);
  useEffect(() => {
    if (
      dashboard?.order_data?.base_coin_id &&
      dashboard?.order_data?.trade_coin_id
    ) {
      getLongShortPositionOrderListAction(
        setListData,
        dashboard?.order_data?.base_coin_id,
        dashboard?.order_data?.trade_coin_id
      );
      getShortLongOrderHistoryAction(
        setOpenOrder,
        dashboard?.order_data?.base_coin_id,
        dashboard?.order_data?.trade_coin_id
      );
    }
  }, [
    dashboard?.order_data?.trade_coin_id,
    dashboard?.order_data?.base_coin_id,
  ]);
  return (
    <div>
      <div className="orders-area mt-4 ml-3 mr-3">
        <div className="orders-area-top">
          <div className="top-left">
            <ul id="ordersTab" role="tablist" className="nav nav-tabs">
              <li role="presentation" className="nav-item">
                <a
                  id="Open-orders-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="Open-orders"
                  aria-selected="true"
                  className={`nav-link ${selected === POSITON && "active"}`}
                  onClick={() => {
                    setSelected(POSITON);
                  }}
                >
                  Position
                </a>
              </li>
              <li role="presentation" className="nav-item">
                <a
                  id="Open-orders-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="Open-orders"
                  aria-selected="true"
                  className={`nav-link false ${
                    selected === OPEN_ORDER && "active"
                  }`}
                  onClick={() => {
                    setSelected(OPEN_ORDER);
                  }}
                >
                  Open order
                </a>
              </li>
              <li role="presentation" className="nav-item">
                <a
                  id="Open-orders-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="Open-orders"
                  aria-selected="true"
                  className={`nav-link false ${
                    selected === ORDER_HISTORY && "active"
                  }`}
                  onClick={() => {
                    setSelected(ORDER_HISTORY);
                  }}
                >
                  Order history
                </a>
              </li>
              <li role="presentation" className="nav-item">
                <a
                  id="Open-orders-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="Open-orders"
                  aria-selected="true"
                  className={`nav-link false ${
                    selected === TRADE_HISTORY && "active"
                  }`}
                  onClick={() => {
                    setSelected(TRADE_HISTORY);
                  }}
                >
                  Trade Hisotry
                </a>
              </li>
              <li role="presentation" className="nav-item">
                <a
                  id="Open-orders-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="Open-orders"
                  aria-selected="true"
                  className={`nav-link false ${
                    selected === TRANSACTION_HISTORY && "active"
                  }`}
                  onClick={() => {
                    setSelected(TRANSACTION_HISTORY);
                  }}
                >
                  Transaction History
                </a>
              </li>
            </ul>
          </div>
        </div>
        {selected === POSITON && <Position listData={listData} />}
        {selected === OPEN_ORDER && <OpenOrder openOrder={openOrder} />}
        {selected === ORDER_HISTORY && <OrderHistory />}
        {selected === TRADE_HISTORY && <TradeHistory />}
        {selected === TRANSACTION_HISTORY && <TransactionHistory />}
      </div>
    </div>
  );
};

export default MyOrderHistory;
