import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function TradeSections() {
  const { t } = useTranslation();
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-12 px-2">
          <div className="market-trend-area ">
            <div className="container">
              <div className="exchange-tab-menu">
                <ul className="nav nav-tabs" id="exchangeTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="CoreAssets-tab"
                      data-toggle="tab"
                      href="#CoreAssets"
                      role="tab"
                      aria-controls="CoreAssets"
                      aria-selected="true"
                    >
                      {t("Core Assets")}
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="Gainers-tab"
                      data-toggle="tab"
                      href="#Gainers"
                      role="tab"
                      aria-controls="Gainers"
                      aria-selected="false"
                    >
                      {t("24H Gainers")}
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="Listings-tab"
                      data-toggle="tab"
                      href="#Listings"
                      role="tab"
                      aria-controls="Listings"
                      aria-selected="false"
                    >
                      {t("New Listings")}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="exchangeTabContent">
                <div
                  className="tab-pane fade show active"
                  id="CoreAssets"
                  role="tabpanel"
                  aria-labelledby="CoreAssets-tab"
                >
                  <div className="exchange-volume-table">
                    <div className="table-responsive">
                      <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <table
                          className="table table-borderless dataTable no-footer"
                          id="DataTables_Table_0"
                          role="grid"
                          aria-describedby="DataTables_Table_0_info"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                scope="col"
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "137.516px" }}
                              >
                                {t("Market")}
                              </th>
                              <th
                                scope="col"
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "81.2812px" }}
                              >
                                {t("Price")}
                              </th>
                              <th
                                scope="col"
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "193.797px" }}
                              >
                                {t("Change (24h)")}
                              </th>
                              <th
                                scope="col"
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "182.297px" }}
                              >
                                {t("Chart")}
                              </th>
                              <th
                                scope="col"
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "207.766px" }}
                              >
                                {t("Volume")}
                              </th>
                              <th
                                scope="col"
                                className="sorting_disabled text-right"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "127.344px" }}
                              >
                                {t("Actions")}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                              <tr role="row" className="odd" key={item}>
                                <td className="d-flex">
                                  <img
                                    className="icon mr-3"
                                    src={"/bitcoin.png"}
                                    alt="coin"
                                    width="25px"
                                    height="25px"
                                  />
                                  <a className="cellMarket" href="#">
                                    <div className="marketSymbols">
                                      <span className="quoteSymbol">SHIB</span>
                                      <span className="baseSymbol">/USDT</span>
                                    </div>
                                  </a>
                                </td>
                                <td className="text-black">0.0000077</td>
                                <td>
                                  <span className={`changePos text-danger`}>
                                    0.00000000%
                                  </span>
                                </td>
                                <td>
                                  <img
                                    src="/chart-image-2.png"
                                    alt="chart-image"
                                    className="chart-img"
                                  />
                                </td>
                                <td className="text-black">
                                  878256.00000000 USDT
                                </td>
                                <td className="text-right">
                                  <a className="btnTrade btn-link mb-2">
                                    {t("Trade")}
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
