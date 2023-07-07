import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import PositionEdit from "../Modals/positionEdit";
import {
  closeLongShortAllOrderAction,
  getLongShortPositionOrderListAction,
} from "state/actions/futureTrade";
import PositionRow from "./PositionRow";
import { RootState } from "state/store";
import { useDispatch, useSelector } from "react-redux";

const Position = ({ listData }: any) => {
  const [CloseAll, setCloseAll] = useState<any>([]);
  const { dashboard } = useSelector((state: RootState) => state.exchange);
  const dispatch = useDispatch();

  const makeList = () => {
    let arr: any = [];
    listData.map((list: any) => {
      arr.push({
        order_id: list?.id,
        order_type: 1,
        side: list?.side,
        price: dashboard?.order_data?.total?.trade_wallet?.last_price,
      });
    });
    setCloseAll(arr);
  };
  useEffect(() => {
    listData.length && makeList();
  }, [listData]);
  console.log(listData, "CloseAll");
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
                  <th
                    scope="button-future-close"
                    onClick={() => {
                      console.log("SSSSSSSSSSSSssss");
                      dispatch(
                        closeLongShortAllOrderAction(
                          CloseAll,
                          dashboard?.order_data?.coin_pair_id
                        )
                      );
                    }}
                  >
                    Close All Positions
                  </th>
                </tr>
              </thead>

              {listData?.map((list: any, index: any) => (
                <PositionRow
                  list={list}
                  Close={CloseAll[index]}
                  setCloseAll={setCloseAll}
                  CloseAll={CloseAll}
                  index={index}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;
