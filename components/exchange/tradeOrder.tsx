import React from "react";

type Props = {
  tradeOrder: boolean;
};

const TradeOrder = ({ tradeOrder, tradeOrderHistory }: any) => {
  return (
    <div
      className={"tab-pane fade" + (tradeOrder ? " show active" : "")}
      id="Funds"
      role="tabpanel"
      aria-labelledby="Funds-tab"
    >
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Created At</th>
              <th scope="col">Transaction id</th>
              <th scope="col">Fees</th>
              <th scope="col">Amount</th>
              <th scope="col">Price</th>
              <th scope="col">Last price</th>
              <th scope="col">Price order type</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {tradeOrderHistory?.map((order: any) => (
              <tr>
                <td>{order.created_at}</td>
                <td>{order.transaction_id}</td>
                <td>{order.fees}</td>
                <td>{order.amount}</td>
                <td>{order.price}</td>
                <td>{order.last_price}</td>
                <td>{order.price_order_type}</td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeOrder;
