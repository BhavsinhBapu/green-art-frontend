import React from "react";

type Props = {
  tradeOrder: boolean;
};

const TradeOrder = ({ tradeOrder }: Props) => {
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
              <th scope="col">Date3</th>
              <th scope="col">Pair</th>
              <th scope="col">Type</th>
              <th scope="col">Side</th>
              <th scope="col">Price</th>
              <th scope="col">Amount</th>
              <th scope="col">Filled</th>
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

export default TradeOrder;
