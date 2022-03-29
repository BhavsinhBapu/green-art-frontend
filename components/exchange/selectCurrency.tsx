import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store";
import { setCurrentPair } from "state/reducer/exchange";

const SelectCurrency = () => {
  const { dashboard } = useSelector((state: RootState) => state.exchange);
  const dispatch = useDispatch();
  return (
    <div
      className="dataTables_scrollBody"
      style={{
        position: "relative",
        overflow: "auto",
        height: "448px",
        width: "100%",
      }}
    >
      <table
        id="exchangeCoinPair"
        className="table dataTable no-footer"
        role="grid"
        style={{ width: "100%" }}
      >
        <thead>
          <tr role="row" style={{ height: "0px" }}>
            <th
              className="text-left text-green w-30 sorting_asc"
              aria-controls="exchangeCoinPair"
              rowSpan={1}
              colSpan={1}
              style={{
                width: "104.672px",
                paddingTop: "0px",
                paddingBottom: "0px",
                borderTopWidth: "0px",
                borderBottomWidth: "0px",
                height: "0px",
              }}
              aria-label="Coins: activate to sort column descending"
              aria-sort="ascending"
            >
              <div
                className="dataTables_sizing"
                style={{
                  height: 0,
                  overflow: "hidden",
                }}
              >
                Coins
              </div>
            </th>
            <th
              className="text-center w-40 sorting"
              aria-controls="exchangeCoinPair"
              rowSpan={1}
              colSpan={1}
              style={{
                width: "103.281px",
                paddingTop: "0px",
                paddingBottom: "0px",
                borderTopWidth: "0px",
                borderBottomWidth: "0px",
                height: "0px",
              }}
              aria-label="Last: activate to sort column ascending"
            >
              <div
                className="dataTables_sizing"
                style={{
                  height: 0,
                  overflow: "hidden",
                }}
              >
                Last
              </div>
            </th>
            <th
              className="sorting"
              aria-controls="exchangeCoinPair"
              rowSpan={1}
              colSpan={1}
              style={{
                width: "147.047px",
                paddingTop: "0px",
                paddingBottom: "0px",
                borderTopWidth: "0px",
                borderBottomWidth: "0px",
                height: "0px",
              }}
              aria-label="Balance: activate to sort column ascending"
            >
              <div
                className="dataTables_sizing"
                style={{
                  height: 0,
                  overflow: "hidden",
                }}
              >
                Balance
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {dashboard?.pairs?.map((pair: any) => (
            <tr
              role="row"
              className="odd"
              id="market-BCH_BTC"
              onClick={() => dispatch(setCurrentPair(pair.coin_pair))}
            >
              <td
                className="text-left text-green w-30 sorting_1"
                style={{ padding: "5px" }}
              >
                <a
                  className="text-info select_coin_pair p-0 m-0"
                  data-baseid={1}
                  data-tradeid={5}
                >
                  {pair?.coin_pair_name}
                </a>
              </td>
              <td className="text-center w-40 text-white">
                {pair?.last_price}
              </td>
              <td className="text-white">{pair?.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectCurrency;
