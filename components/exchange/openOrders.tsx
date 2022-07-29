import { formateData } from "common";
import useTranslation from "next-translate/useTranslation";
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
  const { t } = useTranslation("common");
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
              <th scope="col">{t("Created at")}</th>
              <th scope="col">{t("Actual amount")}</th>
              <th scope="col">{t("Actual total")}</th>
              <th scope="col">{t("Amount")}</th>
              <th scope="col">{t("Fees")}</th>
              <th scope="col">{t("Price<")}</th>
              <th scope="col">{t("Processed")}</th>
              <th scope="col">{t("total")}</th>
              <th scope="col">{t("Type")}</th>
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
                    {t("Cancel")}
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
