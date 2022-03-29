import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GetAllSellOrdersAppAction } from "state/actions/exchange";
import { RootState } from "state/store";
type Props = {
  orderHistory: boolean;
};

const OrderHistory = ({ orderHistory, orderHistoryState }: any) => {
  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.exchange
  );
  return (
    <div
      className={"tab-pane fade" + (orderHistory ? " show active" : "")}
      id="Trade-history"
      role="tabpanel"
      aria-labelledby="Trade-history-tab"
    >
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Pair</th>
              <th scope="col">Type</th>
              <th scope="col">Side</th>
              <th scope="col">Price</th>
              <th scope="col">Amount</th>
              <th scope="col">Filled</th>
              <th scope="col">total</th>
              <th scope="col">Trigger Conditions</th>
            </tr>
          </thead>
          <tbody>
            {orderHistoryState?.map((item: any, index: number) => (
              <tr key={index}>
                <td>{item.created_at}</td>
                <td>{currentPair && currentPair}</td>
                <td>Type</td>
                <td>Side</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>Filled</td>
                <td>total</td>
                <td>Trigger Conditions</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
