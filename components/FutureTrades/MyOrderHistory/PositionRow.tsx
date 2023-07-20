import React, { useState } from "react";
import PositionEdit from "../Modals/positionEdit";
import { LIMIT_ORDER, MARKET_ORDER } from "helpers/core-constants";

const PositionRow = ({ list, Close, setCloseAll, index, CloseAll }: any) => {
  return (
    <tr className="position-row p-5">
      <td>
        <h6 className="">{list?.profit_loss_calculation?.symbol}</h6>
        <span>Perpatual</span>
      </td>
      <td>{list?.amount_in_trade_coin}</td>
      <td>{list?.entry_price}</td>
      <td>{list?.profit_loss_calculation?.market_price}</td>
      <td>{list?.liquidation_price}</td>
      <td>{list?.profit_loss_calculation?.margin_ratio}</td>
      <td>
        {list?.margin}
        {list?.profit_loss_calculation?.base_coin_type}
      </td>
      <td>
        <span
          className={
            parseFloat(list?.profit_loss_calculation?.pnl) <= 0
              ? "text-danger"
              : "text-success"
          }
        >
          {parseFloat(list?.profit_loss_calculation?.pnl).toFixed(4)}{" "}
          {list?.profit_loss_calculation?.base_coin_type}
        </span>

        <div
          className={
            parseFloat(list?.profit_loss_calculation?.roe) <= 0
              ? "text-danger"
              : "text-success"
          }
        >
          {parseFloat(list?.profit_loss_calculation?.roe).toFixed(4)}%
        </div>
      </td>
      <td className="position-container">
        <span
          className={`ml-2 ${
            Close?.order_type === MARKET_ORDER && "text-warning"
          }`}
          onClick={() => {
            setCloseAll({
              ...CloseAll,
              [index]: {
                ...CloseAll[index],
                order_type: MARKET_ORDER,
              },
            });
          }}
        >
          Market
        </span>
        <span
          className={`ml-2 ${
            Close?.order_type === LIMIT_ORDER && "text-warning"
          }`}
          onClick={() => {
            setCloseAll({
              ...CloseAll,
              [index]: {
                ...CloseAll[index],
                order_type: LIMIT_ORDER,
              },
            });
          }}
        >
          Limit
        </span>
        <div className="">
          <input
            name="price"
            type="number"
            placeholder="0"
            className=""
            value={Close?.price}
            onChange={(e) => {
              setCloseAll({
                ...CloseAll,
                [index]: {
                  ...CloseAll[index],
                  price: Number(e.target.value),
                },
              });
            }}
          />
        </div>

        <PositionEdit item={list} />
      </td>
    </tr>
  );
};

export default PositionRow;
