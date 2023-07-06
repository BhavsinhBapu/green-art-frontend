import { formateData } from "common";
import {
  FUTURE_TRADE_TYPE_OPEN,
  FUTURE_TRADE_TYPE_CLOSE,
  FUTURE_TRADE_TYPE_TAKE_PROFIT_CLOSE,
  FUTURE_TRADE_TYPE_STOP_LOSS_CLOSE,
  TRADE_TYPE_BUY,
  TRADE_TYPE_SELL,
} from "helpers/core-constants";
import React from "react";
import { canceledBuySellOrderAction } from "state/actions/futureTrade";

const OpenOrder = ({ openOrder }: any) => {
  const conditon = (item: any) => {
    if (item.side === 1) {
      if (item?.take_profit_price > 0) {
        return "Mark price >= " + item?.take_profit_price;
      } else {
        return "Mark price <= " + item?.stop_loss_price;
      }
    } else {
      if (item?.take_profit_price > 0) {
        return "Mark price <= " + item?.take_profit_price;
      } else {
        return "Mark price >= " + item?.stop_loss_price;
      }
    }
  };
  return (
    <div>
      <div className="tab-content p-3" id="ordersTabContent">
        <div
          className="tab-pane fade show active"
          id="Open-orders"
          role="tabpanel"
          aria-labelledby="Open-orders-tab"
        >
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  <th scope="col">Symbol</th>
                  <th scope="col">Type</th>
                  <th scope="col">Side</th>
                  <th scope="col">Price</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Filled</th>

                  <th scope="col">Trigger Conditions</th>
                  <th scope="col">Cancel</th>
                </tr>
              </thead>
              <tbody>
                {openOrder.map((item: any) => (
                  <tr>
                    <td>{formateData(item?.created_at)}</td>
                    <td>{item?.profit_loss_calculation?.symbol}</td>
                    <td>
                      {item?.trade_type === FUTURE_TRADE_TYPE_OPEN &&
                      item?.is_market === 0
                        ? "Limit"
                        : item?.trade_type === FUTURE_TRADE_TYPE_CLOSE &&
                          item?.is_market === 0
                        ? "Limit"
                        : item?.trade_type ===
                          FUTURE_TRADE_TYPE_TAKE_PROFIT_CLOSE
                        ? "Take profit market"
                        : item?.trade_type === FUTURE_TRADE_TYPE_STOP_LOSS_CLOSE
                        ? "stop market"
                        : "Market"}
                    </td>

                    {item?.side === TRADE_TYPE_BUY &&
                    item?.trade_type === FUTURE_TRADE_TYPE_OPEN ? (
                      <td className="text-success">Open Long</td>
                    ) : item?.side === TRADE_TYPE_SELL &&
                      item?.trade_type === FUTURE_TRADE_TYPE_OPEN ? (
                      <td className="text-success">Open short</td>
                    ) : item?.side === TRADE_TYPE_BUY &&
                      item?.trade_type === FUTURE_TRADE_TYPE_CLOSE ? (
                      <td className="text-danger">Close Long</td>
                    ) : item?.side === TRADE_TYPE_SELL &&
                      item?.trade_type === FUTURE_TRADE_TYPE_CLOSE ? (
                      <td className="text-danger">Close Short</td>
                    ) : item?.side === TRADE_TYPE_SELL &&
                      item?.trade_type ===
                        FUTURE_TRADE_TYPE_TAKE_PROFIT_CLOSE ? (
                      <td className="text-danger">Close Short</td>
                    ) : item?.side === TRADE_TYPE_SELL &&
                      item?.trade_type === FUTURE_TRADE_TYPE_STOP_LOSS_CLOSE ? (
                      <td className="text-danger">Close Short</td>
                    ) : item?.side === TRADE_TYPE_BUY &&
                      item?.trade_type ===
                        FUTURE_TRADE_TYPE_TAKE_PROFIT_CLOSE ? (
                      <td className="text-danger">Close Long</td>
                    ) : item?.side === TRADE_TYPE_BUY &&
                      item?.trade_type === FUTURE_TRADE_TYPE_STOP_LOSS_CLOSE ? (
                      <td className="text-danger">Close Long</td>
                    ) : (
                      ""
                    )}

                    <td>
                      {item?.price}{" "}
                      {item?.profit_loss_calculation?.base_coin_type}
                    </td>
                    <td>
                      {item?.amount_in_trade_coin}{" "}
                      {item?.profit_loss_calculation?.trade_coin_type}
                    </td>
                    <td> 0{item?.profit_loss_calculation?.trade_coin_type}</td>

                    <td>{conditon(item)}</td>
                    <td>
                      <button
                        className="cancel"
                        onClick={() => {
                          canceledBuySellOrderAction(item?.uid);
                        }}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenOrder;
