import useTranslation from "next-translate/useTranslation";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
const data = [
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data02 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];
const COLORS = ["#f6465d", "#0ecb81"];

const RADIAN = Math.PI / 180;
const dataNeddle = [
  { name: "A", value: 80, color: "#f6465d" },
  { name: "B", value: 20, color: "#0ecb81" },
];
const cx = 115;
const cy = 105;
const iR = 80;
const oR = 110;
const value = 80;

const needle = (
  value: any,
  data: any,
  cx: any,
  cy: any,
  iR: any,
  oR: any,
  color: any
) => {
  let total = 0;
  dataNeddle.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

const lineChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Index() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container">
        <h1 className="banner-title py-4">{t("Crypto Futures Market")}</h1>
        {/* top chart start*/}
        <div className="row">
          <div className="col-lg-3 col-md-6 px-2">
            <div
              className="bg-card-primary-clr"
              style={{ height: "224px", borderRadius: "8px" }}
            >
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-12">Open Interest</p>
                    <div className="d-flex align-items-center">
                      <h5 className="text-14">BTCUSDT</h5>
                      <span className="text-12">Perpetual</span>
                    </div>
                  </div>
                  <div>Icon</div>
                </div>
                <div className="mt-3 mb-2">
                  <h4 className="text-16">353535353535 USDT</h4>
                </div>
                <div>
                  <span
                    className="text-16 d-inline-block mr-2 px-2 py-1"
                    style={{ background: "#35141D", color: "#F6465D" }}
                  >
                    -5.5%
                  </span>
                  <span className="text-14">24H Change</span>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 70,
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#dea83d"
                      fill="#281a00"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 px-2">
            <div
              className="bg-card-primary-clr"
              style={{ height: "224px", borderRadius: "8px" }}
            >
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-12">Long/Short Ratio</p>
                    <div className="d-flex align-items-center">
                      <h5 className="text-14">BTCUSDT</h5>
                      <span className="text-12">Perpetual</span>
                    </div>
                  </div>
                  <div>Icon</div>
                </div>

                <div className="row pt-3">
                  <div className="col-6 pl-3 pr-1">
                    <div>
                      <span className="text-12">Short Account%</span>
                      <h5 className="text-16">34.6%</h5>
                    </div>
                    <div>
                      <span className="text-12">Long Account%</span>
                      <h5 className="text-16">34.6%</h5>
                    </div>
                    <div>
                      <span className="text-12">Long/Short Ratio%</span>
                      <h5 className="text-16">0.94</h5>
                    </div>
                  </div>
                  <div className="col-6 px-1 d-flex align-items-center">
                    <div style={{ width: "100%", height: 100 }}>
                      <ResponsiveContainer>
                        <PieChart>
                          <Pie
                            data={data02}
                            innerRadius={30}
                            outerRadius={50}
                            dataKey="value"
                            stroke="none"
                          >
                            {data.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 px-2">
            <div
              className="bg-card-primary-clr"
              style={{ height: "224px", borderRadius: "8px" }}
            >
              <div className="p-3" style={{ height: "245px" }}>
                <div>
                  <p className="text-12">Open Interest</p>
                  <div className="d-flex align-items-center">
                    <h5 className="text-14">BTCUSDT</h5>
                    <span className="text-12">Perpetual</span>
                  </div>
                </div>
                <div
                  style={{ width: "100%", height: "100px" }}
                  className="mt-3"
                >
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={dataNeddle}
                        cx={cx}
                        cy={cy}
                        innerRadius={iR}
                        outerRadius={oR}
                        fill="#8884d8"
                        stroke="none"
                      >
                        {dataNeddle.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      {needle(value, dataNeddle, cx, cy, iR, oR, "#5e6673")}
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-center mt-3">
                  <h6>{value}</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 px-2">
            <div
              className="bg-card-primary-clr"
              style={{ height: "224px", borderRadius: "8px" }}
            >
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-12">
                      Highest Searched <span>24H</span>
                    </p>
                  </div>
                  <div>Button</div>
                </div>
                <div className="my-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="d-inline-block text-14 mr-2">
                        1000PEPUSDT{" "}
                      </h6>
                      <span className="text-12">Prepetual</span>
                    </div>
                    <p>-0.64%</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="d-inline-block text-14 mr-2">
                        1000PEPUSDT{" "}
                      </h6>
                      <span className="text-12">Prepetual</span>
                    </div>
                    <p>-0.64%</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="d-inline-block text-14 mr-2">
                        1000PEPUSDT{" "}
                      </h6>
                      <span className="text-12">Prepetual</span>
                    </div>
                    <p>-0.64%</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="d-inline-block text-14 mr-2">
                        1000PEPUSDT{" "}
                      </h6>
                      <span className="text-12">Prepetual</span>
                    </div>
                    <p>-0.64%</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="d-inline-block text-14 mr-2">
                        1000PEPUSDT{" "}
                      </h6>
                      <span className="text-12">Prepetual</span>
                    </div>
                    <p>-0.64%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* top chart end*/}

        {/* trade section start*/}
        <section className="market-trend-area my-5">
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
                              className="sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "127.344px" }}
                            >
                              {t("Actions")}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[1, 2, 3, 4].map((item) => (
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
                              <td>
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
        </section>
        {/* trade section end */}

        {/* market index  start*/}
        <div className="row" style={{ paddingTop: "48px" }}>
          <div className="col-12" style={{ marginBottom: "24px" }}>
            <h4>Market Index</h4>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <div className="market-index-card">
                  <h4 className="text-14">DeFi</h4>
                  <div className="row my-2">
                    <div className="col-4">
                      <p className="text-16">-3.48%</p>
                    </div>
                    <div className="col-4">
                      <p className="text-12">Up 1 down 19</p>
                    </div>
                    <div className="col-4">
                      <ResponsiveContainer>
                        <LineChart data={lineChart}>
                          <Line
                            type="monotone"
                            dataKey="pv"
                            dot={false}
                            stroke="#f6465d"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <h4 className="text-12">
                    ANKRUSDT <span>+7.24%</span>
                  </h4>
                </div>
              </div>
              <div className="col-6">
                <div className="market-index-card">
                  <h4 className="text-14">DeFi</h4>
                  <div className="row my-2">
                    <div className="col-4">
                      <p className="text-16">-3.48%</p>
                    </div>
                    <div className="col-4">
                      <p className="text-12">Up 1 down 19</p>
                    </div>
                    <div className="col-4">
                      <ResponsiveContainer>
                        <LineChart data={lineChart}>
                          <Line
                            type="monotone"
                            dataKey="pv"
                            dot={false}
                            stroke="#f6465d"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <h4 className="text-12">
                    ANKRUSDT <span>+7.24%</span>
                  </h4>
                </div>
              </div>
              <div className="col-6">
                <div className="market-index-card">
                  <h4 className="text-14">DeFi</h4>
                  <div className="row my-2">
                    <div className="col-4">
                      <p className="text-16">-3.48%</p>
                    </div>
                    <div className="col-4">
                      <p className="text-12">Up 1 down 19</p>
                    </div>
                    <div className="col-4">
                      <ResponsiveContainer>
                        <LineChart data={lineChart}>
                          <Line
                            type="monotone"
                            dataKey="pv"
                            dot={false}
                            stroke="#f6465d"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <h4 className="text-12">
                    ANKRUSDT <span>+7.24%</span>
                  </h4>
                </div>
              </div>
              <div className="col-6">
                <div className="market-index-card">
                  <h4 className="text-14">DeFi</h4>
                  <div className="row my-2">
                    <div className="col-4">
                      <p className="text-16">-3.48%</p>
                    </div>
                    <div className="col-4">
                      <p className="text-12">Up 1 down 19</p>
                    </div>
                    <div className="col-4">
                      <ResponsiveContainer>
                        <LineChart data={lineChart}>
                          <Line
                            type="monotone"
                            dataKey="pv"
                            dot={false}
                            stroke="#f6465d"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <h4 className="text-12">
                    ANKRUSDT <span>+7.24%</span>
                  </h4>
                </div>
              </div>
              <div className="col-6">
                <div className="market-index-card">
                  <h4 className="text-14">DeFi</h4>
                  <div className="row my-2">
                    <div className="col-4">
                      <p className="text-16">-3.48%</p>
                    </div>
                    <div className="col-4">
                      <p className="text-12">Up 1 down 19</p>
                    </div>
                    <div className="col-4">
                      <ResponsiveContainer>
                        <LineChart data={lineChart}>
                          <Line
                            type="monotone"
                            dataKey="pv"
                            dot={false}
                            stroke="#f6465d"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <h4 className="text-12">
                    ANKRUSDT <span>+7.24%</span>
                  </h4>
                </div>
              </div>
              <div className="col-6">
                <div className="market-index-card">
                  <h4 className="text-14">DeFi</h4>
                  <div className="row my-2">
                    <div className="col-4">
                      <p className="text-16">-3.48%</p>
                    </div>
                    <div className="col-4">
                      <p className="text-12">Up 1 down 19</p>
                    </div>
                    <div className="col-4">
                      <ResponsiveContainer>
                        <LineChart data={lineChart}>
                          <Line
                            type="monotone"
                            dataKey="pv"
                            dot={false}
                            stroke="#f6465d"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <h4 className="text-12">
                    ANKRUSDT <span>+7.24%</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* market index  end*/}

        <section className="start-trading-area">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="title">{t("Start trading now")}</h2>
            </div>
            <div className="trading-button text-center">
              <a className="primary-btn mr-0 mr-sm-5">{t("Sign Up")}</a>
              <a>
                <a className="primary-btn">{t("Trade Now")}</a>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
