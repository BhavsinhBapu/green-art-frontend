import { formateData } from "common";
import useTranslation from "next-translate/useTranslation";
import React from "react";

const TradeOrder = ({ tradeOrder, tradeOrderHistory }: any) => {
  const { t } = useTranslation("common");
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
              <th scope="col">{t("Created At")}</th>
              <th scope="col">{t("Transaction id")}</th>
              <th scope="col">{t("Fees")}</th>
              <th scope="col">{t("Amount")}</th>
              <th scope="col">{t("Price")}</th>
              <th scope="col">{t("Time")}</th>
              <th scope="col">{t("Total")}</th>
            </tr>
          </thead>
          <tbody>
            {tradeOrderHistory?.map((order: any, index: number) => (
              <tr key={index}>
                <td>{formateData(order.created_at)}</td>
                <td>{order.transaction_id}</td>
                <td>{order.fees}</td>
                <td>{order.amount}</td>
                <td>{order.price}</td>
                <td>{order.time}</td>
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
