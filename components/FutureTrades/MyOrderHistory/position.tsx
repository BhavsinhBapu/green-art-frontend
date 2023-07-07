import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import PositionEdit from "../Modals/positionEdit";
import { getLongShortPositionOrderListAction } from "state/actions/futureTrade";
import PositionRow from "./PositionRow";
import { RootState } from "state/store";
import { useSelector } from "react-redux";

const Position = ({listData}:any) => {
 
  return (
    <div>
      {" "}
      <div className="tab-content p-3" id="ordersTabContent">
        <div
          className="tab-pane fade show active"
          id="Open-orders"
          role="tabpanel"
          aria-labelledby="Open-orders-tab"
        >
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Symbol</th>
                  <th scope="col">Size</th>
                  <th scope="col">Entry Price</th>
                  <th scope="col">Mark Price</th>
                  <th scope="col">Liq Price</th>
                  <th scope="col">Margin Ratio</th>
                  <th scope="col">Margin</th>
                  <th scope="col">PNL(ROE)%</th>
                  <th scope="text-warning">Close All Positions</th>
                </tr>
              </thead>

              {listData?.map((list: any) => (
                <PositionRow list={list} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;
