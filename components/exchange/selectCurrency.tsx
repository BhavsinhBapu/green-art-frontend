import React from "react";

const SelectCurrency = () => {
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
        </thead>{" "}
        <tbody>
          <tr role="row" className="odd" id="market-BCH_BTC">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={1}
                data-tradeid={5}
              >
                BCH/BTC
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-BCH_DASH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={6}
                data-tradeid={5}
              >
                BCH/DASH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-BCH_DOGE">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={4}
                data-tradeid={5}
              >
                BCH/DOGE
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-BCH_ETH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={2}
                data-tradeid={5}
              >
                BCH/ETH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-BCH_LTC">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={3}
                data-tradeid={5}
              >
                BCH/LTC
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-BCH_USDT">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={7}
                data-tradeid={5}
              >
                BCH/USDT
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-BTC_BCH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={5}
                data-tradeid={1}
              >
                BTC/BCH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-BTC_DASH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={6}
                data-tradeid={1}
              >
                BTC/DASH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-BTC_DOGE">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={4}
                data-tradeid={1}
              >
                BTC/DOGE
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-BTC_ETH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={2}
                data-tradeid={1}
              >
                BTC/ETH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-BTC_LTC">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={3}
                data-tradeid={1}
              >
                BTC/LTC
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even selected" id="market-BTC_USDT">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={7}
                data-tradeid={1}
              >
                BTC/USDT
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-DASH_BCH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={5}
                data-tradeid={6}
              >
                DASH/BCH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-DASH_BTC">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={1}
                data-tradeid={6}
              >
                DASH/BTC
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-DASH_DOGE">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={4}
                data-tradeid={6}
              >
                DASH/DOGE
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-DASH_ETH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={2}
                data-tradeid={6}
              >
                DASH/ETH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-DASH_LTC">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={3}
                data-tradeid={6}
              >
                DASH/LTC
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-DASH_USDT">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={7}
                data-tradeid={6}
              >
                DASH/USDT
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-DOGE_BCH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={5}
                data-tradeid={4}
              >
                DOGE/BCH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-DOGE_BTC">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={1}
                data-tradeid={4}
              >
                DOGE/BTC
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-DOGE_DASH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={6}
                data-tradeid={4}
              >
                DOGE/DASH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-DOGE_ETH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={2}
                data-tradeid={4}
              >
                DOGE/ETH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-DOGE_LTC">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={3}
                data-tradeid={4}
              >
                DOGE/LTC
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-DOGE_USDT">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={7}
                data-tradeid={4}
              >
                DOGE/USDT
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-ETH_BCH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={5}
                data-tradeid={2}
              >
                ETH/BCH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-ETH_BTC">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={1}
                data-tradeid={2}
              >
                ETH/BTC
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-ETH_DASH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={6}
                data-tradeid={2}
              >
                ETH/DASH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-ETH_DOGE">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={4}
                data-tradeid={2}
              >
                ETH/DOGE
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-ETH_LTC">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={3}
                data-tradeid={2}
              >
                ETH/LTC
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-ETH_USDT">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={7}
                data-tradeid={2}
              >
                ETH/USDT
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-LTC_BCH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={5}
                data-tradeid={3}
              >
                LTC/BCH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-LTC_BTC">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={1}
                data-tradeid={3}
              >
                LTC/BTC
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-LTC_DASH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={6}
                data-tradeid={3}
              >
                LTC/DASH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-LTC_DOGE">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={4}
                data-tradeid={3}
              >
                LTC/DOGE
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-LTC_ETH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={2}
                data-tradeid={3}
              >
                LTC/ETH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-LTC_USDT">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={7}
                data-tradeid={3}
              >
                LTC/USDT
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-USDT_BCH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={5}
                data-tradeid={7}
              >
                USDT/BCH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-USDT_BTC">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={1}
                data-tradeid={7}
              >
                USDT/BTC
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-USDT_DASH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={6}
                data-tradeid={7}
              >
                USDT/DASH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-USDT_DOGE">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={4}
                data-tradeid={7}
              >
                USDT/DOGE
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="odd" id="market-USDT_ETH">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={2}
                data-tradeid={7}
              >
                USDT/ETH
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
          <tr role="row" className="even" id="market-USDT_LTC">
            <td
              className="text-left text-green w-30 sorting_1"
              style={{ padding: "5px" }}
            >
              <a
                className="text-info select_coin_pair p-0 m-0"
                data-baseid={3}
                data-tradeid={7}
              >
                USDT/LTC
              </a>
            </td>
            <td className=" text-center w-40" style={{ padding: "5px" }}>
              0.0000
            </td>
            <td style={{ padding: "5px" }}>0.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SelectCurrency;
