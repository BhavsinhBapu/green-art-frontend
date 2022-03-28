import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GetAllSellOrdersAppAction } from "state/actions/reports";
import { RootState } from "state/store";
type Props = {
  orderHistory: boolean;
};

const OrderHistory = ({ orderHistory }: Props) => {
  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.exchange
  );
  const [history, setHistory] = useState<any>([]);
  const getReport = async () => {
    dashboard?.order_data?.base_coin_id &&
      dashboard?.order_data?.trade_coin_id &&
      GetAllSellOrdersAppAction(
        "buy",
        dashboard?.order_data?.base_coin_id,
        dashboard?.order_data?.trade_coin_id,
        10,
        "dashboard",
        setHistory
      );
  };
  React.useEffect(() => {
    getReport();
    return () => {
      setHistory([]);
    };
  }, [dashboard?.order_data?.base_coin_id]);
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
              <th scope="col">
                <button className="cancel">Cancel All</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {history?.map((item: any, index: number) => (
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

export default OrderHistory;
