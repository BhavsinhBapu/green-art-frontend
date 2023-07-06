import React from "react";
import { ResponsiveContainer, LineChart, Line } from "recharts";

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
export default function MarketIndexCard() {
  return (
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
          <ResponsiveContainer height={20}>
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
  );
}
