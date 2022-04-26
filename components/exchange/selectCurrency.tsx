import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store";
import { setCurrentPair } from "state/reducer/exchange";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const SelectCurrency = () => {
  const router = useRouter();
  const [pairs, setPairs] = React.useState([]);
  const { dashboard } = useSelector((state: RootState) => state.exchange);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dashboard?.pairs) {
      setPairs(dashboard.pairs);
    }
  }, [dashboard]);
  return (
    <div className="cp-user-buy-coin-content-area">
      <div className="cp-user-wallet-table dashboard-coin_pairs table-responsive">
        <div
          id="exchangeCoinPair_wrapper"
          className="dataTables_wrapper no-footer"
        >
          <div id="exchangeCoinPair_filter" className="dataTables_filter">
            <label>
              <input
                type="search"
                className=""
                placeholder="Search"
                aria-controls="exchangeCoinPair"
                onChange={(e) => {
                  // on typing end

                  const searchText = e.target.value;
                  const filteredPairs = dashboard.pairs.filter((pair: any) => {
                    return pair?.coin_pair_name
                      .toLowerCase()
                      .includes(searchText.toLowerCase());
                  });
                  setPairs(filteredPairs);
                }}
              />
            </label>
          </div>
          <div
            id="exchangeCoinPair_processing"
            className="dataTables_processing"
            style={{ display: "none" }}
          >
            Processing...
          </div>
          <div className="dataTables_scroll">
            <div
              className="dataTables_scrollHead"
              style={{
                overflow: "hidden",
                position: "relative",
                border: "0px",
                width: "100%",
              }}
            >
              <div
                className="dataTables_scrollHeadInner"
                style={{
                  boxSizing: "content-box",
                  width: "415px",
                  paddingRight: "17px",
                }}
              >
                <table
                  className="table dataTable no-footer"
                  role="grid"
                  style={{
                    marginLeft: "0px",
                    width: "415px",
                  }}
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="text-left text-green w-30 sorting_asc"
                        tabIndex={0}
                        aria-controls="exchangeCoinPair"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "104.672px" }}
                        aria-label="Coins: activate to sort column descending"
                        aria-sort="ascending"
                      >
                        Coins
                      </th>
                      <th
                        className="text-center w-40 sorting"
                        tabIndex={0}
                        aria-controls="exchangeCoinPair"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "103.281px" }}
                        aria-label="Last: activate to sort column ascending"
                      >
                        Last
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="exchangeCoinPair"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "147.047px" }}
                        aria-label="Balance: activate to sort column ascending"
                      >
                        Balance
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
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
                  {pairs?.map((pair: any, index: number) => (
                    <tr
                      role="row"
                      key={index}
                      className="odd"
                      id="market-BCH_BTC"
                    >
                      <td
                        className="text-left text-green w-30 sorting_1"
                        style={{ padding: "5px" }}
                      >
                        <tr
                          className="text-info select_coin_pair p-0 m-0"
                          data-baseid={1}
                          data-tradeid={5}
                          // href="/exchange/dashboard"
                          onClick={async () => {
                            await localStorage.setItem(
                              "base_coin_id",
                              dashboard?.order_data?.base_coin_id
                            );
                            await localStorage.setItem(
                              "trade_coin_id",
                              dashboard?.order_data?.trade_coin_id
                            );
                            await localStorage.setItem(
                              "current_pair",
                              pair.coin_pair
                            );
                            router.replace(
                              "/exchange/dashboard?base_coin_id=" +
                                pair.base_coin_id +
                                "&trade_coin_id=" +
                                pair.trade_coin_id
                            );
                            //@ts-ignore
                            // window.location.reload();
                            // await dispatch(setCurrentPair(pair.coin_pair));
                            //pause 4 seconds

                            router.reload();
                          }}
                        >
                          {pair?.coin_pair_name}
                        </tr>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCurrency;
