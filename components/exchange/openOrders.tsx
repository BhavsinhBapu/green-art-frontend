import { formateData } from "common";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelOrderAppAction,
  initialDashboardCallActionWithToken,
} from "state/actions/exchange";
import { RootState } from "state/store";

type Props = {
  openOrders: boolean;
};
const OpenOrders = ({ openOrders, openOrderHistory }: any) => {
  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.exchange
  );
  const dispatch = useDispatch();
  return (
    <div
      className={"tab-pane fade" + (openOrders ? " show active" : "")}
      id="Open-orders"
      role="tabpanel"
      aria-labelledby="Open-orders-tab"
    >
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Created at</th>
              <th scope="col">Actual amount</th>
              <th scope="col">Actual total</th>
              <th scope="col">Amount</th>
              <th scope="col">Fees</th>
              <th scope="col">Price</th>
              <th scope="col">Processed</th>
              <th scope="col">total</th>
              <th scope="col">Type</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {openOrderHistory?.map((order: any, index: number) => (
              <tr key={index}>
                <td>{formateData(order.created_at)}</td>
                <td>{order.actual_amount}</td>
                <td>{order.actual_total}</td>
                <td>{order.amount}</td>
                <td>{order.fees}</td>
                <td>{order.price}</td>
                <td>{order.processed}</td>
                <td>{order.total}</td>
                <td>{order.type}</td>
                <td>
                  <button
                    className="cancel"
                    onClick={async () => {
                      await cancelOrderAppAction("buy", order.id);
                      if (currentPair && dashboard) {
                        await dispatch(
                          initialDashboardCallActionWithToken(
                            currentPair,
                            dashboard
                          )
                        );
                      }
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
  );
};

export default OpenOrders;
