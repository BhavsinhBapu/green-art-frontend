import React, { useState } from "react";
import PositionEdit from "../Modals/positionEdit";

const PositionRow = ({ list }: any) => {
  const [selected, setSelected] = useState(1);

  return (
    <tbody>
      {" "}
      <tr>
        <td>
          <h6 className="">{list?.profit_loss_calculation?.symbol}</h6>
          <span>Perpatual</span>
        </td>
        <td>{list?.amount_in_trade_coin}</td>
        <td>{list?.entry_price}</td>
        <td>26100.6</td>
        <td>{list?.liquidation_price}</td>
        <td>{list?.profit_loss_calculation?.margin_ratio}</td>
        <td>
          {list?.margin}
          {list?.profit_loss_calculation?.base_coin_type}
        </td>
        <td>
          <span className="text-success">
            {list?.profit_loss_calculation?.pnl}{" "}
            {list?.profit_loss_calculation?.base_coin_type}
          </span>
          <div className="text-success">
            {list?.profit_loss_calculation?.roe}%
          </div>
        </td>
        <td className="position-container">
          <span
            className={`ml-2 ${selected === 1 && "text-warning"}`}
            onClick={() => {
              setSelected(1);
            }}
          >
            Market
          </span>
          <span
            className={`ml-2 ${selected === 2 && "text-warning"}`}
            onClick={() => {
              setSelected(2);
            }}
          >
            Limit
          </span>
          <div className="">
            <input
              name="price"
              type="text"
              placeholder="0"
              className=""
              value="100.00"
            />
          </div>
          <div className="">
            <input
              name="price"
              type="text"
              placeholder="0"
              className=""
              value="100.00"
            />
          </div>
          <PositionEdit item={list} />
        </td>
      </tr>
    </tbody>
  );
};

export default PositionRow;
