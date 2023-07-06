import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
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

export default function AreaCharts() {
  return (
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
  );
}
