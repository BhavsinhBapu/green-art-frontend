import React, { useState } from "react";

type Props = {
  openOrders: boolean;
};
const OpenOrders = ({ openOrders }: Props) => {
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
              <th scope="col">Date</th>

              <th scope="col">Type</th>
              <th scope="col">Amount(BTC)</th>
              <th scope="col">Price(USDT)</th>
              <th scope="col">Total(USDT)</th>
              <th scope="col">Fees(USDT)</th>
              <th scope="col">total</th>
              <th scope="col">Trigger Conditions</th>
              <th scope="col">
                <button className="cancel">Cancel All</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Date</td>
              <td>Pair</td>
              <td>Type</td>
              <td>Side</td>
              <td>Price</td>
              <td>Amount</td>
              <td>Filled</td>
              <td>total</td>
              <td>Trigger Conditions</td>
              <td>
                <button className="cancel">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OpenOrders;
