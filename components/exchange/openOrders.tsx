import React, { useState } from "react";

type Props = {
  openOrders: boolean;
};
const OpenOrders = ({ openOrders, openOrderHistory }: any) => {
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
              <th scope="col">Processed)</th>
              <th scope="col">total</th>
              <th scope="col">Type</th>
              <th scope="col">
                <button className="cancel">Cancel All</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {openOrderHistory?.map((order: any) => (
              <tr>
                <td>{order.created_at}</td>
                <td>{order.actual_amount}</td>
                <td>{order.actual_total}</td>
                <td>{order.amount}</td>
                <td>{order.fees}</td>
                <td>{order.price}</td>
                <td>{order.processed}</td>
                <td>{order.total}</td>
                <td>{order.type}</td>
                <td>
                  <button className="cancel">Cancel</button>
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
